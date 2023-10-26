export interface AuthViewModel {
  user: string;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  handleLogin: () => void;
}
