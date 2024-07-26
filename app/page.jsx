import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import React from "react";

export const metadata = {
  title: "PropertyPulse | Home App Page",
  description: "Home App Page",
  keywords: "rental",
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <Footer />
    </div>
  );
};

export default HomePage;
