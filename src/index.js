import React from 'react';

import { createRoot } from 'react-dom/client';

import AppTitle from './jsx/AppTitle.jsx';

const containerTitle = document.getElementById('app-root-2025-unctad16-title');
const rootTitle = createRoot(containerTitle);
rootTitle.render(<AppTitle first={containerTitle.dataset.first} second={containerTitle.dataset.second} />);
