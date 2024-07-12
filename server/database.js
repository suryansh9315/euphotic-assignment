const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;
const mongoClient = new MongoClient(url);
const database = mongoClient.db("euphotic");
const dishes = database.collection("dishes");

const connectDb = async (io) => {
  try {
    await mongoClient.connect();
    console.log("Successfully connected to Atlas");
    listener(io);
    console.log("Listening to changes in dishes collection...");
  } catch (err) {
    console.log(err.stack);
  }
};

const listener = (io) => {
  try {
    const options = { fullDocument: "updateLookup" };
    const pipeline = [];
    changeStream = dishes.watch(pipeline, options);
    changeStream.on("change", (event) => {
      if (event.operationType === "update") {
        const fullDocument = event.fullDocument;
        io.emit("updated_document", fullDocument);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDb,
  mongoClient,
  listener,
};
