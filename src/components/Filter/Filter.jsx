import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
