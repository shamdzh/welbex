import FilterState from "./context/FilterState";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="mb-3">WelbeX</h1>
        <FilterState>
          <Main />
        </FilterState>
      </div>
    </>
  );
}

export default App;
