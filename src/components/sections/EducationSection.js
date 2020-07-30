import React from "react";
import { Section } from "../Section";

export function EducationSection() {
  return (
    <Section id="Education" name="Education">
      <div className="left-border-separator mb-16">
        <div className="mb-16">
          <a href="https://fmph.uniba.sk/">
            <h3>Faculty of Mathematics, Physics and Informatics, Bratislava</h3>
          </a>
          2016 - 2019 <br />
          Bachelor's degree in Applied Informatics
        </div>

        {/* <!-- TODO link to BP project detail page --> */}
        <a href="">
          <b>Bachelor thesis</b>
        </a>
        <br />
        <div>
          Design and implementation of new frontend for a database exercise
          testing application.
          <br />
          Technologies: Angular&nbsp;7, Typescript, SCSS, Bootstrap&nbsp;4
        </div>
      </div>
    </Section>
  );
}
