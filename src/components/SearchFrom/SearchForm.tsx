import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useDebounce } from "../../hooks/UseDebounce";
import "./styles.css";

export function SearchForm() {
  const [value, setValue] = useState("");
  const { setData, setIsLoading } = useContext(SearchContext);
  const debouncedSearchTerm = useDebounce(value, 500);

  useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const response = await fetch(`https://dummyjson.com/users/search?q=${debouncedSearchTerm}`);
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
        console.error('There has been a problem with your fetch operation:', error)
        } finally {
          setIsLoading(false)
        }
    }
    fetchData();
  }, [debouncedSearchTerm, setData, setIsLoading]);

  return (
    <div className="searchForm">
      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
      </form>
    </div>
  );
}
