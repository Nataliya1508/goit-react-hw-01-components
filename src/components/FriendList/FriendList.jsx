import React from 'react';

import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(data => (
                <FriendListItem
                    key={data.id}
                    avatar={data.avatar}
                    name={data.name}
                    isOnline={data.isOnline}
                />
            ))}
        </ul>
    );
};

  const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span
            className={isOnline ? styles.statusOn : styles.statusOff}
            ></span>
            <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
            />
              <p className={styles.name}>{name}</p>
        </li>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};