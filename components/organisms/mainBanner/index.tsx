import React, { useState, useEffect } from "react";

export default function mainBanner() {
  const [isExpired, setIsExpired] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("September 27, 2025 11:00:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(day);
      setHours(hour);
      setMinutes(minute);
      setSeconds(second);

      if (distance < 0) {
        clearInterval(x);
        setIsExpired(true);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <div className="main-banner-container">
      <div className="main-banner">
        <div className="display-table center-text">
          <div className="display-table-cell">
            <div className="slider-content">
              <img
                src="/img/s.jpg"
                alt="Wedding Image"
                className="banner-image mb-4"
              />

              <h3 className="pre-title mb-5">The Wedding of</h3>
              <h1 className="title">Trias & Zulfa</h1>
              <h4 className="text-invite mt-5">
                We invite you to celebrate our wedding
                <br />
                <span className="mt-1">Sabtu, 27 September 2025</span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <section className="section counter-area center-text">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="heading">
                <h2 className="title text-white">Jangan Lupa!</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="remaining-time">
                {isExpired ? (
                  <div> Yay... The day has arrived!</div>
                ) : (
                  <div id="clock">
                    <div className="time-sec d-inline-block">
                      <span className="title">{days}</span> Days
                    </div>
                    <div className="time-sec d-inline-block">
                      <span className="title">{hours}</span> Hours
                    </div>
                    <div className="time-sec d-inline-block">
                      <span className="title">{minutes}</span> Minutes
                    </div>
                    <div className="time-sec d-inline-block">
                      <span className="title">{seconds}</span> Seconds
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
