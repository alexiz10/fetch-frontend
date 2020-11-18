import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListItem from './ListItem';

import './List.scss';

const dataUrl = 'https://alexiz-bucket.s3-us-west-2.amazonaws.com/hiring.json';

const List = () => {
  const [data, setData] = useState([]);

  const collator = new Intl.Collator('en', {
    numeric: true,
    sensitivity: 'base'
  });

  useEffect(() => {
    axios(dataUrl).then((result) => {
      const filtered = result.data
        .filter((el) => el.name > '')
        .sort((a, b) => {
          if (a.listId > b.listId) return 1;
          if (a.listId < b.listId) return -1;
          return collator.compare(a.name, b.name);
        });
      setData(filtered);
    });
  }, []);

  return (
    <ul className="list-container">
      {data.map((item) => (
        <li key={item.id}>
          <ListItem id={item.id} listId={item.listId} name={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default List;
