import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        style={{
          backgroundColor: "#282C35", // Replaces bg-tertiary
          padding: "20px",
          borderRadius: "16px",
        }}
        className="sm:w-[360px] w-full"
      >
        <div style={{ position: "relative", width: "100%", height: "230px" }}>
          <img
            src={image}
            alt="project_image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "end",
              margin: "12px",
            }}
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              style={{
                background: "linear-gradient(to right, #000, #333)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={github}
                alt="source code"
                style={{ width: "50%", height: "50%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3
            style={{ color: "#ffffff", fontWeight: "bold", fontSize: "24px" }}
          >
            {name}
          </h3>
          <p style={{ marginTop: "8px", color: "#aaa6c3", fontSize: "14px" }}>
            {description}
          </p>
        </div>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{ fontSize: "14px", color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            marginTop: "12px",
            color: "#aaa6c3",
            fontSize: "17px",
            maxWidth: "768px",
            lineHeight: "30px",
            textAlign: "center",
            padding: "15px 30px",
          }}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
