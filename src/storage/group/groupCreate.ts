import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLENCTION } from "@storage/storage.config";
import { groupGetAll } from "./groupGetAll";

export const groupCreate = async (newGroup: string) => {
  try {
    const storedGroups = await groupGetAll();

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLENCTION, storage);
  } catch (error) {
    throw error;
  }
};
