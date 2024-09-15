import {
  FaLinkedin,
  FaTelegram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-[#22404D] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <img src="logo.png" className="h-12 mb-5" alt="SkillNation Logo" />
          <p className="text-white">
            Our goal is to empower the next generation of tech leaders. Our
            internship program offers hands-on experience in different fields.
          </p>
        </div>

        {/* Find More Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Find more</h3>
          <ul className="space-y-2 flex flex-col">
            <li className="flex">
              <a
                href="#"
                className="text-gray-300 !hover:text-[#aee7ec] hover:translate-x-4 transition-transform duration-300"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="text-gray-300 hover:text-[#aee7ec] hover:translate-x-4 transition-transform duration-300"
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="text-gray-300 hover:text-[#aee7ec] hover:translate-x-4 transition-transform duration-300"
              >
                Contact Us
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="text-gray-300 hover:text-[#aee7ec] hover:translate-x-4 transition-transform duration-300"
              >
                Apply
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Links with React Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Follow us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-[#aee7ec] hover:translate-x-2 transition-transform duration-300"
              >
                <FaLinkedin className="text-blue-400 text-3xl mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-[#aee7ec] hover:translate-x-2 transition-transform duration-300"
              >
                <FaTelegram className="text-blue-400 text-3xl mr-2" /> Telegram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-[#aee7ec] hover:translate-x-2 transition-transform duration-300"
              >
                <FaYoutube className="text-blue-400 text-3xl mr-2 " /> YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Address</h3>
          <div className="text-gray-300 space-y-4">
            {/* Location */}
            <div className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1 text-xl" />
              <div>
                <p>Varanasi, Uttar Pradesh</p>
                <p>India</p>
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="flex items-start space-x-2">
              <FaEnvelope className="text-blue-400 mt-1 text-xl" />
              <div>
                <p>Business Inquiries:</p>
                <a
                  href="mailto:technologiesaradhya@gmail.com"
                  className="text-[#009AA8] hover:text-[#aee7ec]"
                >
                  technologiesaradhya@gmail.com
                </a>
              </div>
            </div>

            {/* Student Support */}
            <div className="flex items-start space-x-2">
              <FaEnvelope className="text-blue-400 mt-1 text-xl " />
              <div className="">
                <p>Student Support:</p>
                <a
                  href="mailto:technologiesaradhya@gmail.com"
                  className="text-[#009AA8] hover:text-[#aee7ec]"
                >
                  technologiesaradhya@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-300 border-t border-gray-600 pt-4">
        <p>
          Copyright © 2024 Skill Nation Intern. All rights reserved by{" "}
          <span className="text-blue-400 font-semibold hover:text-blue-600">
            SkiLLNation
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
