import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import { ChangeEventHandler, useState } from "react";

type Todo = {
  title: string;
  done: boolean;
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newTodosValue = [
      ...todos,
      {
        title: inputValue,
        done: false,
      },
    ];

    setTodos(newTodosValue);
    setInputValue("");

    console.log("todos", newTodosValue);
  };

  const handleTodoChange = (
    changedTodoIdx: number
  ): ChangeEventHandler<HTMLInputElement> => {
    return () => {
      const newTodosValue = todos.map((todo, idx) => ({
        ...todo,
        done: idx === changedTodoIdx ? !todo.done : todo.done,
      }));

      setTodos(newTodosValue);

      console.log("todos", newTodosValue);
    };
  };

  return (
    <main className="p-5 flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Todo List</h1>
      <div className="flex flex-col gap-3">
        {todos.map((todo, index) => (
          <Todo
            onCheckboxChange={handleTodoChange(index)}
            title={todo.title}
            done={todo.done}
            key={`${todo.title}-${index}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Input onChange={handleInputChange} value={inputValue} />
        <Button onClick={handleButtonClick}>Add a todo</Button>
      </div>
    </main>
  );
};

export default App;
