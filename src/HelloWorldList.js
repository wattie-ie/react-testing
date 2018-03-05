import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally','Bender'] };
    }
    render() {
      return (
        <div className="HelloWorldList">
            {this.renderGreetings()}
        </div>
      );
    }
    renderGreetings() {
        return this.state.greetings.map(name => (
          <HelloWorld key={name} name={name}/>
        ));
    }
  }
  export default HelloWorldList;