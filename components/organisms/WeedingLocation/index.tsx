import React from "react";
import { MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsClock } from "react-icons/bs";

export default function WeedingLocation() {
  return (
    <div className="section w-details-area center-text" id="weddingDate">
      <div className="container">
        {/* Card Akad Nikah */}
        <div className="card">
          <div className="card-body">
            {/* Save The Date */}
            <h2 className="section-title">Save The Date</h2>
            <div className="save-the-date">
              <span className="day">Sabtu</span>
              <div className="date-container">
                <span className="date">27</span>
                <hr className="date-line" />
              </div>
              <span className="month">September</span>
              <span className="year">2025</span>
            </div>
            <h3 className="card-title">Akad Nikah</h3>
            <div className="event-detail">
              <MdDateRange className="icon" />
              <h4>Sabtu, 27 September 2025</h4>
            </div>
            <div className="event-detail">
              <BsClock className="icon" />
              <h4>08.00 WIB s.d 10.00 WIB</h4>
            </div>
            <div className="event-detail">
              <GoLocation className="icon" />
              <h4>Dusun Karang Tengah RT003/17, Desa Imbanagara, Ciamis</h4>
            </div>
          </div>
        </div>

        {/* Card Walimah */}
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Walimah</h3>
            <div className="event-detail">
              <MdDateRange className="icon" />
              <h4>Sabtu, 27 September 2025</h4>
            </div>
            <div className="event-detail">
              <BsClock className="icon" />
              <h4>11.00 WIB s.d Selesai</h4>
            </div>
            <div className="event-detail">
              <GoLocation className="icon" />
              <h4>Dusun Karang Tengah RT003/17, Desa Imbanagara, Ciamis</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
