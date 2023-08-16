import React from "react";
import Title from "../../components/Title";

function Portfolio() {
  return (
    <section className="py-20" id="portfolio">
      <div className="container">
        <Title
          title="Latest"
          page="Featured Work"
          text="Explore some of our latest website projects"
          isCenter={true}
        />
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-6"
          data-aos="fade-up"
          data-aos-duration={600}
        >
          <div className="group relative mt-12 hover:opacity-80">
            <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-7">
                  <h3 className="text-xl">Project</h3>
                  <p className="font-medium text-slate-500 pe-8">
                    Branding, Interaction, Web Design
                  </p>
                </div>
                <div>
                  <img
                    src="assets/images/features/agency1.jpg"
                    className="rounded-md"
                  />
                </div>
                <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                  <a href="#" className="inline-block">
                    <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                      <p className="text-sm font-semibold text-white">
                        View Project
                      </p>
                      <i className="fa-solid fa-arrow-right text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300" />
          </div>
          <div className="group relative mt-12 hover:opacity-80">
            <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-7">
                  <h3 className="text-xl">Project 2</h3>
                  <p className="font-medium text-slate-500 pe-8">
                    Branding, Web Design &amp; Development
                  </p>
                </div>
                <div>
                  <img
                    src="assets/images/features/agency2.jpg"
                    className="rounded-md"
                  />
                </div>
                <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                  <a href="#" className="inline-block">
                    <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                      <p className="text-sm font-semibold text-white">
                        View Project
                      </p>
                      <i className="fa-solid fa-arrow-right text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300" />
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-6"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <div className="group relative mt-12 hover:opacity-80">
            <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-7">
                  <h3 className="text-xl">Project 3</h3>
                  <p className="font-medium text-slate-500 pe-8">
                    Branding, Interaction, Web Design
                  </p>
                </div>
                <div>
                  <img
                    src="assets/images/features/agency2.jpg"
                    className="rounded-md"
                  />
                </div>
                <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                  <a href="#" className="inline-block">
                    <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                      <p className="text-sm font-semibold text-white">
                        View Project
                      </p>
                      <i className="fa-solid fa-arrow-right text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300" />
          </div>
          <div className="group relative mt-12 hover:opacity-80">
            <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-7">
                  <h3 className="text-xl">Project 4</h3>
                  <p className="font-medium text-slate-500 pe-8">
                    {" "}
                    Branding, Web Design &amp; Development
                  </p>
                </div>
                <div>
                  <img
                    src="assets/images/features/agency1.jpg"
                    className="rounded-md"
                  />
                </div>
                <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                  <a href="#" className="inline-block">
                    <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                      <p className="text-sm font-semibold text-white">
                        View Project
                      </p>
                      <i className="fa-solid fa-arrow-right text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300" />
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <a
            href="#"
            className="py-3 px-6 rounded border border-black hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500"
          >
            Explore All Work <i className="fa-solid fa-arrow-right ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
