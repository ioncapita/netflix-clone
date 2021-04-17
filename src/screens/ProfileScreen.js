import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);


  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="plansScreen__plan">
                <div className="plansScreen__info">
                  <h4>Premium</h4>
                  <p>4K + HDR</p>
                  <h4>Basic</h4>
                  <p>720p</p>
                  <h4>Standard</h4>
                  <p>1080p</p>
                </div>
                <div className="plansScreen__button">
                  <button>Subscribe</button>
                  <button>Subscribe</button>
                  <button>Subscribe</button>
                </div>
              </div>
              <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
