<<<<<<< HEAD

=======
import './QueryInput.css';
>>>>>>> ba4bd7e4a6c0f7d8c54dc83e246bf76d99771b6d
import PropTypes from 'prop-types';

const QueryInput = ({ query, setQuery, handleQuerySubmit }) => {
  return (
    <div className="query-container">
      <input
        type="text"
        placeholder=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit}>Submit</button>
    </div>
  );
};


QueryInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  handleQuerySubmit: PropTypes.func.isRequired,
};

export default QueryInput;