import React from "react";
import Logo from "../assets/256.png";
import { Link } from "react-scroll";
import { FiMail } from "react-icons/fi";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://nipuna-nadeeshan.netlify.app">
            {" "}
            <img
              src={Logo}
              alt=""
              style={{ width: "85px", height: "auto" }}
            />{" "}
          </a>
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <a
              href="mailto:nipunanadeeshan2000@gmail.com?subject=Lov%20ur%20skills%20set"
              onClick={() =>
                (window.location.href =
                  "mailto:nipunanadeeshan2000@gmail.com?subject=Lov%20ur%20skills%20set")
              }
              className="text-gray-100 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-dark-900 bg-ternary-dark shadow-sm p-4 duration-300"
              title="Mail me"
            >
              <i className="text-xl sm:text-2xl md:text-3xl">
                <FiMail></FiMail>
              </i>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
