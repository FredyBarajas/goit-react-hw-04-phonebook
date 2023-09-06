import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  color: #252525;
  margin-bottom: 0;
  padding-bottom: 0;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px;
`;

export const ListItem = styled.li`
  width: 160px;
  height: 100px;
  box-shadow: 5px 5px 5px #00000040;
  padding: 10px;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
`;

export const ListName = styled.p`
  font-size: 18px;
  color: #000173;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ListNumber = styled.p`
  font-size: 14px;
  color: #000173;
  font-weight: normal;
  margin-bottom: 15px;
`;

export const ListDelete = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 50%;
  color: red;
  width: 20px;
  height: 20px;
  border: none;
  box-shadow: 1px 1px 1px #00000040;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;
