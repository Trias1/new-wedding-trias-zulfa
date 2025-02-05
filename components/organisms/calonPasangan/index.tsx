import React from "react";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";
import { FaRing } from "react-icons/fa";
import foto1 from "../../../public/img/AYXE0057.jpeg";
import foto2 from "../../../public/img/MempelaiPria.jpeg";

export default function CalonPasangan() {
  return (
    <div className="containerss">
      <div className="calon-cards">
        {/* Bagian Teks Undangan */}
        <div className="text-undangan">
          <p className="arabic-text">
            لَسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
          </p>
          <p className="deskripsi">
            Dengan Memohon Rahmat Dan Ridho Allah Subḥānahu Wa Taʿālā, Yang
            Telah Menciptakan Makhluk-Nya Secara Berpasang-Pasangan, Kami
            Bermaksud Menyelenggarakan Pernikahan Kami.
          </p>
        </div>
        {/* Mempelai Pria */}
        <div className="pengantin">
          <Image
            src={foto2}
            className="img-fluids"
            // width={200}
            // height={360}
            alt="Adi Hidayatuloh"
          />
          <p className="nama-pengantin">Adi Hidayatuloh, S.Pd.</p>
          <p className="orangtua">Putra dari Didi Mulyadi & Yayah Adiah</p>
          <a
            href="https://www.instagram.com/adihidayatuloh/"
            className="sosmed"
          >
            <FiInstagram />
          </a>
        </div>

        {/* Icon Cincin */}
        <div className="icon-cincin">
          {/* <FaRing size={30} /> */}
          <p className="nama-pasangan">Trias 💍 Zulfa</p>
        </div>

        {/* Mempelai Wanita */}
        <div className="pengantin">
          <Image
            src={foto1}
            className="img-fluids"
            // width={200}
            // height={360}
            alt="Dewi Astri"
          />
          <p className="nama-pengantin">Dewi Astri, S.E.</p>
          <p className="orangtua">Putri dari Iwa Kartiwa & Tuti Tohati</p>
          <a href="https://www.instagram.com/dedew_astri/" className="sosmed">
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
