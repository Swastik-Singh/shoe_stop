import "./App.css";
import { ProductsList, ProductFilters } from "./components";
import FilterContextProvider from "./contexts/FilterContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="div__main-container">
          <FilterContextProvider>
            <ProductFilters />
            <ProductsList />
          </FilterContextProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
