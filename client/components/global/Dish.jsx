import React from "react";
import { Switch } from "../ui/switch";
import { useToast } from "@/components/ui/use-toast";

const Dish = ({ dish }) => {
  const { toast } = useToast();

  const handleSwitch = async (id) => {
    const res = await fetch(
      `http://localhost:8080/api/dishes/toggleStatus/${id}`
    );
    const data = await res.json();
    if (res.status === 200) {
      dish.isPublished = !dish.isPublished;
      toast({
        title: "Success",
        description: data.message,
      });
    } else {
      toast({
        title: "Failed",
        description: data.message,
      });
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-bold text-neutral-600 dark:text-white">
        {dish.dishName}
      </div>
      <img
        src={dish.imageUrl}
        height="600"
        width="600"
        className="h-48 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
      <Switch
        checked={dish.isPublished}
        onCheckedChange={() => handleSwitch(dish.dishId)}
      />
    </div>
  );
};

export default Dish;
