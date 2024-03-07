import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {Array.isArray(friends) &&
          friends.map((friend) => {
            return (
              <li key={friend.id}>
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
