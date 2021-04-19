import React from "react";
import styled from "styled-components";
import Photo from "./moi.jpg";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import * as themeConf from "../styles/theme";
const Picture = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    @media screen and (max-width: 846px) {
      margin: 0 0 10px;
    }
  `;
  const PhotoProfil = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-size: 100%;
    margin-bottom: 20px;
  `;
  const LinkIcon = styled.div`
    display: flex;
    align-items: flex-start;
  `;
  const SocialIconLink = styled.a`
    font-size: 2rem;
    margin-right: 20px;
    transform: perspective(1px) translateZ(0);
    transition: transform 0.3s ease-out;
    display: inline-block;
    &:hover {
      transform: translateY(-8px);
    }
  `;
  const Gmail = styled(SiGmail)`
    color: red;
  `;
  const Linkedin = styled(SiLinkedin)`
    color: #027ab6;
  `;
  const LocationWrapper = styled.div`
    display: flex;
    align-items: flex-end;
  `;
  const Location = styled(MdLocationOn)`
    font-size: 2.3rem;
  `;
  const Github = styled(FaGithubAlt)`
    font-size: 2.3rem;
    transition: all 0.2s ease-in;
    color: ${themeConf.textColor};
  `;
  return (
    <Wrapper>
      <PhotoProfil src={Photo} alt='Alexandre' />

      <LinkIcon>
        <SocialIconLink
          href='http://www.linkedin.com/pub/alexandre-ly/61/368/894'
          aria-label='Linkedin'
        >
          <Linkedin />
        </SocialIconLink>
        <SocialIconLink
          href='mailto:contact.alexly@gmail.com'
          aria-label='Gmail'
        >
          <Gmail />
        </SocialIconLink>

        <SocialIconLink href='https://github.com/Taekick' aria-label='github'>
          <Github />
        </SocialIconLink>

        <LocationWrapper>
          <Location />
          <span>Paris</span>
        </LocationWrapper>
      </LinkIcon>
    </Wrapper>
  );
};

export default Picture;
