import React from 'react';
import './App.css';
import NotificationsSwitch from "./components/notifications-switch";
import NotificationsSelect from "./components/user-settings";
import Title from "./components/title";

function App() {
  return (
    <div className="App">


      <hr />

      <NotificationsSwitch/>

      <hr />

      <NotificationsSelect/>

      <hr />

      <Title/>

    </div>
  );
}

export default App;
