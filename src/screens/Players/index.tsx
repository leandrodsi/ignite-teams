import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";

type RouteParams = {
  group: string;
};

export const Players = () => {
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState([]);

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />
      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              label={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingBottom: 100,
          },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button label="Remover Turma" type="SECONDARY" />
    </S.Container>
  );
};
