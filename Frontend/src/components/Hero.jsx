import React from "react";

const Hero = () => {
  const name = "ANTRIAC".split("");
  const sub = "TIMEPIECES".split("");

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8">
      {/* optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* background logo */}
      <div
        className="
          absolute inset-0
          bg-[url('/logo.png')] bg-center bg-no-repeat opacity-10
          bg-[length:40%] sm:bg-[length:35%] md:bg-[length:30%] lg:bg-[length:25%]
        "
        aria-hidden="true"
      />

      {/* content */}
      <div className="relative z-10 text-center">
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
            font-sans tracking-[0.6em] text-gray-300 
            mb-2 sm:mb-4
          "
          style={{
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {name.map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </h1>
        <h2
          className="
            text-lg sm:text-xl md:text-2xl lg:text-4xl 
            font-sans tracking-[0.7em] text-gray-700 
            mb-4 sm:mb-6
          "
          style={{
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {sub.map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 uppercase">
          Indian no 1 luxury watch brand
        </p>
      </div>
    </section>
  );
};

export default Hero;
