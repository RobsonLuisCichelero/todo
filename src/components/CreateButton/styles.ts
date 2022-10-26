import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

type ButtonIsActiveProps = {
  isActive: boolean
}

export const CreateButtonContainer = styled(TouchableOpacity)<ButtonIsActiveProps>`
 width: 52px;
 height: 52px;

 justify-content: center;
 align-items: center;

 ${({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.colors.blue : theme.colors.blue_dark
 })}

 border-radius: 6px;

 margin-left: 4px;
`;

export const IconCreateButton = styled(Feather).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.gray_100
}))``;