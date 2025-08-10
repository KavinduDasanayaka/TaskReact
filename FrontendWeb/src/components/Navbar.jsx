import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <nav className="font-inter bg-primary text-white font-navWeight text-[14px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] py-[26px] flex justify-between items-center z-20">
      <div className="font-bold text-[14px]">
        <Link to="/">
          <img src="Logo.png" alt="Company Logo" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        <a href="#" className="text-white hover:text-secondary">
          SERVICES
        </a>
        <a href="#" className="text-white hover:text-secondary">
          ABOUT US
        </a>
        <a href="#" className="text-white hover:text-secondary">
          CONTACT US
        </a>
        <a href="#" className="text-white hover:text-secondary">
          CAREERS
        </a>
      </div>

      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <img
          src={open ? "Close_icon.png" : "Hamburger_icon.png"}
          alt={open ? "Close menu" : "Open menu"}
          className="w-6 h-6"
        />
      </button>

      {open && (
        <div className="md:hidden fixed inset-0 bg-white w-full z-50">
          <div className="px-6 pt-5 pb-8">
            <ul className="flex flex-col">
              <li className="flex items-center justify-between">
                <a
                  href="#"
                  className="block py-4 text-black hover:text-secondary"
                  onClick={close}
                >
                  HOME
                </a>
                <button
                  className="ml-4 h-10 w-10 flex items-center justify-center focus:outline-none"
                  onClick={close}
                  aria-label="Close menu"
                >
                  <img
                    src="Close_icon.png"
                    className="w-6 h-6"
                    alt="Close menu"
                  />
                </button>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-4 text-black hover:text-secondary"
                  onClick={close}
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-4 text-black hover:text-secondary"
                  onClick={close}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-4 text-black hover:text-secondary"
                  onClick={close}
                >
                  CONTACT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-4 text-black hover:text-secondary"
                  onClick={close}
                >
                  CAREERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
