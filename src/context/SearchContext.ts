import { Dispatch, SetStateAction, createContext } from "react";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  }
}

export interface Data {
  users: User[]
}


export interface SearchContextType {
  data: Data,
  setData: Dispatch<SetStateAction<Data>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const SearchContext = createContext<SearchContextType>({
  data: { users: []},
  setData: () => {},
  isLoading: false,
  setIsLoading: () => {},
});