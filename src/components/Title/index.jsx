import React from "react";

function Title({ title, page, text, isCenter }) {
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {title && (
        <span
          className={`text-sm bg-primary/10 text-primary font-medium py-1 px-3 rounded-full`}
        >
          {title}
        </span>
      )}
      <h1 className="text-3xl/tight font-medium mt-3 mb-4">{page}</h1>
      {text && <p className="text-gray-500">{text}</p>}
    </div>
  );
}

export default Title;
