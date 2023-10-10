/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Kolade F.O.",
  title: "Full stack Software Engineer",
  email: "adedayo924@gmail.com",
  gitHub: "adedayo924",
  instagram: "jeilocreative",
  linkedIn: "fatai-opeyemi-kolade-9644b4154",
  medium: "adedayo92",
  twitter: "adedayo92",
  youTube: "UCdjtV_DPjJpRFRXE_RpDs_Q",
};

const primaryColor = "#1a1a1a";
const secondaryColor = "#ffffff";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
