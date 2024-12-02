import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NormalForm = () => {
  return (
    <div>
      <div className="h-full w-full">
        <div className="h-10 w-10 absolute text-center top-[45%] left-[45%]">
          <form action="">
            <label htmlFor="Item">Item</label>
            <Input
              type="text"
              placeholder="Name of the itam"
              className="w-52 h-10 py-2 my-2"
            />

            <label htmlFor="Price" className="my-2">
              Price
            </label>
            <Input
              type="text"
              placeholder="Price of the item"
              className="w-52 h-10 py-2 my-2"
            />
          </form>
          <Button variant="outline" className="py-2">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NormalForm;
