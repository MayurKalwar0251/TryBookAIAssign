import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        Explore the Possibilities of
        <span className="highlight"> AI Book Writing</span> with BookAI
      </h1>
      <p className="subtitle">
        Unleash the power of AI to create captivating books in minutes.
        <br />
        Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <a href="/" className="cta">
        Get Started
      </a>
      <a href="/" className="cta">
        Get API Access
      </a>
      <br />
      <br />
      <p style={{ color: "yellow" }}>
        <span>Attention:</span>TryBookAI has been acquired by Indicus AI.
        Indicus LLM will be used for text and image generation
      </p>
    </section>
  );
};

export default Hero;
