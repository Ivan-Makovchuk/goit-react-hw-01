import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friendItem, { [css.online]: isOnline, [css.offline]: !isOnline })}>
      <img className={css.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={css.name}>{name}</p>
      <span className={css.status}>{isOnline ? "Online" : "Offline"}</span>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

