import React from 'react';
import './App.css';
import NotificationsSwitch from "./components/notifications-switch";
import NotificationsSelect from "./components/user-settings";

function App() {
  return (
    <div className="App">


      <hr />

      <NotificationsSwitch/>

      <hr />

      <NotificationsSelect/>


    </div>
  );
}

export default App;
