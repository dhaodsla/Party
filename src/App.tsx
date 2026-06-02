/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Invitation } from './components/Invitation';
import { MainApp } from './components/MainApp';

export default function App() {
  const [showMainApp, setShowMainApp] = useState(false);

  return (
    <>
      {showMainApp ? (
        <MainApp />
      ) : (
        <Invitation onAccept={() => setShowMainApp(true)} />
      )}
    </>
  );
}
