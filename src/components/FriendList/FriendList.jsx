import React from 'react';

import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(data => (
          <li
              key={data.id}
              className={styles.item}>
          <span
            className={data.isOnline ? styles.statusOn : styles.statusOff}
          ></span>
          <img
            className={styles.avatar}
            src={data.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{data.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};