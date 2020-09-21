import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {
  state = {
    isVisible: false,
  };

  // <h4> tagında kullanmıs oldugumuz "this.onClickEvent" buradaki this kalıtım aldıgımız Component objesini gösterir
  // eger User objesini döndürmek istiyorsak, <h4> tagında "this.onClikEvent.bind(this)" seklinde yazarak
  // User objesini döndürürüz, bu işlemi constructorda da yapabiliriz
  // arrow functionlarda ise bind otomatik yapılır
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch,e) => {
      const {id} = this.props;
      dispatch({
        type: "DELETE_USER",
        payload: id
      })
  }

  render() {
    // Gelen parametrelerin hepsini this.props.parametre seklinde yazmak cok sıkıntılı
    // bu sebepten ötürü bu props özelligini "Destructing" dedigimiz yapıya dönüstürüyoruz
    const { name, depart, salary} = this.props;
    const { isVisible } = this.state;


    return(
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div className="col-md-8 mb-4">
                <div className="card" style={isVisible ? {backgroundColor: "#3b5249", color: "white"} : null}>
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>
                      {name}
                      <button type="button" className="close" aria-label="Close" onClick={this.onDeleteUser.bind(this,dispatch)}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </h4>
                  </div>
                  {
                    isVisible ? <div className="card-body">
                        <p className="card-text">Depart: {depart}</p>
                        <p className="card-text"> Salary: {salary}</p>
                        <p>{isVisible}</p>
                      </div>: null
                  }  
                </div>
              </div>
            )
          }
        }
      </UserConsumer>
    )
  }
}

User.defaultProps = {
  name: "null",
  depart: "null",
  salary: "null",
  id: "null"
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  depart: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default User;
