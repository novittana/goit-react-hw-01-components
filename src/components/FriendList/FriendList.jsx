import PropTypes from 'prop-types';
import css from "./FriendList.module.css";
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, ...friend }) => {
        return <FriendListItem key={id} friend={friend} />;
      })}
    </ul>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};