import React, { /* useState, useEffect */ } from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.less';

function App({ first, second }) {
  return (
    <div className="app">
      <h1 className="h1-60s my-3">
        <span className="fw-normal">{first}</span>
        {' '}
        <span className="nowrap">
          {second}
          <span className="chevron"><img src="https://static.dwcdn.net/custom/themes/unctad-2024-rebrand/Blue%20arrow.svg" alt="" aria-hidden="true" /></span>
        </span>
      </h1>
    </div>
  );
}

App.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
};

export default App;
