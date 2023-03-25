import React from "react";
import Card from "../UI/Card";

const AddWorker = () => {
  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2">
        <label htmlFor="name" className="font-medium">
          Worker Name
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter a workers name."
          id="name"
        />
        <label htmlFor="wage" className="font-medium">
          Salary Amount
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter a salary amount"
          id="wage"
        />
        <button className="p-2 text-lg bg-teal-700 text-white mt-2">Add</button>
      </form>
    </Card>
  );
};

export default AddWorker;
