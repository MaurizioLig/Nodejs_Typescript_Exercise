import { User } from "../models/user";
import { UserDoc } from "../types";
// Import Types
/* import { MongooseDevice, MongooseUser } from "../types/mongooseTypes"
import { BodyDevice } from "../types/bodyTypes" */

export const saveOnDB = async (array: UserDoc[]): Promise<void> => {
  for (const e in array) {
    const user = new User(array[e]);
    await user.save();
  }
};

export const getAll = async (): Promise<UserDoc[]> => {
  const result = await User.find();
  return result;
};

export const addList = async (dataArray: UserDoc[]): Promise<void> => {
  for (const e in dataArray) {
    const newUser = new User(dataArray[e]);
    await newUser.save();
  }
};

export const getById = async (id: string): Promise<UserDoc> => {
  const result = await User.findById(id);
  return result;
};

export const updateUser = async (
  id: string,
  data: UserDoc
): Promise<UserDoc> => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteUser = async (id: string): Promise<UserDoc> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
