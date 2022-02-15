import styled from "@emotion/styled";

export const Scenario = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1vh 1vw;
  position: relative;
`;

export const Jungle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const Tiger = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Person = styled.div`
  position: absolute;
  top: 0;
  left: 250px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Speed = styled.div`
  color: red;
  width: 40px;
  text-align: right;
  font-weight: 500;
  background-color: rgba(255, 255, 0, 0.5);
  position: absolute;
  right: 60px;
  top: 25%;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const StartButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const GenerateItemsButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: 110px;
  width: 120px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ItemIcon = styled.img`
  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  position: absolute;
`;
