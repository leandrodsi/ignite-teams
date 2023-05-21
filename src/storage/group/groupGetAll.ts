import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLENCTION } from "@storage/storage.config";

export const groupGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLENCTION);

    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
};
