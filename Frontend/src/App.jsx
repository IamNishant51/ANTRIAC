import { useState, useEffect } from "react";
import CardNav from "./components/CardNav";
import Home from "./pages/Home";
import Loader from "./components/loader";
import Collection from "./pages/Collection";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const [loading, setLoading] = useState(true);

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div className="w-full max-h-screen">
      {loading ? (
        <Loader onFinished={() => setLoading(false)} />
      ) : (
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
          <Collection />
        </>
      )}
    </div>
  );
};

export default App;
