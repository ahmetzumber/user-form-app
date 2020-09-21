import React, { Component } from "react";

const UserContext = React.createContext();
// Provider ve consumer olusturuyor bu UserContext

const reducer = (state,action) => {
    switch(action.type){
      case "DELETE_USER":
        return{
          ...state,
          users: state.users.filter(user => action.payload !== user.id) 
          // action.payload id tutacak
        }
        // ...state ile statedeki eski verileri dönüyosun, liste gibi dusun
      case "ADD_USER":
        return{
          ...state,
          users : [...state.users,action.payload]
        }
       default:
          return state; 
    }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        "id": "unique-1",
        "name": "Bill Gates",
        "department": "Technology",
        "salary": "90000"
      },
      {
        "id": "unique-2",
        "name": "Elon Musk",
        "department": "Aerospace",
        "salary": "100000"
      },
      {
        "id": "unique-3",
        "name": "Steve Jobs",
        "department": "Technology",
        "salary": "90000"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state,action))
    }
  };
  render() {
    
    // index.js de UserProvide icine aldıgımız <App/> aslında buradaki children, yani App i sarmalladık
    return <UserContext.Provider value={this.state}>
                {this.props.children} 
            </UserContext.Provider>;
  }
}
// consumerı olustur
const UserConsumer = UserContext.Consumer;

export default UserConsumer;