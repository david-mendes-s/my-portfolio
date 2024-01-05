"use client"
import { useEffect, useRef, useState } from "react";

interface ICarrossel {
    elements: any[],
    width: string,
}

interface ScrollerElement extends HTMLElement {
  setAttribute(name: string, value: string): void;
}

export default function Carrossel({elements, width}: ICarrossel) {

  const scrollers = useRef<ScrollerElement[]>([]); // Cria um array de refs
  /* const scroller = document.querySelectorAll(".scroller"); */

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(); // Chama a função após os elementos serem montados
    }
  }, []); // Roda o efeito apenas uma vez na montagem

  function addAnimation() {
    scrollers.current?.forEach((element) => {
      if (element) {
        element.dataset = {
          data-animated: "true",
        };
    });
  }

  return (
    <>
      {/* Associa as refs aos elementos */}
      <div
        className={`max-w-[${width}px] scroller px-2`}
        ref={(el) => (scrollers.current[0] = el as ScrollerElement)}
      >
        <ul className="flex gap-4 scroll_inner">
            {elements.map((element, index) => (
                <li key={index}>
                    {element}
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}