import React from "react"
import { FaCode, FaDatabase, FaSketch } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend",
    tools: ["HTML5", "CSS3", "React", "Redux", "Gatsby", "Material-UI"],
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "Backend",
    tools: ["Node", "Express", "MongoDB", "Firebase", "PostgreSQL"],
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "General",
    tools: [
      "JavaScript",
      "TypeScript",
      "Git",
      "Mocha",
      "Jest",
      "TDD",
      "Agile work methods",
    ],
  },
]
