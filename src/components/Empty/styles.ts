import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

export const EmptyContainer = styled.View`
 margin-left: 24px;
 margin-right: 24px;
 margin-top: 20px;

 padding-top: 48px;

 justify-content: center;
 align-items: center;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.gray_400};
`;

 export const EmptyIcon = styled(FontAwesome5).attrs(({ theme }) => ({
  color: theme.colors.gray_400,
  size: 56,
 }))``;

 export const EmptyTitle = styled.Text`
  margin-top: 16px;

  ${({ theme }) => ({
    color: theme.colors.gray_300,
    fontSize: theme.font_size.MD,
    fontFamily: theme.font_family.bold,
  })};
 `;

 export const EmptySubTitle = styled.Text`
  ${({ theme }) => ({
    color: theme.colors.gray_300,
    fontSize: theme.font_size.MD,
    fontFamily: theme.font_family.regular,
  })};
 `;