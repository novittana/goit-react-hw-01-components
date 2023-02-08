import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export function FriendListItem(props) {
  const { friend } = props;
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.objectOf({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}