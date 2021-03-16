import '../styles/App.css';
import Admin from './Admin';
import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <h1>Auth set up!</h1>
      <Admin></Admin>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
