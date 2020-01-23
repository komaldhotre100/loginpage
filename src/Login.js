import React, {Component} from 'react';
import './Login.css';

class Login extends Component{

  

  render(){
    return(
        <div className="container" style={{width:400,height:100,position:'absolute',top:'25%',left:'33%'}}>
          <div className="card">
            <div className="card-header text-center"style={{backgroundColor:'lightyellow'}}>
              Login
            </div>
            <div className='card-body >
              <div className='row'>
        
                <input type='text'  className="form-control"placeholder='username' onChange={this.handleFirstNumber}/>
                <br/>

                <input type='password'  className="form-control"placeholder='password' onChange={this.handleFirstNumber}/>
                <br/>
                </div>
                
                <input type='button'  className="btn-success" value='LOGIN'/>
                <br/>
                </div>
                <input type='checkbox' /><label>remember me</label><br/>
                </div>
                <p class="change_link"></p>
                <label> result : {this.state.result} </label>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Login; 