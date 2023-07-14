// import './profile.css';
import css from "./Profile.module.css";
console.log(css)

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
      
    <table>
      <thead>
        <tr>
          <td>
            <span className={css.label}>followers</span> <br />
            <span className={css.quantity}>{stats.followers}</span>
          </td>
          <td>
            <span className={css.label}>views</span> <br />
            <span className={css.quantity}>{stats.views}</span>
          </td>
          <td>
            <span className={css.label}>likes</span> <br />
            <span className={css.quantity}>{stats.likes}</span>
          </td>
      </tr>
      </thead>
    </table>
    </div>
);

export default Profile;
