import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type FilterProps = TouchableOpacityProps &
  S.FilterStyleProps & {
    label: string;
  };

export const Filter = ({ label, isActive = false, ...rest }: FilterProps) => {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};
