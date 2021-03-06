import React from "react";
import "./style.css";


class Form extends React.Component {

    // const closingForm = () => {
    //    alert("clicked on")
    // }

    // constructor() {
    //     super()
    //     this.state= {
    //         showMe: true
    //     }
    // }

    // Window() {
    //     alert("clicked on")
    // }

    state = {
        toggleButton: false
    };

    closeToggle = () => {
        this.setState({
            toggleButton: true

        })
    }





    render() {
        return (
            <div className="blogBody">


                <form className=" card cardForm">
                    <i className="fas fa-window-close closeWindow" onClick={this.closeToggle}>

                    </i>
                    <div className="form-group">
                        <label className="userEmail" aria-label="Email Address">Email Address</label>
                        <input type="email" aria-label="Email Input" className="form-control userInput" />
                        <p className="emailHelp">We'll never share your email with anyone else.</p>
                    </div>
                    <div className="form-group">
                        <label className=" userEmail" aria-label="password">Password</label>
                        <input type="password" aria-label="password Input" className="form-control userPassword" />
                    </div>
                    <div className="form-check pl-0">
                        <label className="form-check">
                            <input type="checkbox" />Remember Me
                    </label>
                        <button type="submit" className=" btn btn-primary">Submit</button>

                    </div>

                </form>


            </div>
        )
    }
}

export default Form;