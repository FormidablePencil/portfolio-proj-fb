import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Dennis!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <Avatar size="lg" src="https://i.ibb.co/MS3SnqW/20220121-095510-min2.jpg" />
      <Heading as="h2" size="sm" textAlign="center" color="white">
        {greeting}
      </Heading>
      <Heading as="h1" size="lg" textAlign="center" color="white">
        {bio1}
      </Heading>
      <Heading as="h1" size="lg" textAlign="center" color="white">
        {bio2}
      </Heading>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
