import React, { useEffect } from 'react';
import './footer.scss';
import video2 from '../../Assets/video2.mp4';
import { FiSend, FiChevronRight } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4" />
      </div>

      <div className="secContent container">
        {/* Contact Section */}
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="email" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        {/* Footer Cards Section */}
        <div className="footerCard flex">
          {/* Intro */}
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex" aria-label="Travel logo">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <p data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur ratione
              quisquam, aperiam provident dignissimos facere laborum quidem dicta placeat.
            </p>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          {/* OUR AGENCY Links */}
          <div className="footerLinks grid">
            <div data-aos="fade-up" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <ul>
                {['Services', 'Insurance', 'Agency', 'Tourism', 'Payment'].map((item) => (
                  <li key={item} className="footerList flex">
                    <FiChevronRight className="icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LAST MINUTE Links */}
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <ul>
                {['London', 'California', 'Indonesia', 'Europe', 'Oceania'].map((item) => (
                  <li key={item} className="footerList flex">
                    <FiChevronRight className="icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PARTNERS Links */}
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <ul>
                {['Bookings', 'Rentcars', 'HostelWorld', 'Trivago', 'TripAdvisor'].map((item) => (
                  <li key={item} className="footerList flex">
                    <FiChevronRight className="icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2025</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
