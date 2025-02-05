import React, { useState } from "react";
import Img1 from "../../../public/img/foto2.jpeg";
import Img2 from "../../../public/img/foto3.jpeg";
import Img3 from "../../../public/img/foto4.jpeg";
import Img4 from "../../../public/img/foto8.jpeg";
import Img6 from "../../../public/img/foto6.jpeg";
import Img5 from "../../../public/img/foto7.jpeg";

export default function Gallery() {
  const data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [, setModel] = useState(false);
  const [, setTempImgSrc] = useState("");
  const getImg = (imgSrc: any) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="container">
      <div className="gallery">
        {data.map((item, index) => (
          <div
            className="pics"
            key={index}
            onClick={() => getImg(item.imgSrc)}
            role="menuitem"
            tabIndex={0}
          >
            <img src={item.imgSrc.src} style={{ width: "100%" }} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
