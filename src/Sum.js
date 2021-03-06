import React, {Component} from 'react';
import './Sum.css';

class Sum extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      result: 0
    };
  }

  handleFirstNumber = event => {
    this.setState({
      first: Number(event.target.value)
    });
  };

  handleSecondNumber = event => {
    this.setState({
      second: Number(event.target.value)
    });
  };

  hanndleClick = () => {
    let x = this.state.first + this.state.second;
    this.setState({
      result: x
    });
  };
  hanndlesubClick = () => {
    let x = this.state.first - this.state.second;
    this.setState({
      result: x
    });
  };
  hanndlemultClick = () => {
    let x = this.state.first * this.state.second;
    this.setState({
      result: x
    });
  };
  hanndledivClick = () => {
    let x = this.state.first / this.state.second;
    this.setState({
      result: x
    });
  };

  render(){
    return(
        <div className="container">
          <div className="card">
            <div className="card-header text-center">
              calculator
            </div>
            <div className='card-body text-center'>
              <div className='row'>
                <label>First Number : </label>
                <input type='number' step = "0.01" className="form-control" onChange={this.handleFirstNumber}/>
                <br/>
                <label>Second Number : </label>
                <input type='number' step = "0.01" className="form-control" onChange={this.handleSecondNumber}/>
                <br/>
                <input type='button' value='Add' className="form-control btn-primary" onClick={this.hanndleClick}/>
                <input type='button' value='sub' className="form-control btn-primary" onClick={this.hanndlesubClick}/>
                <input type='button' value='mult' className="form-control btn-primary" onClick={this.hanndlemultClick}/>
                <input type='button' value='div' className="form-control btn-primary" onClick={this.hanndledivClick}/>
                <br/>
                <label> result : {this.state.result} </label>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Sum; 