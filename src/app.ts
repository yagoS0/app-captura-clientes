import styled from "styled-components";

export const Container = styled.div`
  margin-top: -10px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 768px;
  background-color: #282a36;
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 758px;
  background-color: #6272a4;
  border-radius: 0 0 10px 10px;
  margin-right: 6em;
  h2 {
    margin-top: 5em;
    margin-bottom: 1.5em;
    width: 265px;
    color: #f7f8f2;
    font-size: 20px;
    font-family: Inter-Regular;
  }
  button {
    text-decoration: none;
    border: none;
    background-color: #282a36;
    color: #ffffff;
    border-radius: 10px;
    width: 275px;
    height: 12%;
    margin-bottom: 2.5em;
    font-size: 20px;
  }
`;
export const ContainerInput = styled.div`
  label {
    margin-top: 1.5em;
    margin-left: 2em;
    align-self: flex-start;
    font-size: 20px;
    color: #f7f8f2;
    font-family: Inter-Medium;
  }
  input {
    width: 320px;
    height: 40px;
    border: none;
    border-radius: 10px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 758px;
`;
export const Title = styled.div`
  margin-left: 6em;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  h1 {
    width: 449px;
    font-family: Inter-Regular;
    color: #f7f8f2;
    margin-bottom: 1em;
    span {
      font-family: Inter-Regular;
      color: #6272a4;
    }
  }
  p {
    width: 550px;
    font-family: Inter-Regular;
    color: #f7f8f2;
  }
`;

export const Logo = styled.img`
  margin-bottom: 6em;
  width: 400px;
  height: 95px;
`;
