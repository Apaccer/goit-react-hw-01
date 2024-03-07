import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.mainCard}>
        <img
          className={css.friendPhoto}
          src={image}
          alt="User avatar"
          width={200}
          height={200}
        />
        <p className={css.friendName}>{name}</p>
        <p className={css.friendTag}>@{tag}</p>
        <p className={css.friendLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
