import React from "react";
import styled from "styled-components";
import Skills from "../Skills/Skills";
import { SiReact } from "react-icons/si";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../types";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  padding: 20px 0;
  @media screen and (max-width: 846px) {
    margin: 0 30px;
  }
`;
const Name = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 2.8rem;
  line-height: 1em;
`;
const Job = styled.span`
  font-size: 2rem;
  color: #5a615f;
  font-weight: 400;
  display: block;
`;

const Intro = styled.div`
  margin: 30px 0 10px;
`;
const Line = styled.p`
  margin: 5px 0;
  align-items: center;
`;
const ReactPicto = styled(SiReact)`
  color: #03d8ff;
  margin: 2px 0 0 5px;
  vertical-align: top;
`;
const Presentation = styled.div`
  display: flex;
  flex-direction: column;
`;
const Struct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Moon = styled(FiMoon)`
  color: black;
  display: inline;
  position: absolute;
  right: 5px;
  top: 3px;
`;

const Sun = styled(FiSun)`
  color: #fff;
  display: none;
  position: absolute;
  left: 5px;
  top: 3px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  /* position: absolute; */
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    ${Moon} {
      display: none;
    }
    ${Sun} {
      display: inline;
    }
    &::after {
      content: "";
      margin-left: 28px;
    }
  }
`;

const Available = styled.div`
  margin-top: 20px;
  background: #eae428;
  color: #000;
  font-style: italic;
  padding: 0px 16px 0 14px;
  display: flex;
  align-self: flex-start;
  position: relative;
  font-size: 1.4rem;
  transition: all 0.5s ease-in;

  @media screen and (max-width: 375px) {
    width: 98%;
  }
`;
interface Props {
  theme: ThemeContext;
}
const Profil = ({ theme }: Props) => {
  return (
    <Wrapper>
      <Struct>
        <Presentation>
          <Name>
            Alexandre LY
            <Job>Développeur front-end</Job>
          </Name>
        </Presentation>
        <CheckBoxWrapper>
          <CheckBox
            id='checkbox'
            type='checkbox'
            onChange={() => theme.toggle()}
          />
          <CheckBoxLabel htmlFor='checkbox'>
            <Moon />
            <Sun />
          </CheckBoxLabel>
        </CheckBoxWrapper>
      </Struct>
      <Intro>
        <Line>
          Je développe des applications web en Javascript et particulièrement
          avec React
          <ReactPicto />
        </Line>
        <Line>
          J'intègre également les maquettes graphique et donne vie aux
          interfaces sur desktop et mobile (responsive).
        </Line>
      </Intro>
      <Skills></Skills>
      <Available>
        Un poste de développeur React en CDI à pourvoir ? Let's talk together
        ;-)
      </Available>
    </Wrapper>
  );
};

export default Profil;
