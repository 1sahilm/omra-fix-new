import React from "react";
import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "css/style.css";
import "styles/globals.css";
import "styles/switcher.css";

import "scss/tab-style.scss";
import "css/skin/skin-2.css";
import "scss/abstract/thought-leadership.css";
import "scss/abstract/intelligent-automation.css";

function RootApp({ Component, pageProps }) {
  const onScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Omra Solution</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
      </Head>
      <Component {...pageProps} />
      <a
        href="https://themeforest.net/cart/configure_before_adding/32950742/?license=regular"
        target="_blank"
        className="bt-buy-now theme-btn"
        rel="noreferrer"
      >
        <i className="ti-shopping-cart" />
        <span>Buy Now</span>
      </a>
      <a
        href="https://support.w3itexperts.com"
        target="_blank"
        className="bt-support-now theme-btn"
        rel="noreferrer"
      >
        <i className="ti-headphone-alt" />
        <span>Support</span>
      </a>
      <a onClick={onScroll}>
        <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </React.Fragment>
  );
}

export default RootApp;
