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

// <section id="Profile">
//         <div className="section-title bottom-border-separator mb-44">
//             <h2>Profile</h2>
//         </div>

//         <div className="section-main-content mb-44 bottom-border-separator">
//             <!-- TODO photo -->
//             <div className="author-photo mb-32">
//                 <img src="https://avatars0.githubusercontent.com/u/32413568?s=460&v=4" alt="author profile image"
//                     height="200" width="200" />
//             </div>
//             <div className="author-introduction mb-32">
//                 <div className="mb-32"><span className="author-name">Tomáš Takács</span></div>
//                 <div>
//                     <span className="author-occupation">Frontend developer, aspiring to become a fullstack Javascript
//                         software engineer.
//                     </span>
//                 </div>
//             </div>
//         </div>

//         <div className="social-media-links">
//             <a href="https://github.com/TheTimeBandit/" className="fa fa-github"></a>
//             <a href="https://www.linkedin.com/in/tomas-takacs/" className="fa fa-linkedin"></a>
//             <div className="author-email">
//                 <code><code>tomixtt<code>&#64;</code></code>gmail.com</code>
//             </div>
//         </div>
//     </section>
