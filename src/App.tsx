import { WordSearch } from "./components/WordSearch";
import { DefinitionDisplay } from "./components/DefinitionDisplay";
import "./App.css";

function App() {
  return (
    <>
      <h1>Dictionary Explorer</h1>
      <WordSearch />
      <hr />
      <DefinitionDisplay />
    </>
  );
}

export default App;
