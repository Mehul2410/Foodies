import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Nutrition Information",
    path: "/nutrition",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  // {
  //   title: "INGREDIENTS",
  //   path: "/ingredients",
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "HOLIDAYS & EVENTS",
  //   path: "/events",
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: "nav-text",
  // },
];
