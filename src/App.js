import React from "react";
import "./App.scss";
import { ProfileSection } from "./components/sections/ProfileSection";
import { EducationSection } from "./components/sections/EducationSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { Landing } from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
