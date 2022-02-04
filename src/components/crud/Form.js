import  React from "react";
const Form =(props)=>{
                return<form onSubmit={props.addcourse}>
                                <input type='text' onChange={props.updatecourse} value={props.current} />  
                                <button type="submit">Add Course</button>
                </form>
}
export default Form;