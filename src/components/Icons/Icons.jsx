import { FaCircle, FaPen, FaTimes } from "react-icons/fa"
function Icons({name}){
    if(name==="cross")
        return <FaTimes/>
    else if(name==="circle")
        return <FaCircle/>
    else
    return <FaPen/>
}
export default Icons