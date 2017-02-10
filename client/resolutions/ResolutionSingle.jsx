import React,{Component} from 'react';
export default class ResolutionSingle extends Component {
  toggleChecked(){

    Meteor.call('toggleResolution', this.props.resolution);
  }
  deletResolution(){

    Meteor.call('deleteResolution', this.props.resolution);
  }

  render(){
      // console.log(this.props.resolution.complete);
      const resolutionClass = this.props.resolution.complete ?"checked": "";
          const status = this.props.resolution.complete ? <span className = "completed">Completed</span>:"";
    return(
      <li className = "resolutionClass">
        <input
          type = "checkbox"
          readOnly = {true}
          checked = {this.props.resolution.complete}
         onClick = {this.toggleChecked.bind(this)}
          />
        <a href = {`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>

      {status}
        {/* {this.props.resolution.complete.toString()} */}
        <button className = "btn btn-cancel" onClick = {this.deletResolution.bind(this)}>&times;</button>

    </li>

  );
  }
}
