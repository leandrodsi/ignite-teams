import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLENCTION } from "@storage/storage.config";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const playerGetByGroup = async (group: string) => {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYER_COLLENCTION}-${group}`,
    );

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
};
