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
  backgroundColor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default ListItem;
