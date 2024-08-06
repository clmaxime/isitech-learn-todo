import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(`Input value : ${inputValue}`);
    setInputValue("");
  };

  return (
    <main className="p-5">
      <h1 className="text-2xl font-medium mb-4">Todos</h1>
      <div className="flex items-center gap-3">
        <Input onChange={handleInputChange} value={inputValue} />
        <Button onClick={handleButtonClick}>Log input value</Button>
      </div>
    </main>
  );
};

export default App;
