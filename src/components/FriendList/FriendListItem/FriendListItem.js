import {
  FriendListLi,
  FriendListIconOnline,
  FriendListIconOffline,
} from "./FriendListItem.styled";
import PropTypes from "prop-types";
export default function FriendListItem(props) {
  const { avatar, name, isOnline = true } = props;

  return (
    <FriendListLi>
      {isOnline ? (
        <FriendListIconOnline></FriendListIconOnline>
      ) : (
        <FriendListIconOffline></FriendListIconOffline>
      )}
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendListLi>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
