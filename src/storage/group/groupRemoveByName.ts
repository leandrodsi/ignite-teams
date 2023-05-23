import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLENCTION, PLAYER_COLLENCTION } from "@storage/storage.config";
import { groupGetAll } from "./groupGetAll";

export const groupRemoveByName = async (deletedGroupName: string) => {
  try {
    const storedGroups = await groupGetAll();
    const groups = storedGroups.filter((group) => group !== deletedGroupName);

    await AsyncStorage.setItem(GROUP_COLLENCTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLENCTION}-${deletedGroupName}`);
  } catch (error) {
    throw error;
  }
};
