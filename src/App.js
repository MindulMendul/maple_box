import "./App.css";
import { useState } from "react";
import SearchComponent from "./SearchComponent";
import DataInfoComponent from "./DataInfoComponent";

function App() {
  const [characterBasicData, setCharacterBasicData] = useState(undefined);
  const [unionData, setUnionData] = useState(undefined);
  return (
    <div className="App flex-col md:flex md:justify-center md:items-center">
      {characterBasicData ? (
        <DataInfoComponent characterBasicData={characterBasicData} unionData={unionData} />
      ) : (
        <SearchComponent setCharacterBasicData={setCharacterBasicData} setUnionData={setUnionData} />
      )}
    </div>
  );
}

export default App;
