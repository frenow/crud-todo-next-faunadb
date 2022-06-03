import { React, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import newData from "../api/newData";
import TodoItem from "./TodoItem";
// import useSWR from "swr"

function Todo() {
  // const { data:todos, mutate }=useSWR("../api/todos")
  const [newtodo, setnewtodo] = useState("");
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({});
  const requestParams = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: inputData }),
  };

  async function fetchData() {
    const res = await fetch("../api/getData");
    const newData = await res.json();
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, [newtodo]);
  const handleinput = (e) => {
    setnewtodo(e.target.value);
    setInputData({
      ...inputData,
      newtodo: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    console.log(newtodo);
    addTodoItem();
    setnewtodo("");
  };

  async function addTodoItem() {
    await fetch("../api/newData", requestParams)
      .then(() => newData())
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.maincont}>
      <h1>Todo App</h1>
      <div className={styles.newtodo}>
        <h3>Add new todo</h3>
        <div className={styles.semi}>
          <input
            type="text"
            value={newtodo}
            onChange={(e) => handleinput(e)}
          ></input>
          <button onClick={() => HandleSubmit()}>Add Todo</button>
        </div>
      </div>
      <div>
        {data &&
          data.map((todo) => (
            <TodoItem key={todo.ref["@ref"].id} todo={todo} />
          ))}
      </div>
    </div>
  );
}

export default Todo;
