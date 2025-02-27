import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        style={{
          padding: "15px 40px",
          width: "100%",
          // position: "fixed",
          top: "0",
          zIndex: "20",
          backgroundColor: "#050816", // bg-primary
        }}
        className="flex items-center"
      >
        <div
          style={{ maxWidth: "1120px", margin: "0 auto" }}
          className="w-full flex justify-between items-center"
        >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p
              style={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}
              className="cursor-pointer flex"
            >
              Ayush &nbsp;
              <span className="sm:block hidden">| Saxena</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                style={{
                  color: active === link.title ? "#ffffff" : "#a6c3ff", // text-white or text-sky-100
                  fontSize: "18px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                className="hover:text-white"
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              style={{
                display: !toggle ? "none" : "flex",
                padding: "24px",
                backgroundColor: "#100d25", // black-100
                position: "absolute",
                top: "80px",
                right: "0",
                margin: "8px 16px",
                minWidth: "140px",
                zIndex: "10",
                borderRadius: "12px",
              }}
              className="flex-col"
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    style={{
                      color: active === link.title ? "#ffffff" : "#a6c3ff",
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
