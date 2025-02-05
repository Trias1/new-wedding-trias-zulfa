import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav className="nav">
        <a
          href="/#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#keterangan"
          onClick={() => setActiveNav("#keterangan")}
          className={activeNav === "#keterangan" ? "active" : ""}
        >
          <BiUser />
        </a>
        <a
          href="#invitation"
          onClick={() => setActiveNav("#invitation")}
          className={activeNav === "#invitation" ? "active" : ""}
        >
          <FiBook />
        </a>
        <a
          href="#weadingDate"
          onClick={() => setActiveNav("#weadingDate")}
          className={activeNav === "#weadingDate" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#maps"
          onClick={() => setActiveNav("#maps")}
          className={activeNav === "#maps" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
      <div style={{ paddingBottom: "3rem" }}></div>
    </>
  );
}
