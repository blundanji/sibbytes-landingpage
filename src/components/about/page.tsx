"use client";

import React from 'react';
import { Typography } from "@/components/ui/typography";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h1" className="text-black">About Us</Typography>
      <Typography variant="p" className="text-black mt-4">
        Sybbytes is a leading provider of automation and data services. Our mission is to help businesses streamline their processes and make data-driven decisions.
      </Typography>
    </div>
  );
};

export default AboutPage;
