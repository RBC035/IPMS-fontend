import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         language: 'Null'
      }
    }

    handlerUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    handlerComment = (e) =>{
        this.setState({
            comments: e.target.value
        })
    }

    handlerLanguage =(e) =>{
        this.setState({
            language: e.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.username} ${this.state.comments} ${this.state.language}`);
        // console.log(this.state.username);
    }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
            <div>
                <label >User name: </label>
                <input type="text" value={this.state.username} onChange={this.handlerUsername}/>
            </div>
            <div>
                <label >Comments: </label>
                <textarea value={this.state.comments} onChange={this.handlerComment}></textarea>
            </div>
            <div>
                <label >Languages: </label>
                <select value={this.state.language} onChange={this.handlerLanguage}>
                    <option value="Null">Seelct language</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <div>
                <button type='submit'>Save data</button>
            </div>
      </form>
    )
  }
}

export default Form