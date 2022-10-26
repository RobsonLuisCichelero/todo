import {
 InputContainer
} from './styles';

import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  isActive: boolean;
}

export function Input({ isActive, ...rest }: Props){
  return (
    <InputContainer isActive={isActive} {...rest} />
  );
}