import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { myStyle, setMyStyle, showAlert } = props;
  const [changeText, setChangeText] = useState("Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "#212529") {
      setMyStyle({
        color: "#f8f9fa",
        backgroundColor: "#212529",
      });
      setChangeText("Light Mode");
      showAlert("Dark Mode is Enabled", "Success");
    } else {
      setMyStyle({
        color: "#212529",
        backgroundColor: "#f8f9fa",
      });
      setChangeText("Dark Mode");
      showAlert("Light Mode is Enabled", "Success");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: myStyle.color === "#f8f9fa" ? "#0d1b2a" : "#f8f9fa",
        transition: "background-color 0.3s",
      }}
    >
      <div className="container-fluid">
        {/* <Link
          className="navbar-brand"
          to="/"
          style={{
            color: myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
            transition: "color 0.3s",
          }}
        >
          {props.title}
        </Link> */}
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
            transition: "color 0.3s",
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* ✅ Home Link */}
            <li className="nav-item">
              {/* <Link
                className="nav-link"
                to="/"
                style={{
                  color: myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
                }}
              >
                Home
              </Link> */}
              <a
                className="nav-link"
                href="#"
                style={{
                  color: myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
                }}
              >
                Home
              </a>
            </li>

            {/* ✅ About Link */}
            <li className="nav-item">
              {/* <Link
                className="nav-link"
                to="/about"
                style={{
                  color: myStyle.color === "#f8f9fa" ? "#bfc9d1" : "#212529",
                }}
              >
                {props.aboutText}
              </Link> */}
              <a
                className="nav-link"
                href="#"
                style={{
                  color: myStyle.color === "#f8f9fa" ? "#bfc9d1" : "#212529",
                }}
              >
                {props.aboutText}
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Search
            </button>

            <div
              className="form-check form-switch d-flex align-items-center"
              style={{ marginLeft: "10px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="checkNativeSwitch"
                style={{ cursor: "pointer" }}
                onChange={toggleStyle}
                checked={myStyle.color === "#f8f9fa"}
              />
              <label
                className="form-check-label ms-2 mb-0"
                htmlFor="checkNativeSwitch"
                style={{
                  whiteSpace: "nowrap",
                  color:
                    myStyle.color === "#f8f9fa" ? "#f8f9fa" : "#212529",
                }}
              >
                {changeText}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  myStyle: PropTypes.object.isRequired,
  setMyStyle: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set about text here",
};
