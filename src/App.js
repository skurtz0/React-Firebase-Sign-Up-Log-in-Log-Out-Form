import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup  />} />
        <Route path="/Signin" element={<Signin  />} />
      </Routes>
    </Router>
  );
}

export default App;