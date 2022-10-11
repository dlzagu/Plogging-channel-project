import React from "react";
import styled from "styled-components";
import GlobalTheme from "@/styles/theme";
import BaseInputContainer from "@/components/hoc/BaseInputContainer";

interface Props {
  confirmCheck: string;
  setConfirmCheck: React.Dispatch<React.SetStateAction<string>>;
}

const UserDeleteAccount = ({ confirmCheck, setConfirmCheck }: Props) => {
  return (
    <UserDeleteAccountContainer>
      <TitleContainer>Delete Account</TitleContainer>
      <BodyContainer>
        <TextAreaContainer>
          Do you want to delete your account? This process cannot be undone.
        </TextAreaContainer>
        <BaseInputContainer>
          <ConfirmInput
            placeholder="To confirm this, type your email"
            value={confirmCheck}
            onChange={(e) => {
              setConfirmCheck(e.target.value);
            }}
          ></ConfirmInput>
        </BaseInputContainer>
      </BodyContainer>
    </UserDeleteAccountContainer>
  );
};

const UserDeleteAccountContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  margin: 2rem;
`;
const BodyContainer = styled.div``;
const TextAreaContainer = styled.div`
  margin: 2rem;
  font-size: ${GlobalTheme.fontSize.littleBig};
`;
const ConfirmInput = styled.input`
  ${GlobalTheme.input}
  width: 80%;
  font-size: ${GlobalTheme.fontSize.littleBig};
  box-sizing: border-box;
  line-height: 3rem;
  box-shadow: 1px 1px 3px ${GlobalTheme.colors.gray};
`;
export default UserDeleteAccount;