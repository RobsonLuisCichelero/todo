import styled from 'styled-components/native';

export const HomeContainer = styled.View`
 flex: 1;
 width: 100%;

 background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const AreaInput = styled.View`
  flex-direction: row;

  margin: -27px 24px;
`;

export const AreaTasks = styled.View`
  width: 100%;

  margin-top: 55px;
`;

export const HeaderTasks = styled.View`
  align-items: center;
  justify-content: space-between;

  margin-left: 24px;
  margin-right: 24px;

  flex-direction: row;
`;

export const AreaCriadas = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const TitleCriadas = styled.Text`
  ${({ theme }) => ({
    color: theme.colors.blue,
    fontSize: theme.font_size.MD,
    fontFamily: theme.font_family.bold
  })}

  margin-right: 8px;
`;

export const ValueCriadas = styled.Text`
  width: 25px;
  height: 19px;

  text-align: center;
  border-radius: 999px;

  ${({ theme }) => ({
    color: theme.colors.gray_200,
    fontSize: theme.font_size.SM,
    fontFamily: theme.font_family.bold,
    background: theme.colors.gray_400,
  })}
`;

export const AreaConcluidas = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const TitleConcluidas = styled.Text`
  ${({ theme }) => ({
    color: theme.colors.purple,
    fontSize: theme.font_size.MD,
    fontFamily: theme.font_family.bold
  })}

  margin-right: 8px;
`;

export const ValueConcluidas = styled.Text`
  width: 25px;
  height: 19px;

  text-align: center;
  border-radius: 999px;

  ${({ theme }) => ({
    color: theme.colors.gray_200,
    fontSize: theme.font_size.SM,
    fontFamily: theme.font_family.bold,
    background: theme.colors.gray_400,
  })}
`;