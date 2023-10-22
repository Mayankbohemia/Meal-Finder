import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="main">
      <div className="header__container">
        <h1>
          Fork<span>UP</span>
        </h1>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(88, 84, 84)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>

        <Link to="/saved">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            width="36px"
            height="56px"
            viewBox="0 0 24 24"
            aria-labelledby="bookmarkIconTitle"
            stroke="rgb(88, 84, 84)"
            strokeWidth="0.42857142857142855"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            color="rgb(88, 84, 84)"
          >
            {" "}
            <title id="bookmarkIconTitle">Bookmark</title>{" "}
            <path d="M17,6.65881537 L17,19.5857864 L12,16.4078051 L7,19.5857864 L7,6.65881537 C7,5.19039219 8.11928813,4 9.5,4 L14.5,4 C15.8807119,4 17,5.19039219 17,6.65881537 Z" />{" "}
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Header;
