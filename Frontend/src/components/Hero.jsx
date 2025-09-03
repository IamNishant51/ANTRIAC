import React from "react";

const Hero = () => {
  const name = "ANTRIAC".split("");
  const sub = "TIMEPIECES".split("");

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* background logo */}
      <div
        className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat opacity-10"
        aria-hidden="true"
        style={{ backgroundSize: "30%" }}
      />
      {/* content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif tracking-widest text-[#f1e9d485] mb-4">
          {name.map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </h1>
        <h2 className="text-2xl md:text-4xl font-sans tracking-[0.5em] text-gray-700 mb-6">
          {sub.map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </h2>
        <p className="text-lg md:text-xl text-gray-500 uppercase">
          Indian no 1 luxury watch brand
        </p>
      </div>
    </section>
  );
};

export default Hero;
