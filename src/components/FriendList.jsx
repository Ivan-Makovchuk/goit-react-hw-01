import React from "react";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
