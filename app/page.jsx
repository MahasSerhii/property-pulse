import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";
import React from "react";

export const metadata = {
  title: "PropertyPulse | Home App Page",
  description: "Home App Page",
  keywords: "rental",
};

const HomePage = () => {
  connectDB();
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
};

export default HomePage;
