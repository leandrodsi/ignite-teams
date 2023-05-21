import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  type?: S.ButtonTypeStyleProps;
};

export const Button = ({ label, type = "PRIMARY", ...rest }: ButtonProps) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};
