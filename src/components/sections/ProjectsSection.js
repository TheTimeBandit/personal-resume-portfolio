import React from "react";
import { Section } from "../Section";
import { ExternalLink } from "../shared/ExternalLink";

export function ProjectsSection() {
  return (
    <Section id="Projects" name="Projects">
      <h1>
        <span>🚧</span> UNDER CONSTRUCTION <span>🚧</span>
      </h1>
      <h3>
        Check my{" "}
        <ExternalLink url="https://github.com/TheTimeBandit/">
          Github
        </ExternalLink>
      </h3>
      {/* <!-- TODO Projects developed while studying at university, School projects --> */}
      {/* <!-- TODO Free time projects --> */}

      {/* <!-- TODO Projects in progress --> */}
    </Section>
  );
}
