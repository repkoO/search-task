import { useContext } from "react";
import { SearchContext, SearchContextType } from "../context/SearchContext";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";
import { RotatingLines } from "react-loader-spinner";

export function SearchResults() {
  const { data, isLoading } = useContext<SearchContextType>(SearchContext);

return (
  isLoading ? (
    <div className="load__snippet">
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  ) : (
    data.users.length === 0 ? (
      <div className="no__results">
        <p>No users found...</p>
      </div>
    ) : (
      <div className="usersList">
        {data.users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    )
  )
)
}
