"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NormalForm = () => {
  const [values, setvalues] = useState({
    item: "",
    price: "",
  });

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetValues();
  };
  const resetValues = (e) => {
    setvalues({ item: "", price: "" });
  };
  return (
    <div>
      <div className="h-full w-full">
        <div className="h-10 w-10 absolute text-center top-[45%] left-[45%]">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="Item">Item</label>
            <Input
              type="text"
              placeholder="Name of the itam"
              className="w-52 h-10 py-2 my-2"
              name="item"
              onChange={(e) => {
                handleChange(e);
              }}
              required
              value={values.item}
            />

            <label htmlFor="Price" className="my-2">
              Price
            </label>
            <Input
              type="text"
              placeholder="Price of the item"
              className="w-52 h-10 py-2 my-2"
              name="price"
              onChange={(e) => {
                handleChange(e);
              }}
              required
              value={values.price}
            />
            <Button variant="outline" className="py-2" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NormalForm;
