import { useContext, useState } from "react";
import "./styles.css";
import { SearchContext } from "../SearchResults/SearchContext";

export function SearchForm() {
  const [value, setValue] = useState('')
  const { setUsers } = useContext(SearchContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const searchUsers = async (query: string) => {
    try {
       const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const data = await response.json();
       setUsers(data)
       console.log(data);

       // Предполагается, что API возвращает массив пользователей
       // Обновите состояние в контексте с полученными пользователями
       // setUsers(data); // Этот вызов должен быть выполнен в контексте, где доступен setUsers
    } catch (error) {
       console.error('There has been a problem with your fetch operation:', error);
    }
   };


  return (
    <div className="searchForm">
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={value} />
      </form>
    </div>
  );
}
