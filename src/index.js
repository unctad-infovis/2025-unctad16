import React from 'react';

import { createRoot } from 'react-dom/client';

import AppTitle from './jsx/AppTitle.jsx';

import AppHeader from './jsx/AppHeader.jsx';

const containerTitle = document.getElementById('app-root-2025-unctad16-title');
if (containerTitle) {
  const rootTitle = createRoot(containerTitle);
  rootTitle.render(<AppTitle first={containerTitle.dataset.first} second={containerTitle.dataset.second} />);
}

const containerTitles = document.querySelectorAll('.app-root-2025-unctad16-title');

containerTitles.forEach(container => {
  const rootTitle = createRoot(container);
  rootTitle.render(
    <AppTitle
      first={container.dataset.first}
      second={container.dataset.second}
    />
  );
});

const containerHeader = document.getElementById('app-root-2025-unctad16-header');
if (containerHeader) {
  const rootHeader = createRoot(containerHeader);
  rootHeader.render(<AppHeader />);
}
