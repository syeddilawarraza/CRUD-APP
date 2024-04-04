import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Search from "./Search";
import Update from "./Update";
import Create from "./Create";
import NavBr from "./NavBr";
import Login from "./Login";
import Logout from "./Logout";
function Main() {
  return (
    <>
      <Router>
        <NavBr />
        <Routes>
          <Route path="list" element={<List />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>

          <Route path="" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default Main;
 