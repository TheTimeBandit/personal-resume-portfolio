import React from "react";
import { Section } from "../Section";
import "./SkillsSection.scss";

const frontEndSkills = Object.freeze([
  // FRONT-END
  { name: "Javascript", value: 80 },
  { name: "Typescript", value: 40 },
  { name: "Angular", value: 40 },
  { name: "React", value: 80 },
  { name: "Redux", value: 80 },

  { name: "CSS", value: 80 },
  { name: "SCSS", value: 60 },
  { name: "Bootstrap 3/4", value: 80 },
]);

const backEndSkills = Object.freeze([
  // BACK-END + DB
  { name: "NodeJS", value: 20 },
  { name: "Express", value: 20 },
  { name: "MongoDB", value: 20 },
  { name: "PostgreSQL", value: 40 },
]);
const otherSkills = Object.freeze([
  // TOOLS, UTILITIES
  { name: "git", value: 40 },
  { name: "Linux", value: 20 },

  // TESTING
  { name: "Test Driven Developement", value: 60 },
]);

function Skill({ name, value }) {
  return (
    <div className="skill mb-32">
      <div className="skill__name mb-8">{name}</div>
      <div className="skill__progress">
        <div
          className="skill__progress-level"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function SkillsList({ skills }) {
  return (
    <div className="skills-list left-border-separator mb-32">
      {skills.map((skill) => (
        <Skill name={skill.name} value={skill.value} />
      ))}
      {/* Empty div fills empty space in column when there is odd number of elements in a list*/}
      <div className="skill" />
    </div>
  );
}

export function SkillsSection() {
  return (
    <Section id="Skills" name="Skills">
      {/* <!-- TODO Skills, Languages, Tools (linkedIn skills) --> */}
      {/* <!-- TODO categories:  Testing(TDD, unit-test_lib-python ...), Agile, SCRUM --> */}
      {/* <!-- // TODO hover - tooltip with level --> */}
      {/* <!-- // TODO level string (advanced, expert ...) by value ranges e.g:(0-25, 25-50,50-75,75-100) --> */}
      {/* <!-- Skill progress bar divided into 3-5 "bars" --> */}

      <div id="SkillsLists">
        {/* <!-- skills generated by script skills.js --> */}
        <SkillsList skills={frontEndSkills} />
        <SkillsList skills={backEndSkills} />
        <SkillsList skills={otherSkills} />
      </div>
    </Section>
  );
}
