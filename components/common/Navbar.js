"use client";
import { MainContext } from "@/context";
import { useContext } from "react";
import NavbarButtonHover from "./NavbarButtonHover";
import "./nabvar.scss";

const Navbar = ({ dark }) => {
  const { user, hashLink: hashNumber, onHashLink } = useContext(MainContext);
  const authenticateUser = user?.data;

  const menus = [
    {
      name: "חדשות",
      href: "/",
      hash: "",
      icon: `/NavIcons/news-black.svg`,
      blackIcon: `/NavIcons/news-white.svg`,
      activeIcon: `/NavIcons/news-active.svg`,
    },
    {
      name: "הרשמה",
      href: "/#0",
      hash: "#0",
      icon: `/NavIcons/world-black.svg`,
      blackIcon: `/NavIcons/world-white.svg`,
      activeIcon: `/NavIcons/world-active.svg`,
    },
    {
      name: "לוח משחקים",
      href: "/#1",
      hash: "#1",
      icon: `/NavIcons/game-black.svg`,
      blackIcon: `/NavIcons/game-white.svg`,
      activeIcon: `/NavIcons/game-active.svg`,
    },
    {
      name: "הימורים",
      href: "/#4",
      hash: "#4",
      icon: `/NavIcons/bets-black.svg`,
      blackIcon: `/NavIcons/bets-white.svg`,
      activeIcon: `/NavIcons/bets-active.svg`,
    },
    {
      name: "דירוגים",
      href: "/#3",
      hash: "#3",
      icon: `/NavIcons/rank-black.svg`,
      blackIcon: `/NavIcons/rank-white.svg`,
      activeIcon: `/NavIcons/rank-active.svg`,
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        {menus?.map((menu) => (
          <NavbarButtonHover key={menu?.name} menu={menu} dark={dark} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
