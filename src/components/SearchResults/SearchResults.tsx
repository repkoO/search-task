import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";
import { RotatingLines } from "react-loader-spinner";

export function SearchResults() {
  const { data } = useContext(SearchContext);

  if (!data || !data.users) {
    return <div className="load__snippet">
      <RotatingLines
    visible={true}
    width="96"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    />
    </div>;
  }

  return (
    <div className="usersList">
      {data?.users.map((user) => <UserCard key={user.id} {...user} />)}
    </div>
  );
}
