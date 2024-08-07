import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 90px 0px 90px;
`;
export const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 15px;
  align-items: center;
`;

export const QuestionDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 30px;
  border-radius: 8px;
  border: 2px solid transparent;
  background: linear-gradient(#fff, #fff), linear-gradient(90deg, #315af1, #7eb4d2, #b5f4bc);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;
export const CustomButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #315af1;
  color: white;
  border: none;
  width: 20%;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 10px;
  white-space: nowrap;
  text-align: center;
`;
export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 10px;
  font-size: 16px;
  font-family: inherit;
  resize: none;
  min-height: 100px;
  overflow: hidden;
  box-sizing: border-box;
`;
