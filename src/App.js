import "./App.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./home"

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
             
                <Login setUserState={setUserState} />
              
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
        
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/homepage" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
