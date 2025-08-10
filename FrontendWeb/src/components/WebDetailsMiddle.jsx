import React, { useState } from "react";

const faqsData = [
  {
    id: "faq-1",
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "faq-2",
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
];

const WebDetailsMiddle = () => {
  const [openId, setOpenId] = useState("faq-2");

  return (
    <div>
      <section className="px-4 sm:px-6 py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px]">
          <a
            href="#contact"
            className="inline-flex text-[14px] font-[700] items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            GET FREE CONSULTATION
          </a>

          <div className="mt-10 sm:mt-12">
            <div className="mx-auto max-w-[900px] rounded-xl border-2 border-dashed border-primary/40 p-4 sm:p-6">
              <ul>
                {faqsData.map((item, idx) => {
                  const isOpen = openId === item.id;
                  return (
                    <li key={item.id}>
                      <div
                        className={`rounded-xl border border-primary/10 ${
                          isOpen ? "bg-faqcolor" : "bg-white"
                        }`}
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
                      </div>

                      {idx !== faqsData.length - 1 && (
                        <div className="h-[1px] bg-primary/10 my-2" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDetailsMiddle;
