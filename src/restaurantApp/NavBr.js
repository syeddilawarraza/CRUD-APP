import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPlus,
  faSearch,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const NavBr = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" text="gray">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav
            className="mr-auto"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <Nav.Link href="">
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                Home <FontAwesomeIcon icon={faHome} />
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/list" style={{ textDecoration: "none" }}>
                {" "}
                List <FontAwesomeIcon icon={faList} />{" "}
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/search" style={{ textDecoration: "none" }}>
                {" "}
                Search <FontAwesomeIcon icon={faSearch} />
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/update" style={{ textDecoration: "none" }}>
                {" "}
                Update{" "}
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/create" style={{ textDecoration: "none" }}>
                {" "}
                Create <FontAwesomeIcon icon={faPlus} />
              </Link>{" "}
            </Nav.Link>
            {localStorage.getItem("login") ? (
              <Nav.Link href="">
                <Link to="/logout" style={{ textDecoration: "none" }}>
                  {" "}
                  Logout <FontAwesomeIcon icon={faUser} />
                </Link>{" "}
              </Nav.Link>
            ) : (
              <Nav.Link href="">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  Login <FontAwesomeIcon icon={faUser} />
                </Link>{" "}
              </Nav.Link>
            )}
            <Nav.Link href=""></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBr;
