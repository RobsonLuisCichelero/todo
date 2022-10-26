import { useState } from 'react';

import {
 CardTaskContainer,
 ButtonSelectTask,
 IconButtonSelectTask,
 TextTask,
 ButtonRemoveTask,
 IconButtonRemoveTask
} from './styles';

type Props = {
  textTask: string,
  isCompleted: boolean,
  onRemove: () => void;
  onSelect: () => void;
}

export function CardTask({ textTask, isCompleted, onRemove, onSelect }: Props){

  return (
    <CardTaskContainer>
      <ButtonSelectTask onPress={onSelect} disabled={isCompleted}>
        <IconButtonSelectTask 
          name={isCompleted ? "check-box" : "check-box-outline-blank"}
          isSelect={isCompleted}
        />
      </ButtonSelectTask>
      <TextTask isSelect={isCompleted}>
        {textTask}
      </TextTask>
      <ButtonRemoveTask onPress={onRemove}>
        <IconButtonRemoveTask name="trash-2"/>
      </ButtonRemoveTask>
    </CardTaskContainer>
  );
}