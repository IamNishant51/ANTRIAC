import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

const Hero = () => {
  const name = "ANTRIAC".split("");
  const sub = "TIMEPIECES".split("");

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8"
      style={{ userSelect: "none" }} // Disable text selection
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-30 text-center">
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
            font-sans tracking-[0.6em] 
            mb-2 sm:mb-4
          "
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "#F1E9D4",
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

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Suspense fallback={null}>
            <WatchModel />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

const WatchModel = () => {
  const { scene, animations } = useGLTF("/mechanical_watch.glb");
  const { actions } = useAnimations(animations, scene);

  React.useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  return <primitive object={scene} scale={1.3} position={[1, 0, 0]} />;
};

export default Hero;
