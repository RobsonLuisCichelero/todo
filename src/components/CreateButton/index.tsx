import { TouchableOpacityProps } from 'react-native';

import {
 CreateButtonContainer,
 IconCreateButton
} from './styles';

type Props = TouchableOpacityProps & {
  isActive: boolean
}

export function CreateButton({isActive, ...rest }: Props){
  return (
    <CreateButtonContainer isActive={isActive} {...rest}>
      <IconCreateButton name="plus-circle" />
    </CreateButtonContainer>
  );
}