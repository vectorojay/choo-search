import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/web", text: "Search" },
  { url: "/news", text: "News" },
  { url: "/image", text: "Images" },
  { url: "/videos", text: "Videos" },
];

const Links = () => {
  return (
    <div className="mb-2">
      {links.map(({ url, text }, i) => (
        <NavLink
          key={i}
          to={url}
          className={({ isActive }) =>
            `mr-4 ${
              isActive
                ? "border-solid border-b-2 text-p1 dark:text-blue-300 pb-2 border-p1"
                : "text-gray-500"
            }`
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
