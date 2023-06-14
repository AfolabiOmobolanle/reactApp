import React,{Component} from 'react'
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component{
  constructor(props){
    super(props)
    this.state= { userName : "Sharafa"
    }
  }
  newName = (e) =>{
    this.setState({
      userName: e.target.value
    })
  }
   

  render () {
    return(
      <div className='App flex flex-col gap-2 justify-center items-center h-screen bg-emerald-200'>
      <UserOutput userName =  {this.state.userName}/>
      <UserInput change = {this.newName}/>
      </div>
   
    )
  }
};


export default App
   