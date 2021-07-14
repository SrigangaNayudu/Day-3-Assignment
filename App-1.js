import React,{useState} from 'react'
import Icon from "./Components/Icon"
//impoer react-toastify
import { ToastContainer, toast) } from 'react-toastify';
import 'react-toastify/dist/ReactToastify';
//import reactstrap
import{Button} from 'reactstarp';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"



tiktacArray=new Array(9).fill("A")
const App=() =>{
    let [isCross,setIsCross]==useState(true)
    let[winMessage,setWinMessage]=useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }
    renderSquare(i){
const findWinner=()=>{
      (this.props.findWinnerSquares[0]==i||
        this.props.findWinnerSquares[1]==i||
        this.props.findWinnerSquares[2]==i)
        ? 'square--green'
        : '';
        return(
          <Square
          findWinner={findWinnerClass}
          key={i}
          value={this.propos.squares[i]}
          />
         );
}

  return(
    <div><Icon choice="hehe"/>
    </div>
  )
}
export default App