import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
 width: 100%;
 height: 173px;

 align-items: center;
 justify-content: center;

 background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const HeaderLogo = styled.Image`
  width: 110.34px;
  height: 32px;
`;