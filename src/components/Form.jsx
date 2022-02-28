import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputState: "is-invalid",
            passwordState: "is-invalid",
            mail:false,
            pass:false,
            form:"d-block",
            submit:'d-none',
        }
    }

    checkPass = (e) =>{
        if(e.target.value.length > 8){
            this.setState({
                passwordState: "is-valid",
                pass:true
            })
            }
            else{
                this.setState({
                    passwordState: "is-invalid"
                })
    
            }
        }
        checkMail = (e) =>{
            var mail = e.target.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            if(e.target.value.length > 8 && mail){
                this.setState({
                    inputState: "is-valid",
                    mail: true
                })
                }
                else{
                    this.setState({
                        inputState: "is-invalid",
                    })
                }
            }
        submit = (e) => {
            e.preventDefault()
            console.log('gateau')
            if(this.state.pass && this.state.mail){
                this.setState({
                    form:'d-none',
                    submit:'d-block',
                })
            }else{
                this.setState({
                    submit:'none',
                })
            }            
        }
    render(){
        
        return(
            <React.Fragment>
                <h1>Login</h1>
            <form className={this.state.form}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  className={`form-control ${this.state.inputState}`}  onChange={this.checkMail} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.checkPass} type="password"className={`form-control ${this.state.passwordState}`}id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={this.submit} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className={this.state.submit}>
                <p>Form Submitted</p>
            </div>
            </React.Fragment>

        )
    }
}