import React from 'react';
import {Tab} from './Tab';
import './Tabs.css';

export const Tabs = (props) => {
  return (
    <div className="TabList">
      <ul>
        {props.tabs.map(tab =>
            <Tab handleClick={() => props.changeTab(tab.id)}
                 key={tab.id}
                 tabId={tab.id}
                 avatar={tab.avatar}
                 name={tab.name}
                 points={tab.points}
                 isCurrent={(props.currentTab === tab.id)}
             />
         )}
      </ul>
    </div>
  )
}
