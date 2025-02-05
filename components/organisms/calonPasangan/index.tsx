import React from "react";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";

export default function CalonPasangan() {
  return (
    <section id="calon">
      <div className="containerss">
        <div className="calon-cards">
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

          <div className="pengantin">
            <Image
              src="/img/s.jpg"
              className="rounded-circle "
              layout="responsive"
              width={50}
              height={50}
              alt="Adi Hidayatuloh"
            />
            <p className="nama-pengantin">Trias Zaen Mutaqin</p>
            <p className="orangtua">Putra dari Asep Sudrajat & Upi</p>
            <a
              href="https://www.instagram.com/adihidayatuloh/"
              className="sosmed"
            >
              <FiInstagram />
            </a>
          </div>

          <div className="icon-cincin">
            <p className="nama-pasangan">Trias 💍 Zulfa</p>
          </div>

          <div className="pengantin">
            <Image
              src="/img/s.jpg"
              className="rounded-circle "
              layout="responsive"
              width={50}
              height={50}
              alt="Dewi Astri"
            />
            <p className="nama-pengantin">Zulfa Syafiyah Pratiwi</p>
            <p className="orangtua">Putri dari Cartab & Dewi Komalasari</p>
            <a href="https://www.instagram.com/dedew_astri/" className="sosmed">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
