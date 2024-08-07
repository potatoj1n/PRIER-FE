import styled, { keyframes } from 'styled-components';
import { device } from '../../../styles/Media';

export const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: full;
  height: full;
  margin: 1% 7%;
`;
export const StoreTop = styled.div`
  display: flex;
  width: 100%;
  ${device.small} {
    flex-direction: column;
  }
`;
export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  widht: 60%;
  gap: 1.25rem;
  ${device.small} {
    justify-content: center;
    width: 60%;
    height: 5rem;
    gap: 0;
  }
`;
export const PointContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-right: 20px;
  padding: 20px;
  width: 23rem;
  max-width: 23rem;
  height: 11rem;
  max-height: 11rem;
  ${device.small} {
    width: 100%;
    height: 5rem;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const StyledPointIcon = styled.img``;
const iconMove = keyframes`
  50% {
    transform: rotate(30deg);
  }
    
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    color: #315af1;
    transform: scale(1.1, 1.1);
  }
  ${StyledPointIcon}:hover {
    animation: ${iconMove} 0.5s ease-in-out 2;
  }
  ${device.small} {
    align-items: baseline;
  }
`;
export const PointText = styled.p`
  font-size: 20px;
  font-weight: 700;
  ${device.small} {
    font-size: 15px;
  }
`;
export const BlueText = styled.p`
  color: #315af1;
  ${device.small} {
    font-size: 15px;
  }
`;
export const PriceText = styled.p`
  font-size: 18px;
  ${device.small} {
    font-size: 12px;
  }
`;
export const ChargeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #e1f9f0;
  width: 60rem;
  height: 11rem;
  max-height: 11rem;
  max-width: 60rem;
  padding: 20px;
  ${device.small} {
    width: 100%;
    flex-direction: column;
  }
`;
export const PriceWrapper = styled.div`
  display: flex;
  width: 80%;
  align-items: baseline;
  justify-content: space-between;
  cursor: pointer;
  ${device.small} {
    width: 100%;
  }
`;
export const GiftWrapper = styled.div`
  margin: 0%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 2rem;
  ${device.small} {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 1rem;
  }
`;
