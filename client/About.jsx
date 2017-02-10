import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class About extends Component {
  setVar(){
   Session.set("Meteor.loginButtons.dropdownVisible", true);
   console.log(Session.get("test"));
  }
  render(){
    return(

      <ReactCSSTransitionGroup
        component= "div"
        transitionName = "route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout = {400}
        transitionAppear={true}>
      <h1> About The Application</h1>
      <h1> Marja-Leena, Sami and Kaj</h1>
      <p>
        I am pleased to be interviewed by you today. This is one of my project. I have a couple of them. I can only run one project on my local server. Now you are accessing one of my project from local server.

        <ol>
          <li> Only registered users can create resolutions or todo lists </li>
          <li>Users can check or delete completed resolutions or task </li>
          <li>The graphical interface and responsiveness is not yet completed. </li>
          <li> Now create an account and check how it works.</li>

        </ol>
        <p> This application was developed:</p>

          <ul>
            <li> <strong> Front-end</strong>:
            <ul> <li> <em>ReactJS, HTML and CSS, and BootStrap</em></li></ul>
          </li>
          <li> <strong> Back-end</strong>:
          <ul> <li> <em>MeteorJS, NodeJS and MongoDB</em></li></ul>
        </li>

          </ul>
        <h4> If you like to check other projects I would be happy to share them.</h4>
         </p>
       <button onClick = {this.setVar}>SIGN UP</button>
      </ReactCSSTransitionGroup>

);
}
}
