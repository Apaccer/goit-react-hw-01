import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.friendsList}>
        {Array.isArray(friends) &&
          friends.map((friend) => {
            return (
              <li className={css.friendItem} key={friend.id}>
                <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FriendList;
