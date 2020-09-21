import React, { Component } from 'react'
import posed from 'react-pose'
import UserConsumer from '../context'

var uniqid = require('uniqid');

// react-pose ile animasyon componenti 
const AnimationBox = posed.div({
    visible: { opacity: 1, applyAtStart: {display: "block"}},
    hidden: { opacity: 0 , applyAtEnd: {display: "none"}}
  });

class AddUser extends Component {

    state = {
        visible: false,
        name: "",
        department: "",
        salary: ""
    }   

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    addUser = (dispatch,e) => {
        // butona her bastıgımızda sayfa yenilemesini önleyecek
        e.preventDefault();
        const {name,department,salary} = this.state;
        const newUser = {
            id: uniqid(),
            name,
            department,
            salary
        }
        dispatch({
            type: "ADD_USER",
            payload: newUser
        });
        
    }

    render() {
        const {visible,name,department,salary} = this.state;

        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (                    
                        <div className="col-md-8 mb-4">
                        <button className="btn btn-dark btn-block mb-2" onClick={this.changeVisibility}> 
                        {visible ? "HIDE FORM" : "SHOW FORM"} 
                        </button>
        
                        <AnimationBox pose={visible ? "visible" : "hidden"}>
                        <div className="card">
        
                            <div className="card-header">
                                <h4>Add User Form</h4>
                            </div>
                            
                            <div className="card-body">
                                <form onSubmit={this.addUser.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                            <input 
                                                type="text"
                                                name="name"
                                                id="id"
                                                placeholder="Enter a name"
                                                className="form-control"
                                                value={name}
                                                onChange={this.changeInput}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="department">Department</label>
                                            <input 
                                                type="text"
                                                name="department"
                                                id="departmen" 
                                                placeholder="Enter a department"
                                                className="form-control"
                                                value={department}
                                                onChange={this.changeInput}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary</label>
                                            <input 
                                                type="text"
                                                name="salary"
                                                id="salary"
                                                placeholder="Enter a salary"
                                                className="form-control"
                                                value={salary}
                                                onChange={this.changeInput}
                                            />
                                    </div>
                                <button className="btn btn-danger btn-block" type="submit">ADD USER</button>
                            </form>  
                            </div>
                            
                        </div>
                        </AnimationBox>
                    </div>
                )

                }
            }
        </UserConsumer>
    }
}

export default AddUser;
