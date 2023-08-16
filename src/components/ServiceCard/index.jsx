import React from "react";

function ServiceCard({ item }) {
  return (
    <div
      className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500 text-left"
      data-aos="fade-up"
      data-aos-duration={500}
    >
      <div
        className={`w-12 h-12 rounded-md ${item.color} flex items-center justify-center`}
      >
        {item.image}
      </div>
      <h4 className="text-base font-medium my-5">{item.tile}</h4>
      <p className="text-slate-400">{item.text}</p>
    </div>
  );
}

export default ServiceCard;
