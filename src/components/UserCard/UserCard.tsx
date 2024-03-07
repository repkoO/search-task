import "./style.css";

export function UserCard(users) {
  return (
    <div className="userCard">
      <img className="userPic" src={users.image} />
      <div className="userInfo">
        <div>{`${users.firstName} ${users.lastName}`}</div>
        <div>{users.address.city}</div>
      </div>
    </div>
  );
}
