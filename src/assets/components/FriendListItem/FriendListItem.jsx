import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="130" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, { [css.ofline]: !isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
