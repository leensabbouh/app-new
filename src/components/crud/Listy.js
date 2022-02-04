import React, { Component, Fragment } from 'react';

export default class Listy extends Component {
                state={
                                isedit:false,
                }
                rendercourse=()=>{
                             return   <li>
                                <span>   {this.props.details.name}</span>
                                <button onClick={()=>{this.props.deletecourse(this.props.index)}}>delet</button>
                                <button onClick={()=>{this.togglestate()}}>edit</button>
                   </li>
                }
                togglestate=()=>{
                                let {isedit}=this.state;
                                this.setState({
                                                isedit:!isedit
                                })
                }
                updatecourseitem=(e)=>{e.preventDefault();
                                this.props.editcourse(this.props.index,this.input.value)
                                this.togglestate();

                }
                renderupdate=()=>{
                                return<form onSubmit={this.updatecourseitem}>
                                                <input type='text' ref={(v)=>{this.input=v}} defaultValue={this.props.details.name} />
                                                <button>update course</button>
                                </form>
                }
  render() {  let {isedit}=this.state;
    return <Fragment>
                  {isedit?this.renderupdate(): this.rendercourse()}
    </Fragment>;
  }
}
