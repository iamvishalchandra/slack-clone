import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  /* min-width: 100%;
  min-height: 100%; */
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 10%;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-decoration: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

export { LoginInnerContainer };
export default LoginContainer;
