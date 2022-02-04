import React, { Component } from 'react';
import Form from './Form';
import Listy from './Listy';

export default class Curd extends Component {
                state={
                                courses:[
                                                {name:'html'},
                                                {name:'css'},
                                                {name:'java'},
                                ],
                                current:""
                }
                updatecourse=(e)=>{
                                this.setState({current:e.target.value})
                }
                addcourse=(e)=>{e.preventDefault();
                               let current=this.state.current;
                              
                               let courses=this.state.courses;
                               current===''?current='': courses.push({name:current});
                         this.setState({
                                               courses,
                                               current:''
                               })

                }
                deletecourse=(index)=>{
                                let courses=this.state.courses;
                                courses.splice(index,1);
                                this.setState({courses})
                }
                editcourse=(index,value)=>{
                                let courses=this.state.courses;
                                let course=courses[index];
                                course['name']=value;
                                this.setState({
                                                courses
                                })
                }
  render() {
                  const {courses}=this.state;
                 const courselist=courses.map((course,index)=>{
                                  return <Listy details={course} key={index} deletecourse={this.deletecourse} index={index} editcourse={this.editcourse} />
                  })
    return <section>
                    <h1>MY Courses</h1>
                    <Form updatecourse={this.updatecourse} addcourse={this.addcourse} current={this.state.current} />
                    {courselist.length===0?'noo courses':  <ul>{courselist}</ul>}
    </section>;
  }
}