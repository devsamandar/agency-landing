import React from "react";
import Title from "../../components/Title";
import ServiceCard from "../../components/ServiceCard";
import servicesData from "../../data/services.data";

function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container">
        <Title
          page="What We Do"
          text="We are helping businesses to develop their web applications"
          isCenter={true}
        />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
          {servicesData.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
