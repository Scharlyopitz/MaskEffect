import useMouseMoove from "./components/useMouseMoove";
import { motion as m } from "motion/react";

export default function App() {
  const { x, y } = useMouseMoove();

  const maskSize = 40;

  return (
    <main>
      <div className="textContainer">
        <p>Bienvenue sur la page d'accueil ici on test l'animation mask</p>
      </div>

      <m.div
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className="textContainer mask"
      >
        <p>Révelation au survol du texte</p>
      </m.div>
    </main>
  );
}
