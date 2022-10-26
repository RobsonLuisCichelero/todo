import styled from 'styled-components/native';
import { TextInput } from 'react-native';

type InputIsActiveProps = {
  isActive: boolean;
}

export const InputContainer = styled(TextInput)<InputIsActiveProps>`
  flex: 1;
  height: 54px;

  border-radius: 6px;
  padding-left: 16px;

  ${({ theme, isActive }) => ({
    backgroundColor: theme.colors.gray_500,
    border: 1,
    borderStyle: 'solid',
    borderColor: isActive ? theme.colors.purple_dark : theme.colors.gray_700,

    color: theme.colors.gray_100,
    fontSize: theme.font_size.LG,
    fontFamily: theme.font_family.regular
  })};

`;