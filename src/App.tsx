import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { Data, SearchContext } from "./components/context/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

export default function App() {
  const [data, setData] = useState<Data>({users: []});
  console.log(data);


  return (
    <SearchContext.Provider value={{ data, setData }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
