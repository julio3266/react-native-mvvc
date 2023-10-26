import { apiConfig } from "../config/api";
import { userModel } from "../models/user.model";

export interface authDTO {
  user: string;
  password: string;
}

export const auth = async ({ user, password }: authDTO) => {
  const { data } = await apiConfig.post<userModel>("/login", {
    user,
    password,
  });
  return data;
};
