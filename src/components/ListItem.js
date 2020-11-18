import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.scss';

const ListItem = ({ backgroundColor, id, listId, name }) => {
  return (
    <div className="list-item-container" style={{ backgroundColor }}>
      <p>ID: {id}</p>
      <p>List ID: {listId}</p>
      <p>Name: {name}</p>
    </div>
  );
};

ListItem.propTypes = {
  backgroundColor: PropTypes.string,
  id: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  backgroundColor: 'rgba(12,54,67,.3)'
};

export default ListItem;
