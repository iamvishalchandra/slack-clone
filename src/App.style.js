import styled from "styled-components";

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export { AppLoading, AppLoadingContent };
export default AppBody;
