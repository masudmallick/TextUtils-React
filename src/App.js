import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
//import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //! Whether dark mode is enabled or not
  //const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      //showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      //showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <Routes>
          <Route exact path='/' element={<TextForm />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
