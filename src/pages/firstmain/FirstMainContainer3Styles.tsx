import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as ReviewImg1 } from '../../assets/ReviewImg1.svg';
import { ReactComponent as ReviewImg2 } from '../../assets/ReviewImg2.svg';
import { ReactComponent as ReviewImg3 } from '../../assets/ReviewImg3.svg';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const animationCSS = css`
  &.fadeInUp {
    animation: ${fadeInUp} 1s forwards;
  }
  &.fadeOutDown {
    animation: ${fadeOutDown} 1s forwards;
  }
`;

export const ThirdContainer = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow: hidden;
  justify-content: center;
  position: relative; /* 자식 요소의 절대 위치를 위한 상대 위치 */
  padding-left: 6rem;
`;

export const Text4 = styled.h1`
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(245, 91, 102, 1) 0%,
    rgba(193, 99, 232, 1) 50.01000165939331%,
    rgba(187, 104, 253, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3rem;
  ${animationCSS};
`;

export const Review1 = styled(ReviewImg1)`
  position: absolute;
  right: 24rem;
  top: 10rem;
  ${animationCSS};
`;
export const Review2 = styled(ReviewImg2)`
  position: absolute;
  right: 30rem;
  top: 24rem;
  ${animationCSS};
`;
export const Review3 = styled(ReviewImg3)`
  position: absolute;
  right: 8rem;
  top: 32rem;
  ${animationCSS};
`;
export const Review4 = styled(ReviewImg3)`
  position: absolute;
  right: 18rem;
  top: 20rem;
  ${animationCSS};
`;
export const Review5 = styled(ReviewImg2)`
  position: absolute;
  right: 2rem;
  top: 23rem;
  ${animationCSS};
`;
