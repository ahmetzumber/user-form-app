import React, { Component } from 'react'

class Test extends Component {

    constructor(props){
        super();
        this.state = {
            a:10
        }
        console.log("constructor");
    }

    // en son calısır component sayfaya yerlesti mount edildi
    // API ıstekleri bunun icinde yapılır
    componentDidMount = () => {
        console.log("componentDidMount");
        this.setState({
            a:20
        });
    }

    // setState islemi, update islemleri oldugunda calisir 
    componentDidUpdate = (prevProps, prevState) => {
        console.log("Update");
    }
    
    // tekrardan renderlama islemini manuel olarak kontrol etmek icin 
    // true ya da false return ederiz
    shouldComponentUpdate = () => {
        console.log("SHOULD UPDATE");
        return true;
    }

    render() {
        console.log("render");
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;