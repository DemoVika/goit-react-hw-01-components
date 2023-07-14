
import FriendListItem from './FriendListItem'
import css from "./FriendList.module.css";
// console.log(css)

const FriendList = ({friends}) => (
  <ul className={css.friendList}>
  
  {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.id} 
      /> ))}
</ul>
)

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}