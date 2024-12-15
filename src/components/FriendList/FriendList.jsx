import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((item, index) => {
        return (
          <li key={item.id} className={css.friendItem}>
            <FriendListItem allFriends={friends[index]} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;