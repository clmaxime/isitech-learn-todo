import { Button } from "./components/Button";
import { Input } from "./components/Input";

const App = () => {
  return (
    <main className="p-5">
      <h1 className="text-2xl font-medium mb-4">Todos</h1>
      <div className="flex items-center gap-3">
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Button onClick={() => console.log("Clicked!")}>Click me !</Button>
      </div>
    </main>
  );
};

export default App;
