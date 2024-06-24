import "./App.css";
import { Suspense, lazy } from "react";
// import PokemonDetail from "./PokemonDetail";

//import returns a promise.
const PokemonDetail = lazy(() => import("./PokemonDetail"));

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Suspense fallback="loading...">
        <PokemonDetail />
      </Suspense>
    </div>
  );
}

export default App;

//1. Create the lazy component.
//2. Add a Suspense component higher in the tree.
//3. provide a placeholder as the "fallback" prop of Suspense.
