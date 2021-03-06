import React from 'react';
import { Component } from 'react';
import ChatBar from '../containers/ChatBarContainer'
import ChatMessages from '../components/ChatMessages'

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // make sure this function gets passed in from container
    this.props.chatSetup();
  }
  render () {
    var classes = 'chatHidden';
    if (this.props.display) {
      classes = 'chatBox';
    }
    return (
      <div>
        <div className={classes}>
          {/* make sure messages gets passed from store from container */}
          <ChatMessages messages={this.props.messages}/>
        </div>
        <ChatBar chatDisplay={this.props.chatDisplay}/>
      </div>
    );
  }
}
