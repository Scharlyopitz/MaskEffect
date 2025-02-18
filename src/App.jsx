import useMouseMoove from "./components/useMouseMoove";

export default function App() {
  const { x, y } = useMouseMoove();

  return (
    <main>
      <div className="textContainer">
        <p>Bienvenue sur la page d'accueil ici on test l'animation mask</p>
      </div>

      <div className="textContainer mask">
        <p>Révelation au survol du texte</p>
      </div>
    </main>
  );
}
