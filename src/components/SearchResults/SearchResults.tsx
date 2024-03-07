import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";

export function SearchResults() {
  const { data } = useContext(SearchContext);
  console.log(data);

  return (
    <div className="usersList">
      {/* {data.users.map((user) => <UserCard key={user.id} {...user} />)} */}
    </div>
  );
}
