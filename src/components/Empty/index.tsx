import {
 EmptyContainer,
 EmptyIcon,
 EmptyTitle,
 EmptySubTitle,
} from './styles';

export function Empty(){
  return (
    <EmptyContainer>
      <EmptyIcon name="clipboard-list"/>
      <EmptyTitle>Você ainda não tem tarefas cadastradas</EmptyTitle>
      <EmptySubTitle>Crie tarefas e organize seus itens a fazer</EmptySubTitle>
    </EmptyContainer>
  );
}