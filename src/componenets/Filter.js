import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter('ALL'))}
        className={filter === 'ALL' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('COMPLETED'))}
        className={filter === 'COMPLETED' ? 'active' : ''}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter('INCOMPLETE'))}
        className={filter === 'INCOMPLETE' ? 'active' : ''}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;

