import css from "./FriendList.module.css";
console.log(css)

const FriendListItem = ({ avatar, name, isOnline, id }) => (<li className={css.item} key={id}>
  {/* {isOnline ? style = { backgroundColor: green } : style = {backgroundColor: red }} */}
  <span style={{ backgroundColor: isOnline ? "green" : "red"}}  className={css.status}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>)

export default FriendListItem;