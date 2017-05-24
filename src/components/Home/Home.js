import React, { Component } from 'react';
import {loadTabs} from '../../libs/ajax';
import {Tabs, TabContent} from '../Tabs';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [],
      currentTab: 1,
      currentName: ''
    };
    this.tabs = [];
  }

  componentDidMount() {
      loadTabs()
        .then(tabs => {
          this.setState({tabs});
          this.tabs = tabs;
        })
  }

  showTemporaryMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  changeTab = (id) => {
    this.tabs.map(tab => tab.editable = false);

    this.setState({
      tabs: this.tabs,
      currentTab: id
    });
  }

  makeEditable = (id) => {
    this.tabs.map((tab) => {
      tab.editable = false;

      if(tab.id === id) {
        tab.editable = true;
      }
    });

    this.setState({tabs: this.tabs});
  }

  changeName = (event) => {
    this.tabs.map(tab => tab.editable = false);

    this.setState({tabs: this.tabs});
  }

  nameChanged = (event) => {
    this.tabs.map((tab) => {
      if(tab.id === this.state.currentTab) {
        tab.name = event.currentTarget.value;
      }
    });

    this.setState({tabs: this.tabs});
  }

  render() {
    let currentTab = this.state.tabs[this.state.currentTab - 1];

    return(
      <div className="App">
        <Tabs currentTab={this.state.currentTab}
              tabs={this.state.tabs}
              changeTab={this.changeTab} />

          {currentTab &&
            <TabContent tabContent={currentTab}
                        nameChanged={this.nameChanged}
                        makeEditable={this.makeEditable}
                        changeName={this.changeName}/>
          }
      </div>
    );
  }
}

export default Home;
