import React from "react";
import skills from "../services/skills.json";
import styled from "styled-components";

interface Tech {
  techName: string;
  id: string;
}
const MySkills = styled.span`
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;
const TechnosList = styled.ul`
  padding: 0;
  margin: 0;
`;
const TechnosItem = styled.li`
  list-style: none;
  font-family: monospace;
  margin-bottom: 10px;
  font-size: 1.8rem;
  &:last-child {
    margin: 0;
  }
  .techno {
    &:after {
      content: "";
      width: 1px;
      height: 10px;
      background: #000;
      display: inline-block;
      margin: 0 5px;
      transform: skew(-20deg);
      background-color: #5a615f;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;
const Skills = () => {
  let content = skills.map((tech: any) => {
    const technology = Object.keys(tech)[0];
    return (
      <TechnosItem key={tech.id}>
        {tech[technology].tech.map((item: Tech) => {
          return (
            <span key={item.id} className='techno'>
              {item.techName}
            </span>
          );
        })}
      </TechnosItem>
    );
  });

  return (
    <>
      <MySkills>Mes compétences :</MySkills>
      <TechnosList>{content}</TechnosList>
    </>
  );
};

export default Skills;
