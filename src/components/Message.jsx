import Header from "./Header"

export default function Message(){
    function clicker(){
       return <Header/>
       
    }
    return(
        <button onClick={clicker}>Click Here For a message</button>
    )
}