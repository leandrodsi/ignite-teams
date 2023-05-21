import * as S from "./styles";

type ListEmptyProps = {
  message: string;
};

export const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
