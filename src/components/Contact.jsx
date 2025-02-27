import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formref = useRef();
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [loading, setloading] = useState(false);

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const response = await fetch("https://formspree.io/f/meoebbgg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setloading(false);
    if (response.ok) {
      alert("Message sent successfully!");
      setform({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "row", // Keep row layout for large screens
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        overflow: "hidden",
        width: "100%",
        flexWrap: "wrap", // Allows wrapping when necessary
      }}
    >
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          width: "40%",
          minWidth: "400px",
          backgroundColor: "#090325",
          padding: "2rem",
          borderRadius: "16px",
        }}
      >
        <h3 style={{ color: "#ffffff", fontSize: "32px", fontWeight: "bold" }}>
          Contact.
        </h3>

        <form
          ref={formref}
          onSubmit={handlesubmit}
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handlechange}
            placeholder="Your Name"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#282C35",
              color: "#fff",
            }}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handlechange}
            placeholder="Your Email"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#282C35",
              color: "#fff",
            }}
          />
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handlechange}
            placeholder="Your Message"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#282C35",
              color: "#fff",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#282C35",
              padding: "0.75rem 2rem",
              borderRadius: "6px",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 3D Earth Model */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          width: "40%",
          minWidth: "400px",
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <EarthCanvas />
      </motion.div>

      {/* Mobile-Only CSS Fix */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="display: flex"] {
              flex-direction: column !important;
              align-items: center !important;
            }
            div[style*="width: 40%"] {
              width: 90% !important; 
              min-width: unset !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
