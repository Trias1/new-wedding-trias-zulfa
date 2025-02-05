import React from "react";
import Image from "next/image";
import bismillah2 from "../../../public/icon/Bismillah.svg";

export default function Invitation() {
  return (
    <section id="invitation">
      <div className="section w-detail-area center-text pt-1 pb-md-4">
        <div className="container">
          <div className="about__me-image">
            <div className="mx-n2 z-index-1 position-relative">
              <Image
                src={bismillah2}
                height={200}
                width={300}
                className="kali-graf"
              />
            </div>
            <h3 className="text-assalamualaikum z-index-2 position-relative">
              Assalamu&#39;alaikum Wr. Wb.
            </h3>
            <h5 className="mb-1 ">
              Dengan memohon rahmat Allah S.W.T kami bermaksud menyelenggarakan
              pernikahan putra-putri kami:
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
