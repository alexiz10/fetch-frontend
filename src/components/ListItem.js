import React from 'react';

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

export default ListItem;
