import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.svg"
import SearchBar from "../../pages/searchBar/SearchBar";
import { LogIn, LogOut } from "lucide-react";
import Notification from "../notification/Notification";

const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <SearchBar />
        {!isAuth ? (
          <ul className="header__auth-list">
            <li className="header__auth-list__item">
              <Notification />
            </li>
            <li className="header__auth-list__item">
              <Link to="/auth" className="header__auth-list__item--link">
                <LogIn color="black" size={32} />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="header__auth-list">
            <li className="header__auth-list__item">
              <Link to="/auth" className="header__auth-list__item--link exit">fsaf
                <Notification />
              </Link>
            </li>
            <li className="header__auth-list__item">
              <Link to="/auth" className="header__auth-list__item--link exit">
                <LogOut color="black" size={26} />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
