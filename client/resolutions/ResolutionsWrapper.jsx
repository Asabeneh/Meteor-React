import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
Resolutions = new Mongo.Collection('resolutions');

export default class ResolutionsWrapper extends TrackerReact(Component){
constructor(){
  super();
  this.state = {
    subscription:{
      resolutions:Meteor.subscribe("userResolutions")
    }
  }
}
componentWillUnmount(){
  this.state.subscription.resolutions.stop();
}
  resolutions(){
    return Resolutions.find().fetch();
  }

  render(){
    let res = this.resolutions();
    // if(res.length<1){
    //   return (
    //     <div>
    //       Loading
    //     </div>
    //   )
    // }

    return(
      <div>
      <h1> My Resolutions</h1>
      <ResolutionsForm />
    <div>

        <ReactCSSTransitionGroup
          component= "ul"
          className = "resolutions"
          transitionName = "resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout = {400}>
        {this.resolutions().map((resolution) =>{
          return <ResolutionSingle key = {resolution._id} resolution = {resolution}/>
        })}

</ReactCSSTransitionGroup>

    </div>
      </div>
    );
  }
}
