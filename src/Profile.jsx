import './profile.css';

export default ({ username, tag, location, avatar, stats }) => (
  <div className="wrapper">

  
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
      
    <table>
      <thead>
        <tr>
          <td>
            <span className="label">followers</span> <br />
            <span className="quantity">{stats.followers}</span>
          </td>
          <td>
            <span className="label">views</span> <br />
            <span className="quantity">{stats.views}</span>
          </td>
          <td>
            <span className="label">likes</span> <br />
            <span className="quantity">{stats.likes}</span>
          </td>
      </tr>
      </thead>
    </table>
    </div>
  </div>
);
