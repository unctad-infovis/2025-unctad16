import React, { /* useState, useEffect */ } from 'react';
import '../styles/styles.less';

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <div className="arrow-x bg-un-red row px-5 py-3 custom-banner" style={{ minHeight: '300px;' }}>
          <div className="content-wrapper">
            <div className="col-12 col-xl-2 g-0 ps- logo-container">
              <img src="/sites/default/files/inline-images/unctad-16-logo-white.png" data-entity-uuid="18237496-2ea6-4c78-abca-3ac10e353be3" data-entity-type="file" alt="16th UN Conference on Trade and Development logo" />
            </div>
            <div
              className="col-12 col-xl-10 text-container my-auto pb-4 pb-md-0"
              style={{
                alignContent: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'center'
              }}
            >
              <div className="line-1 text-white d-none d-lg-block fs-1">
                16th UN Conference on Trade and Development
              </div>
              <div className="line-2 text-white fs-3">
                Shaping
                {' '}
                <strong className="chevron">the future</strong>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
