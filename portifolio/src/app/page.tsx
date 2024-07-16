
"use client";

import Home from "./components/pages/home";
import Resume from "./components/pages/resume";

export default function Page() {
  return (
    <div id="main" className="site-main">
      <div className="pt-wrapper">
        <div className="subpages">
          <Home></Home>
          <Resume></Resume>
        </div>
      </div>
    </div>
  );
}
