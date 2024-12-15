import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ allFriends }) => {
  const { avatar, name, isOnline, id } = allFriends;

  return (
    <div key={id}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.friendItemName}>{name}</p>
      <p className={clsx(isOnline ? "" : css.friendOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
