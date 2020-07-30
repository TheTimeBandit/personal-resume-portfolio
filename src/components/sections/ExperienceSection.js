import React from "react";
import { Section } from "../Section";

export function ExperienceSection() {
  return (
    <Section id="Experience" name="Experience">
      <div className="left-border-separator mb-16">
        <div className="mb-16">
          <h3>3oSoft, s. r. o.</h3>
          July 2019 - July 2020
        </div>

        <b>Frontend engineer</b>
        <div>
          Rewriting legacy web application previously implemented in Silverlight
          technology into client-side rendered single page application using
          React, Redux, SCSS, Bootstrap&nbsp;3
        </div>
      </div>

      {/* <!-- TODO Work Experience/Career - describe project, technologies --> */}
      {/* <!-- TODO add - agile, team, TFS,SVN --> */}
    </Section>
  );
}
