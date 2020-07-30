import React from "react";
import "./Section.scss";

export function Section({ id, name, children }) {
  return (
    <section id={id}>
      <div className="section-title bottom-border-separator mb-44">
        <h2>{name}</h2>
      </div>

      {children}
    </section>
  );
}
