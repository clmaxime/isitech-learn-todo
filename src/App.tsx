import { Button } from "./components/Button";

const App = () => {
  return (
    <main className="p-5">
      <h1 className="text-2xl font-medium mb-4">Todos</h1>
      <Button onClick={() => console.log("Clicked!")}>Click me !</Button>
    </main>
  );
};

export default App;
