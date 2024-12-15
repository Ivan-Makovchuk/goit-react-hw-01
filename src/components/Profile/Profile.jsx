import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.containerProfile)}>
      <div>
        <img src={image} alt={name} className={clsx(css.userAvatar)} />
        <p className={clsx(css.userNameProfile)}>{name}</p>
        <p className={clsx(css.textProfile)}>{"@" + tag}</p>
        <p className={clsx(css.textProfile)}>{location}</p>
      </div>
      <ul className={clsx(css.profileList)}>
        <li className={clsx(css.profileItem)}>
          <span className={clsx(css.profileItemText)}>Followers</span>
          <span className={clsx(css.profileItemText, css.quantity)}>
            {stats.followers}
          </span>
        </li>
        <li className={clsx(css.profileItem)}>
          <span className={clsx(css.profileItemText)}>Views</span>
          <span className={clsx(css.profileItemText, css.quantity)}>
            {stats.views}
          </span>
        </li>
        <li className={clsx(css.profileItem)}>
          <span className={clsx(css.profileItemText)}>Likes</span>
          <span className={clsx(css.profileItemText, css.quantity)}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
