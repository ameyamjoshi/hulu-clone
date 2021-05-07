import React from "react";
import Home from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="icon__home icon__home--active">
          <Home />
          <p>home</p>
        </div>
        <div className="icon__home">
          <FlashOnIcon />
          <p>trending</p>
        </div>
        <div className="icon__home">
          <LiveTvIcon />
          <p>verified</p>
        </div>
        <div className="icon__home">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="icon__home">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="icon__home">
          <PersonOutlineIcon />
          <p>Accounts</p>
        </div>
      </div>
      <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?w=1280" />
    </div>
  );
}

export default Header;
