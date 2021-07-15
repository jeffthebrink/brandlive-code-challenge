import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from './redux/store';
import Login from './components/Login';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div>
      {username ? <ChatWindow /> : <Login />}
    </div>
  );
}

export default App;
