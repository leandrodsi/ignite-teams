import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export const Input = ({ inputRef, ...rest }: InputProps) => {
  const { COLORS } = useTheme();

  return (
    <S.Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
};
