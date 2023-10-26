import { useState } from "react";
import { Alert } from "react-native";
import { auth } from "../../repositories/auth.repository";
import { AuthViewModel } from "./models";

const useLoginViewModel = (): AuthViewModel => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setIsLoading(!isLoading);
      const response = await auth({ user, password });
      console.log(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Vixi...", "Senha errada!");
    } finally {
      setIsLoading(!isLoading);
    }
  };

  return {
    user,
    setUser,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};

export default useLoginViewModel;
