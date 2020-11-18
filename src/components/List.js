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

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b},0.3)`;
  };

  return (
    <div className="list-container">
      {data.map((item) => (
        <ListItem
          key={item.id}
          backgroundColor={generateRandomColor()}
          id={item.id}
          listId={item.listId}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default List;
