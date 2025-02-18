import { useEffect, useState } from "react";

export default function useMouseMoove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMouseMoove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMouseMoove);
    return () => {
      window.removeEventListener("mousemove", updateMouseMoove);
    };
  }, []);

  return mousePosition;
}
