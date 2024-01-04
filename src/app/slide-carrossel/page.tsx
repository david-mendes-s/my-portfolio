"use client"
import { useEffect, useRef, useState } from "react";

export default function Carrossel() {
  const [tech, setTech] = useState([
    "HTML",
    "CSS",
    "JS",
    "WORDPRESS",
    "NODE",
    "REACT",
    "POSTGRES",
    "JAVA",
    "SPRINGBOOT",
    "HTML",
    "CSS",
    "JS",
    "WORDPRESS",
    "NODE",
    "REACT",
    "POSTGRES",
    "JAVA",
    "SPRINGBOOT",
  ]);

  const scrollers = useRef([]); // Cria um array de refs
  /* const scroller = document.querySelectorAll(".scroller"); */

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(); // Chama a função após os elementos serem montados
    }
  }, []); // Roda o efeito apenas uma vez na montagem

  function addAnimation() {
    scrollers.current.forEach((element) => {
      if (element) {
        element.setAttribute("data-animated", true);

        
      }
    });
  }

  return (
    <>
      {/* Associa as refs aos elementos */}
      <div
        className="max-w-[600px] border-solid border-[1px] border-cyan-400 scroller"
        ref={(el) => (scrollers.current[0] = el)}
      >
        <ul className="flex gap-4 scroll_inner">
            {tech.map((techs, index) => (
                <li key={index}>
                    {techs}
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}