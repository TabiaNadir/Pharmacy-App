import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-100 text-blue-800 py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">PharmaQuick</h3>
          <p>Fast & reliable medicine delivery at your doorstep.</p>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>Email: support@pharmaquick.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: Karachi, Pakistan</p>
        </div>

        {/* Social Media */}
        <div>
      <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
      <div className="flex space-x-4 text-2xl">
        <a href="#" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-blue-600">
          <FaXTwitter />
        </a>
        <a href="#" className="hover:text-blue-600">
          <FaInstagram />
        </a>
      </div>
    </div>
      </div>

      <div className="text-center text-sm mt-10 text-blue-600">
        © {new Date().getFullYear()} PharmaQuick. All rights reserved.
      </div>
    </footer>
  );
}
