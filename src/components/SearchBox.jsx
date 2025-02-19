import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts..."
      style={{ padding: '5px 10px', width: '100%', maxWidth: '300px' }}
    />
  );
};

export default SearchBox;