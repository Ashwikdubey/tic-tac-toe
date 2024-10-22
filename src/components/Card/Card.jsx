import Icons from "../Icons/icons"
import "./Card.css"

function Card({player,onPlay,index,gameEnd}){
    return(
        <div className="card" onClick={()=>{!gameEnd&&!player&&onPlay(index)}}>
            <Icons name={player}/>
        </div>
    )
}
export default Card