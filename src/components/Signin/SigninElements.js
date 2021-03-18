import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #321F46;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #C2E531;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormColumn = styled.div `
flex-direction: column;

`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const FormElement = styled.form`
  background: #D5E690;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
// changed border-radius from 4px to 20px

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #38165E;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #38165E;
  margin-left: 5px;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
 
`;

export const FormMessageInput = styled.input `
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 20px;
margin-left: 10px;
lineheight: 100px;
height 400px;
align-items: top-left;
rows="5" cols="80"
`

export const FormButton = styled.button`
  background: #38165E;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #C2E531;
  font-size: 20px;
  cursor: pointer;
  
`;

export const FormButton2 = styled.button`
  background: #38165E;
  padding: 16px 16px;
  margin-left: 20px;
  border: none;
  border-radius: 20px;
  color: #C2E531;
  font-size: 16px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #38165E;
  font-size: 14px;
`;
