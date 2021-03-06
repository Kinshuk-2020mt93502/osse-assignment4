import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./component/Homepage";
import Student2020MT93502 from "./component/Student2020MT93502";
import Student2020MT93501 from "./component/Student2020MT93501";
import Student2020MT93713 from "./component/Student2020MT93713";
import Student2020MT93585 from "./component/Student2020MT93585";
import Student2020MT93575 from "./component/Student2020MT93575";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile/2020MT93502" element={<Student2020MT93502 />} />
      <Route path="/profile/2020MT93501" element={<Student2020MT93501 />} />
      <Route path="/profile/2020MT93713" element={<Student2020MT93713 />} />
      <Route path="/profile/2020MT93585" element={<Student2020MT93585 />} />
      <Route path="/profile/2020MT93575" element={<Student2020MT93575 />} />
    </Routes>
  );
}

export default App;
