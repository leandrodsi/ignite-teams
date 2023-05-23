import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLENCTION } from "@storage/storage.config";
import { playerGetByGroup } from "./playerGetByGroup";

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const storage = await playerGetByGroup(group);

    const filtered = storage.filter((player) => player.name !== playerName);
    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLENCTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
};
