import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import MavoFace from '../assets/charecter/MaVo_Face.svg';
import MavoLogo from '../assets/charecter/MaVo_Logo.svg';
import Face from '../assets/face.svg';
import { _mainColBlue, _mainStartBtn, _mainTextWhite } from '../constants/colors';

import { PATH } from '../constants/path';
import { ProfileModal } from '../components/profileModal/ProfileModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Logo = styled.div`
  width: 13rem;
  display: flex;
  position: relative;
  align-items: center;
`;
const LogoFace = styled.img`
  width: 5rem;
  top: -5rem;
  position: absolute;
`;
const LogoText = styled.img`
  position: absolute;
width: 10rem;
  top: -6rem;
  left: 6rem;
  display: block;
  margin: auto;
`;
const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProjectName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-family: 'Katuri';
  margin-bottom: 42px;
`;
const ProfileImage = styled.img`
  display: flex;
  width: 300px;
  height: 300px;
  border: 1px solid lightgray;
  border-radius: 50%;
  margin: 25px 0;
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: ${_mainColBlue};
`;
const ProfileName = styled.div`
  font-size: 40px;
`;
const InputName = styled.input`
  width: 100%;
  height: 57px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-left: 10px;
`;
const SubmitBtn = styled.button`
  width: 50%;
  height: 10%;
  padding: 13px;
  margin-top: 94px;
  border-radius: 60px;
  font-size: 36px;
  border: none;
  cursor: pointer;
  color: ${_mainTextWhite};
  background-color: ${_mainStartBtn};
`;

const Profile = () => {
  // const [name, setName] = useState<string>('');
  const [profileImg, setProfileImg] = useState(Face);
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // if (name === '') {
    //   localStorage.setItem('name', '무명');
    // } else {
    //   localStorage.setItem('name', name);
    // }
    localStorage.setItem('image', profileImg);
    navigate(`/${PATH.CATEGORIES}`);
  };

  const handleSelect = (url: string) => setProfileImg(url);

  return (
    <Container>
      <Logo>
        <LogoFace src={MavoFace} />
        <LogoText src={MavoLogo} height={100} />
      </Logo>
      <Wrapper>
        <ProjectName>프로필</ProjectName>
        <ProfileModal onImgSelect={handleSelect}>
          <ProfileImage src={profileImg} />
        </ProfileModal>
        {/* <ProfileName>이름</ProfileName> */}
        {/* <InputName
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <SubmitBtn onClick={handleSubmit}>시작하기</SubmitBtn>
      </Wrapper>
    </Container>
  );
};

export default Profile;
