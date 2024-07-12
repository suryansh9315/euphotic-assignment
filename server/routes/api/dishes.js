const express = require("express");
const { mongoClient } = require("../../database");

const database = mongoClient.db("euphotic");
const dishes = database.collection("dishes");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const query = {};
    const options = {
      sort: { dishId: 1 },
    };
    const dishesPointer = dishes.find(query, options);
    let allDishes = [];
    for await (const dish of dishesPointer) {
      allDishes.push(dish);
    }
    res.status(200).json({
      status: "success",
      message: "Successfully Fetched Dishes.",
      dishes: allDishes,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      message: "Something went wrong.",
    });
  }
});

app.get("/toggleStatus/:id", async (req, res) => {
  try {
    const query = { dishId: req.params.id };
    const dish = await dishes.findOne(query);
    if (!dish) {
      return res.status(404).json({
        status: "error",
        message: "Dish does not exist.",
      });
    }
    const update = {
      $set: {
        isPublished: !dish.isPublished,
      },
    };
    const options = { upsert: false };
    const result = await dishes.updateOne(query, update, options);
    if (result.matchedCount !== result.modifiedCount) {
      return res.status(400).json({
        status: "failure",
        message: "Something went wrong.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Successfully Updated Dish.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      message: "Something went wrong.",
    });
  }
});

module.exports = app;
