import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <MainContainer>
      <WelcomeText>LogIn</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Enter Login ID" />
        {/* <Input type="password" placeholder="Enter Password" /> */}
        <Input type="password" id="password" placeholder="Enter Password" />
        <ForgotPassword>
          <span>Forgot Password ?</span>
        </ForgotPassword>
      </InputContainer>
      <ButtonContainer>
        <Button content="LogIn" />
        <LoginWith>
          Don't have a account?
          <a href="/">
            <span> Resister Here</span>
          </a>
        </LoginWith>
      </ButtonContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  gap: 4rem;
  span {
    color: #f78719;
  }
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 321px) {
    width: 60vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  
  @media only screen and (min-width: 1280px) {t
    width: 40vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 6rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  gap: 3rem;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const ForgotPassword = styled.h4`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export default App;
