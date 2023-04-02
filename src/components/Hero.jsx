import React from "react";
import { Button, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://c4.wallpaperflare.com/wallpaper/542/50/545/simple-background-blue-simple-minimalism-wallpaper-preview.jpg)",
        backgroundSize: "cover",
        height: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="text-center text-white">
        <h3>Portfolio</h3>
        <h1>Dimas Ricko Widyatama</h1>
        <Button variant="primary">LinkedIn Profile</Button>
      </Container>
    </section>
  );
};

export default Hero;
