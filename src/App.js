import "./App.css";
import Header from "./Components/header";
import Search from "./Components/search";
import Details from "./Components/details";
import Saved from "./Components/Saved/saved";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
