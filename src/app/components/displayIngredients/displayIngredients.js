import React from "react";
import "./displayIngredients.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function DisplayIngredients({ ingredient }) {
  return (
    <motion.div 
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.2,
        delay: 0.1
      }}
    className="displayIngredients">
        <h2>{ingredient}</h2>
        
    </motion.div>
  );
}

export default DisplayIngredients;
