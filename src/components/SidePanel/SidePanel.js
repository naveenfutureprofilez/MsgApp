import React from 'react';
import UserPanel from './UserPanel';
import Starred from './Starred';
import Channels from './Channels';
import DirectMessages from './DirectMessages';
import './SidePanel.css';
import chatIcon from '../chat-icon.svg';
function SidePanel() {
  return (
    <div className="SidePanel">
      <UserPanel />
      <Channels />
    </div>
  );
}

export default SidePanel;
