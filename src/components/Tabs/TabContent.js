import React from 'react';
import './Tabs.css';

export const TabContent = (props) => {
  return (
    <div className="TabContent">
      <span className="currentTabContent">
        <span className="avatar">
          <img alt={props.tabContent.name} src={props.tabContent.avatar}/>
        </span>
        <span className="details">
          {props.tabContent.editable &&
            <form onSubmit={props.changeName}>
              <input defaultValue={props.tabContent.name} onChange={props.nameChanged}/>
            </form>
          }
          {!props.tabContent.editable &&
            <a onClick={() => props.makeEditable(props.tabContent.id)}>
                {props.tabContent.name}
            </a>
          }
          <span className="points">{props.tabContent.points}</span>
        </span>
      </span>
    </div>
  )
}
