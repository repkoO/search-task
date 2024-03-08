import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { Data, SearchContext } from "./context/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

export default function App() {
  const [data, setData] = useState<Data>({users: []});
  const [isLoading, setIsLoading] = useState(false)

  return (
    <SearchContext.Provider value={{ data, setData, setIsLoading, isLoading}}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
