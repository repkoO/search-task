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

interface SearchContextType {
  data: User[];
  setData: Dispatch<SetStateAction<User[]>>;
}

export const SearchContext = createContext<SearchContextType>({
  data: [],
  setData: () => {}
});
