import React from 'react';
import './Tabs.css';

export const Tab = (props) => {
  return (
    <li className={props.isCurrent ? 'current tabName' : 'tabName'}>
        <a onClick={props.handleClick}>
            {props.name}
        </a>
    </li>
  )
}
