import styled from 'styled-components/native';
import { MaterialIcons, Feather } from '@expo/vector-icons'; 

type IsSelectProps = {
  isSelect: boolean
}

export const CardTaskContainer = styled.View`
 height: 64px;

 align-items: center;
 justify-content: space-between;
 flex-direction: row;

 background-color: ${({ theme }) => theme.colors.gray_500};

 border-radius: 8px;

 margin-top: 20px;
 margin-bottom: 4px;
 margin-right: 24px;
 margin-left: 24px;
`;

export const ButtonSelectTask = styled.TouchableOpacity`
  margin-left: 16px;
  margin-right: 11px;
`;

export const IconButtonSelectTask = styled(MaterialIcons).attrs<IsSelectProps>(({ theme, isSelect }) => ({
  size: 24,
  color: isSelect ? theme.colors.purple_dark : theme.colors.blue,
}))``;

export const TextTask = styled.Text<IsSelectProps>`
  flex: 1;

  ${({ theme, isSelect }) => ({
    color: isSelect ? theme.colors.gray_300 : theme.colors.gray_100,
    fontSize: theme.font_size.MD,
    fontFamily: theme.font_family.regular,
    textDecorationLine: isSelect ? 'line-through' : 'none',
  })};
`;

export const ButtonRemoveTask = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const IconButtonRemoveTask = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_300,
}))``;
