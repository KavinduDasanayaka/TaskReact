import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    id: "faq-1",
    q: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    a: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    id: "faq-2",
    q: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    a: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. In massa tempor nec feugiat nisl pretium fusce id velit.",
  },
  {
    id: "faq-3",
    q: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    a: "Purus viverra accumsan in nisl nisi scelerisque. Et netus et malesuada fames ac turpis egestas maecenas.",
  },
];

const MainContent = () => {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <main className="font-inter text-textdark">
      {/* Hero */}
      <section aria-label="Hero" className="relative">
        {/* Full-bleed image */}
        <img
          src="Main_Image.png"
          alt="Laptop with analytics dashboard on a desk"
          className="block w-full h-auto object-contain"
          loading="eager"
        />

        {/* Constrained content overlay (bottom-aligned on lg+) */}
        <div className="relative lg:absolute lg:inset-0 lg:z-10 lg:flex lg:items-end">
          <div className="relative mx-auto w-full max-w-[1200px] xl:max-w-[1440px]">
            <div className="relative w-full lg:w-[620px] xl:w-[700px] lg:ml-8 xl:ml-12 lg:mb-12 xl:mb-16">
              <div className="w-full bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] text-white shadow-2xl rounded-none lg:rounded-md">
                <div className="p-6 sm:p-7 md:p-9 lg:p-8 xl:p-10">
                  <h1 className="font-bold leading-tight text-[36px] md:text-[48px]">
                    We Crush Your Competitors, Goals, And Sales Records - Without
                    The B.S.
                  </h1>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex text-[14px] font-[700] items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-white text-sm sm:text-base shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      GET FREE CONSULTATION
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web & Mobile App Development */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 lg:pb-0 lg:mb-20">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] px-4 sm:px-6">
          {/* 1064px content width at lg+ */}
          <div className="mx-auto w-full lg:max-w-[1064px]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-x-20">
              <div className="order-first md:order-none">
                <div className="mx-auto max-w-[420px]">
                  <img
                    src="WebDevImg.png"
                    alt="Web & Mobile App Development illustration"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold font-Poppins text-primary">
                  Web & Mobile App Development
                </h3>
                <p className="mt-4 text-textLight leading-relaxed">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and
                  engagement methods to respond to different intents shown by
                  your potential customers who interact with your business
                  online.
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <Link
                    to="/details"
                    className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-white font-medium shadow hover:brightness-110"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Strategy Consulting */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 lg:pt-0 lg:pb-0 lg:mb-20">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] px-4 sm:px-6">
          {/* 1064px content width at lg+ */}
          <div className="mx-auto w-full lg:max-w-[1064px]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-x-20">
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-primary font-Poppins">
                  Digital Strategy Consulting
                </h3>
                <p className="mt-4 text-textLight leading-relaxed">
                  Your digital strategy should complement the overall marketing
                  strategy of the company. In online marketing, each component
                  will never work in isolation and every business needs a
                  different mix. We provide a clear concept and strategic
                  overview to find the most efficient model for your business.
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-white font-medium shadow hover:brightness-110"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>

              <div className="order-first md:order-none">
                <div className="mx-auto max-w-[420px]">
                  <img
                    src="DigitalImg.png"
                    alt="Digital Strategy Consulting illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="w-full px-4 sm:px-6 pt-12 md:pt-16 lg:pt-0 pb-16 md:pb-20 lg:pb-[80px]"
      >
        {/* 1064px width at lg+ so it aligns with sections above */}
        <div className="mx-auto max-w-[900px] lg:max-w-[1064px]">
          <h2
            id="faq-heading"
            className="text-center text-2xl sm:text-3xl font-semibold font-Poppins text-primary"
          >
            Frequently asked questions
          </h2>

          <ul className="mt-8 sm:mt-10 space-y-4">
            {faqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li
                  key={item.id}
                  className="rounded-xl border border-primary/10 bg-faqcolor shadow-sm"
                >
                  <button
                    type="button"
                    className={`group w-full text-left p-4 sm:p-5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      isOpen ? "bg-faqcolor" : "hover:bg-faqcolor/80"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`text-base sm:text-lg font-semibold ${
                          isOpen
                            ? "text-primary"
                            : "text-textdark group-hover:text-primary"
                        }`}
                      >
                        {item.q}
                      </span>

                      <span
                        className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center ${
                          isOpen ? "text-primary" : "text-textdark"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 5v14M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  </button>

                  <div
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={item.id}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-textLight leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MainContent;