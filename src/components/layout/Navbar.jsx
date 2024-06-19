import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemLi,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";

import { NavItems } from "../../data/NavItems";
import { CTAButton } from "../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollDirection = useScrollDirection("down");
  // console.log(scrollDirection);

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/white.png" alt="logo" />
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemLi
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img src="./images/james.png" alt="james" />
                      <span>James</span>
                    </Profile>
                  </NavLink>
                ) : null}
                <NavLink href={navItem.href}>{navItem.text}</NavLink>
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
        
                    <NavLink
                      href="https://github.com/jameskk-syy"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}
                {navItem.hasCTA ? (
                  <></>
                ) : null}
              </NavItemLi>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
