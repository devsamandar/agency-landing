import React from "react";
import Title from "../../components/Title";

function Openings() {
  return (
    <section className="py-20" id="openings">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium my-3">We're Hiring</h1>
          <p className="font-medium text-slate-500 mb-8">
            We're a team of lifelong learners. We're equal parts left and right
            brained.
          </p>
          <a
            href="#"
            className="py-3 px-6 rounded border border-black font-medium text-white bg-black hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500"
          >
            Learn about our culture
          </a>
        </div>
        <div className="my-10 grid gap-y-4">
          <a href="#">
            <div
              className="max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <div className="border p-4 rounded-md">
                <div className="flex flex-wrap items-center justify-between">
                  <h5>Front-End Developer</h5>
                  <div className="flex items-center">
                    <p className="text-slate-500">Los Angeles / Remote</p>
                    <i className="fa-solid fa-angle-right ms-28" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="max-w-3xl mx-auto">
              <div
                className="border p-4 rounded-md"
                data-aos="fade-up"
                data-aos-duration={700}
              >
                <div className="flex flex-wrap items-center justify-between">
                  <h5>Community Manager</h5>
                  <div className="flex items-center">
                    <p className="text-slate-500">New York / Full-Time</p>
                    <i className="fa-solid fa-angle-right ms-28" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div
              className="max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <div className="border p-4 rounded-md">
                <div className="flex flex-wrap items-center justify-between">
                  <h5>UX/UI Designer</h5>
                  <div className="flex items-center">
                    <p className="text-slate-500">New York / Full-Time</p>
                    <i className="fa-solid fa-angle-right ms-28" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Openings;
