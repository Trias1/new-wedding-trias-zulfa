import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  //   return (
  //     <div className="container">
  //       <div className="nav position-fixed bottom-5 start-50 translate-middle-x">
  //         <div className="d-flex  ">
  //           <a
  //             href="/#"
  //             onClick={() => setActiveNav("#")}
  //             className={activeNav === "#" ? "active" : ""}
  //           >
  //             <AiOutlineHome />
  //           </a>
  //           <a
  //             href="#keterangan"
  //             onClick={() => setActiveNav("#keterangan")}
  //             className={activeNav === "#keterangan" ? "active" : ""}
  //           >
  //             <BiUser />
  //           </a>
  //           <a
  //             href="#invitation"
  //             onClick={() => setActiveNav("#invitation")}
  //             className={activeNav === "#invitation" ? "active" : ""}
  //           >
  //             <FiBook />
  //           </a>
  //           <a
  //             href="#weadingDate"
  //             onClick={() => setActiveNav("#weadingDate")}
  //             className={activeNav === "#weadingDate" ? "active" : ""}
  //           >
  //             <RiServiceLine />
  //           </a>
  //           <a
  //             href="#maps"
  //             onClick={() => setActiveNav("#maps")}
  //             className={activeNav === "#maps" ? "active" : ""}
  //           >
  //             <BiMessageSquareDetail />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* Navbar */}
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

      {/* Tambahkan padding agar konten tidak tertutup navbar */}
      <div style={{ paddingBottom: "3rem" }}></div>
    </>
  );
}
