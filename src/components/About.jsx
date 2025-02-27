import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt style={{ width: "250px", padding: "15px 30px" }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        style={{
          background: "linear-gradient(to right, #34D399, #EC4899)", // Keep gradient
          padding: "1px",
          borderRadius: "20px",
          boxShadow: "0px 35px 120px -15px #211e35",
        }}
      >
        <div
          style={{
            backgroundColor: "#090325", // Match Contact form color
            borderRadius: "20px",
            padding: "20px 48px",
            minHeight: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <img
            src={icon}
            alt={title}
            style={{ width: "64px", height: "64px", objectFit: "contain" }}
          />
          <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} style={{ textAlign: "center" }}>
        <p style={{ color: "#aaa6c3", fontSize: "16px" }}>Introduction</p>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#f3f3f3" }}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        style={{
          marginTop: "16px",
          color: "#aaa6c3",
          fontSize: "17px",
          maxWidth: "48rem",
          lineHeight: "30px",
          textAlign: "center",
        }}
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React.js, Node.js ,Nextjs , Expressjs and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div
        style={{
          marginTop: "80px",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center", // Ensure services are centered
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
