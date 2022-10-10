import React from "react";
import styled from "styled-components";
import GlobalTheme from "@/styles/theme";

interface ProfileImageProp {
  backgroundImg?: string;
}

interface UserImageUpdateProps {
  profileImagePreview: string | ArrayBuffer | FileReader | null | undefined;
  onChannelImageUploadClickEvent: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onProfileImageUploadClickEvent: () => void;
}

const UserImageUpdate = ({
  profileImagePreview,
  onChannelImageUploadClickEvent,
  onProfileImageUploadClickEvent,
}: UserImageUpdateProps) => {
  return (
    <UserImageContainer>
      <UserImageUploadTitle>Profile upload</UserImageUploadTitle>
      <UserImageInputWrapper>
        <UserImageUploadInput
          type="file"
          onChange={onChannelImageUploadClickEvent}
        />
      </UserImageInputWrapper>
      <ProfileImageBox backgroundImg={profileImagePreview as string} />
      <ProfileButton onClick={onProfileImageUploadClickEvent}>
        CHANGE PROFILE IMAGE
      </ProfileButton>
    </UserImageContainer>
  );
};

const UserImageContainer = styled.div`
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1.725rem;
  font-size: ${GlobalTheme.fontSize.default};
`;

const UserImageUploadTitle = styled.h1`
  font-size: ${GlobalTheme.fontSize.realBig};
  line-height: 1rem;
`;

const UserImageInputWrapper = styled.div`
  height: auto;
  text-align: left;
`;

const UserImageUploadInput = styled.input`
  cursor: pointer;
`;

const ProfileImageBox = styled.div<ProfileImageProp>`
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  display: block;
  width: 100%;
  height: 330px;
  text-align: center;
  margin-bottom: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ProfileButton = styled.div`
  line-height: 4rem;
  font-size: ${GlobalTheme.fontSize.littleBig};
  color: ${GlobalTheme.colors.white};
  background-color: ${GlobalTheme.colors.theme};
  padding: 0.875rem;
  text-align: center;
  cursor: pointer;
`;

export default UserImageUpdate;