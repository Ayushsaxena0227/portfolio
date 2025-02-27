import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    style={{
      backgroundColor: "#090325", // black-200
      padding: "2.5rem",
      borderRadius: "1.5rem",
      width: "100%",
      maxWidth: "320px",
    }}
  >
    <p style={{ color: "#ffffff", fontWeight: "900", fontSize: "48px" }}>"</p>

    <div style={{ marginTop: "0.25rem" }}>
      <p
        style={{
          color: "#ffffff",
          letterSpacing: "0.05em",
          fontSize: "18px",
        }}
      >
        {testimonial}
      </p>

      <div
        style={{
          marginTop: "1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#ffffff", fontWeight: "500", fontSize: "16px" }}>
            <span
              style={{
                background: "linear-gradient(to right, #34D399, #EC4899)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              @
            </span>{" "}
            {name}
          </p>
          <p
            style={{ marginTop: "0.25rem", color: "#aaa6c3", fontSize: "12px" }}
          >
            {designation} at {company}
          </p>
        </div>
        {/* 
        <img
          src={image}
          alt={`feedback_by-${name}`}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        /> */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div
      style={{
        marginTop: "3rem",
        backgroundColor: "#100d25", // black-100
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#282C35", // tertiary
          borderRadius: "16px",
          padding: "2rem",
          minHeight: "300px",
        }}
      >
        <motion.div variants={textVariant()}>
          <p style={{ color: "#aaa6c3", fontSize: "16px" }}>What others say</p>
          <h2
            style={{ color: "#ffffff", fontSize: "32px", fontWeight: "bold" }}
          >
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div
        style={{
          marginTop: "-5rem",
          paddingBottom: "3.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.75rem",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
