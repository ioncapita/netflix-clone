import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { useHistory } from "react-router";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        ></img>
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        ></img>
        <div className="nav__menu">
          <ul className="nav__links">
            <li>
              <a onClick={() => history.push("/")} href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li>
              <FaSearch size="1.3em" color="white" />
            </li>
            <li>
              <AiOutlineGift size="1.5em" color="white" />
            </li>
            <li>
              <BsFillBellFill size="1.5em" color="white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
