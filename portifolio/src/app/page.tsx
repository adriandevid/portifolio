
"use client";

import Resume from "@portifolio/components/pages/resume";
import Services from "@portifolio/components/pages/services";
import Portfolio from "@portifolio/components/pages/portfolio";
import Blog from "@portifolio/components/pages/blog";
import Contact from "@portifolio/components/pages/contact";
import Home from "@portifolio/components/pages/home";
import { useEffect } from "react";

export default function Page() {
  return (
    <div id="main" className="site-main">
      <div className="pt-wrapper">
        <div className="subpages">
          <Home></Home>
          <Resume></Resume>
          <Services></Services>
          <Portfolio></Portfolio>
          <Blog></Blog>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}
