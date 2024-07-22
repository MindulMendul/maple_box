import "./App.css";
import useStore from "./store.js";
import SearchComponent from "./SearchComponent";
import DataInfoComponent from "./DataInfoComponent";

function App() {
  const { characterBasicData, statData, hyperStatData, unionData, unionRaiderData } = useStore();

  return (
    <div className="App flex-col md:flex md:justify-center md:items-center">
      {characterBasicData && statData && hyperStatData && unionData && unionRaiderData ? (
        <DataInfoComponent />
      ) : (
        <SearchComponent />
      )}
    </div>
  );
}

export default App;
