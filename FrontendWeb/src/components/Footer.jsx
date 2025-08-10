import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-white font-inter px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] pt-[40px] pb-[20px]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:1fr_auto_auto] gap-10 lg:gap-x-32 items-start py-12 md:py-16">
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href="/"
              aria-label="at digital home"
              className="inline-flex items-center gap-3"
            >
              <span className="text-2xl font-semibold tracking-tight">
                <img src="Logo.png" alt="at digital logo" />
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-white/80 font-Lato">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div className="md:pt-2">
            <h4 className="text-lg font-semibold">Our Technologies</h4>
            <ul className="mt-5 space-y-3 text-white/90">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ReactJS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gatsby
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NextJS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NodeJS
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pt-2">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="mt-5 space-y-3 text-white/90">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web &amp; Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data &amp; Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border-t border-[#FFFFFF] md:w-[630px] w-[335px]" />
        </div>

        <div className="py-5 md:py-6">
          <nav
            className="flex items-center justify-center gap-4 text-sm text-white/80 flex-row"
            aria-label="Legal"
          >
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="inline-block">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
