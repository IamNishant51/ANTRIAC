import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onFinished }) => {
  const container = useRef();
  const logoRef = useRef();
  const textRef = useRef();
  const particlesRef = useRef();
  const progressRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const particleContainer = particlesRef.current;
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle absolute w-1 h-1 bg-black/20 rounded-full";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleContainer.appendChild(particle);
    }
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: onFinished,
      });
      tl.timeScale(1.5);

      gsap.to(".particle", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      tl.from(circleRef.current, {
        duration: 1.5,
        scale: 0,
        rotation: 180,
        opacity: 0,
        ease: "back.out(1.7)",
      })
        .from(
          logoRef.current,
          {
            duration: 1.2,
            scale: 0.3,
            opacity: 0,
            y: 50,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .from(
          ".letter",
          {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          progressRef.current,
          {
            duration: 2,
            width: "100%",
            ease: "power2.inOut",
          },
          "-=1"
        )
        .to([logoRef.current, textRef.current, circleRef.current], {
          duration: 1,
          scale: 1.1,
          opacity: 0,
          ease: "power3.in",
          delay: 0.5,
        })
        .to(
          container.current,
          {
            duration: 1.2,
            clipPath: "circle(0% at 50% 50%)",
            ease: "power4.inOut",
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  const letters = "ANTRIAC".split("");

  return (
    <div
      ref={container}
      className="fixed inset-0 bg-gradient-to-br from-[#F0E7CF] via-[#F5EDD5] to-[#F0E7CF] z-50 flex flex-col items-center justify-center"
    >
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden"
      ></div>

      <div
        ref={circleRef}
        className="absolute w-96 h-96 border border-black/10 rounded-full"
        style={{
          background:
            "radial-gradient(circle, transparent 70%, rgba(0,0,0,0.05) 100%)",
        }}
      ></div>

      <div className="relative z-10">
        <img
          ref={logoRef}
          src="/logo.png"
          alt="Antriac Logo"
          className="h-20 w-auto mb-8 filter drop-shadow-lg"
        />
      </div>

      <div ref={textRef} className="relative z-10 mb-12">
        <h1 className="text-5xl font-serif text-black tracking-[0.3em]">
          {letters.map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="relative z-10 w-64 h-0.5 bg-black/20 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-black w-0 rounded-full"
        ></div>
      </div>

      <p className="relative z-10 mt-6 text-sm text-black/60 tracking-wider uppercase">
        Crafting Time Since 1952
      </p>
    </div>
  );
};

export default Loader;

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full max-h-screen">
      <div className={`absolute inset-0 z-50 ${loading ? "" : "hidden"}`}>
        <Loader onFinished={() => setLoading(false)} />
      </div>
      {!loading && (
        <>
          <CardNav
            logoAlt="Company Logo"
            items={items}
            baseColor="#F1E9D4"
            menuColor="#222"
            buttonBgColor="#222"
            buttonTextColor="#F1E9D4"
            ease="power3.out"
            logo={"/logo.png"}
          />
          <Home />
        </>
      )}
    </div>
  );
}
