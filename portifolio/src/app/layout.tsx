"use client";

import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import PortifolioPage from "@portifolio/components/_ui/portfolioPage";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [portfolio, setPortfolio] = useState<string | null>();

  useEffect(function () {
    // const handleHashChange = (e: any) => {
    //   if (location.hash == "#portfolio/portfolio-1") {
    //     setPortfolio(1)
    //   } else {
    //     setPortfolio(0)
    //   }
    // };

    // window.addEventListener("hashchange", handleHashChange);

    const elements = document.getElementsByClassName('ajax-page-load');
    
    Array.from(elements).forEach(function (item) {
      item.addEventListener('click', function (event) {
        setPortfolio(item.getAttribute('data-page-id'))
      })
    })
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>PRO Card - Material Resume / CV / vCard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="PRO Card - Material Resume / CV / vCard Template" />
        <meta name="keywords" content="vcard, resposnive, retina, resume, jquery, css3, bootstrap, Material CV, portfolio" />
        <meta name="author" content="lmtheme" />
        <link rel="shortcut icon" href="favicon.ico" />

        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="css/normalize.css" type="text/css" />
        <link rel="stylesheet" href="css/animate.css" type="text/css" />
        <link rel="stylesheet" href="css/transition-animations.css" type="text/css" />
        <link rel="stylesheet" href="css/owl.carousel.css" type="text/css" />
        <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="css/main.css" type="text/css" />

        <Script src="js/jquery-2.1.3.min.js"></Script>
        <Script src="js/modernizr.custom.js"></Script>

        <Script src='https://www.google.com/recaptcha/api.js'></Script>
      </head>
      <body className="material-template">
        <div className="preloader">
          <div className="preloader-animation">
            <div className="preloader-spinner">
            </div>
          </div>
        </div>

        <div id="page" className="page">
          <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
              <div className="site-title-block mobile-hidden">
                <div className="site-title">Adrian <span>Devid</span></div>
              </div>

              {/* <!-- Navigation --> */}
              <div className="site-nav">
                {/* <!-- Main menu --> */}
                <ul id="nav" className="site-main-menu">
                  <li>
                    <Link className="pt-trigger" href="#home" data-animation="62">Home</Link>
                    {/* <!-- href value = data-id without # of .pt-page. --> */}
                  </li>
                  <li>
                    <Link className="pt-trigger" href="#resume" data-animation="62">Resume</Link>
                  </li>
                  <li>
                    <Link className="pt-trigger" href="#services" data-animation="62">Services</Link>
                  </li>
                  <li>
                    <Link className="pt-trigger" href="#portfolio" data-animation="62">Portfolio</Link>
                  </li>
                  <li>
                    <Link className="pt-trigger" href="#blog" data-animation="62">Blog</Link>
                  </li>
                  <li>
                    <Link className="pt-trigger" href="#contact" data-animation="62">Contact</Link>
                  </li>
                </ul>
                {/* <!-- /Main menu --> */}
              </div>
              {/* <!-- Navigation --> */}
            </div>
          </header>
          {/* <!-- Mobile Header --> */}
          <div className="mobile-header mobile-visible">
            <div className="mobile-logo-container">
              <div className="mobile-site-title">Alex Smith</div>
            </div>

            <a className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </a>
          </div>

          {children}
        </div>
        <footer>
          <div className="copyrights">© 2017 All rights reserved. Material template by LMPixels</div>
        </footer>

        <div id="page-ajax-loaded" className="page-ajax-loaded animated rotateInDownRight">
          {
            portfolio == undefined ? undefined :
              portfolio == "1" ? <PortifolioPage></PortifolioPage> :
                undefined
          }
        </div>

        {/* 
        <div id="page-ajax-loaded" className="page-ajax-loaded animated rotateInDownRight closed">
          <PortifolioPage></PortifolioPage>
        </div> */}
        {/* <Script type="text/javascript" src="/js/ui/portfoliopage.js" /> */}

        <Script type="text/javascript" src="js/bootstrap.min.js"></Script>
        <Script type="text/javascript" src="js/pages-switcher.js"></Script>
        <Script type="text/javascript" src="js/imagesloaded.pkgd.min.js"></Script>
        <Script type="text/javascript" src="js/validator.js"></Script>
        <Script type="text/javascript" src="js/jquery.shuffle.min.js"></Script>
        <Script type="text/javascript" src="js/masonry.pkgd.min.js"></Script>
        <Script type="text/javascript" src="js/owl.carousel.min.js"></Script>
        <Script type="text/javascript" src="js/jquery.magnific-popup.min.js"></Script>
        <Script type="text/javascript" src="js/jquery.hoverdir.js"></Script>
        {/* <!--<Script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY"></Script>--> */}
        <Script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></Script>
        <Script type="text/javascript" src="js/jquery.googlemap.js"></Script>
        <Script type="text/javascript" src="js/main.js"></Script>
      </body>
    </html>
  );
}
