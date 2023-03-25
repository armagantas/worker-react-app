import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");

  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value);
  };

  const wageChangeHandler = (e) => {
    setEnteredWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    console.log(enteredWage, enteredWorkerName);
  };
  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Worker Name
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter a workers name."
          id="name"
          onChange={workerNameChangeHandler}
        />
        <label htmlFor="wage" className="font-medium">
          Salary Amount
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter a salary amount"
          id="wage"
          onChange={wageChangeHandler}
        />
        <Button className="mt-2 bg-blue-600">Add</Button>
      </form>
    </Card>
  );
};

export default AddWorker;
