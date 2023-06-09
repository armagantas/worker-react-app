import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();
  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "Namespace is required",
        message: "Please enter a valid name",
      });
      return;
    }

    if (+enteredWage < minimumWage) {
      setError({
        title: "Salary space is required",
        message: "Please enter a valid salary amount",
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredWorkerName("");
    setEnteredWage("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
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
            onChange={(e) => setEnteredWorkerName(e.target.value)}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Salary Amount
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter a salary amount"
            id="wage"
            onChange={(e) => setEnteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button className="mt-2 bg-blue-600" type="submit">
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;
