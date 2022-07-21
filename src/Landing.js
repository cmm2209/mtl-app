import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Browse from "./Browse";

const Landing = () => (
  <div className="landing">
    <h1>The Center for the History of Music Theory and Literature</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/Browse" element={<Browse />} />
        <Link to="/search">or Browse All</Link>
      </Routes>
    </BrowserRouter>
  </div>
);

export default Landing;
