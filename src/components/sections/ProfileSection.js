import React from "react";
import { Section } from "../Section";
import "./ProfileSection.scss";
import { ExternalLink } from "../shared/ExternalLink";

export function ProfileSection() {
  return (
    <Section id="Profile" name="Profile">
      <div className="section-main-content mb-44 bottom-border-separator">
        {/* <!-- TODO real photo --> */}
        <div className="author-photo mb-32">
          <img
            src="https://avatars0.githubusercontent.com/u/32413568?s=460&v=4"
            alt="author"
            height="200"
            width="200"
          />
        </div>
        <div className="author-introduction mb-32">
          <div className="mb-32">
            <span className="author-name">Tomáš Takács</span>
          </div>
          <div>
            <span className="author-occupation">
              Frontend developer, aspiring to become a fullstack Javascript
              software engineer.
            </span>
          </div>
        </div>
      </div>

      <div className="social-media-links">
        <ExternalLink
          url={"https://github.com/TheTimeBandit/"}
          className="fa fa-github"
        />
        <ExternalLink
          url="https://www.linkedin.com/in/tomas-takacs/"
          className="fa fa-linkedin"
        />
        <div className="author-email">
          <span>
            <span>
              tomixtt<span>&#64;</span>
            </span>
            gmail.com
          </span>
        </div>
      </div>
    </Section>
  );
}
