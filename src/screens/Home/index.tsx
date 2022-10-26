import { useEffect, useState } from 'react';

import {
 HomeContainer,
 AreaInput,
 AreaTasks,
 HeaderTasks,
 AreaCriadas,
 TitleCriadas,
 ValueCriadas,
 AreaConcluidas,
 TitleConcluidas,
 ValueConcluidas,
} from './styles';

import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/CreateButton';
import { Empty } from '../../components/Empty';
import { CardTask } from '../../components/CardTask';

interface TasksProps {
  id: string,
  textTask: string,
  isCompleted: boolean,
}

export function Home(){
  const theme = useTheme();
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(0)

  useEffect(() => {
    tasks.map(value => {
      if(value.isCompleted === true){
        setIsCompleted(isCompleted + 1);
      }
    })
  }, [tasks])

  function handleCreateTask(){
    const newTask: TasksProps = {
      id: String(new Date().getTime()),
      textTask: task,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask])
    setTask("")
  }

  function handleRemoveTask(taskId: string){
    setTasks(
      tasks.filter((task) => {
        if(task.id === taskId){
          return
        } else {
          return task
        }
      })
    )
    setIsCompleted(0)
  }

  function handleSelectTask(taskId: string){
    setTasks(
      tasks.map((task) => {
        if(task.id === taskId) {
          return {...task, isCompleted: true}
        } else {
          return task
        }
      }),
    )
  }

  return (
    <HomeContainer>
      <Header />

      <AreaInput>
        <Input
          value={task}
          onChangeText={setTask}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.gray_300}
          isActive={!!task}
        />
        <CreateButton 
          isActive={!!task}
          onPress={handleCreateTask}
        />
      </AreaInput>

      <AreaTasks>
        <HeaderTasks>
          <AreaCriadas>
            <TitleCriadas>Criadas</TitleCriadas>
            <ValueCriadas>{tasks.length}</ValueCriadas>            
          </AreaCriadas>
          <AreaConcluidas>
            <TitleConcluidas>Concluídas</TitleConcluidas>
            <ValueConcluidas>{isCompleted}</ValueConcluidas>
          </AreaConcluidas>
        </HeaderTasks>

        {tasks.length === 0 ? (
          <Empty />
        ) : (
          <>
            {tasks.map(value => (
              <CardTask 
                key={value.id} 
                textTask={value.textTask}
                isCompleted={value.isCompleted}
                onRemove={() => handleRemoveTask(value.id)}
                onSelect={() => handleSelectTask(value.id)}
              />
            ))}
          </>
        )}
        
      </AreaTasks>

    </HomeContainer>
  );
}