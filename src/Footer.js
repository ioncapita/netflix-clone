import React from "react";
import "./Footer.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__row">
          <div class="footer__col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
              <li>
                <a href="#">Media Center</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <img
              className="tmdb__image"
              src="https://camo.githubusercontent.com/3473ad272177937efdaea24da61c7a9204540ef4a3eccace1fed89403805191c/68747470733a2f2f7777772e7468656d6f76696564622e6f72672f6173736574732f322f76342f6c6f676f732f343038783136312d706f77657265642d62792d72656374616e676c652d677265656e2d626234333031633130646463373439623465373934363338313161363861666562656165363665663433643137626366643866663065363064656437636539392e706e67"
            ></img>
            <div class="social-links">
              <a href="#">
                <RiFacebookBoxFill size="3em" />
              </a>
              <a href="#">
                <RiInstagramFill size="3em" />
              </a>
              <a href="#">
                <RiTwitterFill size="3em" />
              </a>
              <a href="#">
                <RiYoutubeFill size="3em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
