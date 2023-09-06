import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252850;
  color: #fff;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`;

export const FormInput = styled.input`
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 5px;
  width: 160px;
`;

export const Formbutton = styled.button`
  padding: 5px 10px;
  text-align: center;
  color: #252525;
  background-color: #18ffff;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  width: 150px;
  cursor: pointer;
  &:hover {
    opacity: 50%;
    color: #fff;
  }
`;
