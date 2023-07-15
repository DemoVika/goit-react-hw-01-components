
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem'
import css from "./FriendList.module.css";
// console.log(css)

const FriendList = ({friends}) => (
  <ul className={css.friendList}>
  
  {friends.map(friend => (
    <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      /> ))}
</ul>
)

export default FriendList;

FriendList.propTypes = {
 friends: PropTypes.arrayOf(PropTypes.shape({
 avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  }))
}