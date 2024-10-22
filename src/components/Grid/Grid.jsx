import { useState } from "react"
import Card from "../Card/Card"
import "./Grid.css"
import isWinner from "../../Helpers/checkIsWinner"

function Grid({cardNumber}){
    const[board,setBoard]=useState(Array(cardNumber).fill(""))
    const[turn,setTurn]=useState(false)
    const[winner,setWinner]=useState(null)

    const onPlayHandler=function(index){
        if(turn===true){
            board[index]="circle"
        }
        else{
            board[index]="cross"
        }
        setBoard([...board])
        const result=isWinner(board,turn?"circle":"cross");
        setTurn(!turn)
        if(result){
            setWinner(result)
        }
    }
    const reset=function(){
        setBoard(Array(cardNumber).fill(""))
        setWinner(null)
        setTurn(false)
    }
    return(
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                   <div className="winner-wrapper">
                   <h1 className="turn-highlight">Winner is {winner}</h1>
                   <button className="reset" onClick={reset}>Reset</button>
                   </div>
                    </>
                )
            }
            <h1 className="turn-highlight">Current Turn:{turn?"circle":"cross"}</h1>
        <div className="grid">
            {board.map((elem,idx)=><Card gameEnd={winner?true:false} onPlay={onPlayHandler} player={elem} index={idx}/>)}
        </div>
        </div>
    )
}
export default Grid