import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLENCTION } from "@storage/storage.config";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string,
) => {
  try {
    const storedPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLENCTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
