import React from "react";
import styled from "styled-components";
import GlobalTheme from "@/styles/theme";
import BaseValidateTextContainer from "@/components/hoc/BaseValidateTextContainer";

interface Props {
  verificationCode: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string>>;
  errMessage: string;
}

const AuthEmailVerification = ({
  verificationCode,
  setVerificationCode,
  errMessage,
}: Props) => {
  return (
    <EmailVerificationContainer>
      <Title>Email Verification</Title>
      <Text>Please enter the verification code sent to email</Text>
      <CodeInput
        placeholder="enter code"
        value={verificationCode}
        onChange={(e) => {
          setVerificationCode(e.target.value);
        }}
      ></CodeInput>
      {errMessage && (
        <BaseValidateTextContainer>{errMessage}</BaseValidateTextContainer>
      )}
    </EmailVerificationContainer>
  );
};

const EmailVerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const Title = styled.div`
  margin-bottom: 2rem;
`;
const Text = styled.div`
  font-size: ${GlobalTheme.fontSize.littleBig};
`;
const CodeInput = styled.input`
  width: 30rem;
  font-size: ${GlobalTheme.fontSize.littleBig};
  text-align: center;
  padding: 1rem;
  border: ${GlobalTheme.input.border};
  box-shadow: 1px 1px 3px ${GlobalTheme.colors.gray};
  outline: ${GlobalTheme.input.outline};
`;

export default AuthEmailVerification;