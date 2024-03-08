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

export interface SearchContextType {
  data: {
    users: User[]
  }
  setData: Dispatch<SetStateAction<User[]>>;
}

export const SearchContext = createContext<SearchContextType>({
  data: { users: []},
  setData: () => {}
});