import React from 'react'
import { BannerSection, StyledTopBanner } from '../styles/layout/TopBanner.styled'

const TopBanner = () => {
  return (
    <StyledTopBanner>
      <BannerSection showOnMobile>
        <a href="kirugjames@gmail.com">📩 kirugjames@gmail.com</a>
      </BannerSection>
      <BannerSection>
        <p>👻Available For Hire</p> 
      </BannerSection>
    </StyledTopBanner>
  );
}

export default TopBanner