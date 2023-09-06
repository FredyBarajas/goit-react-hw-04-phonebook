import styled from 'styled-components';

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252850;
  color: #fff;
  margin-bottom: 0;
  padding: 30px;
`;

export const AppInput = styled.input`
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 5px;
  margin-top: 10px;

  text-align: center;
  &:placeholder-shown {
    text-align: center;
  }
`;

export const AppTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #252850;
  font-weight: 900;
`;
