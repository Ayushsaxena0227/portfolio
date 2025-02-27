import { Html, useProgress } from "@react-three/drei";
import { usePresence } from "framer-motion";
import React from "react";
//responsible for showing loading at initial moment of rendering our page.
const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
