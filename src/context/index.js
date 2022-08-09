import React,{ Component } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyContext = React.createContext();

class Myprovider extends Component{
    state = {
        stage : 1,
        players: [],
        result:''
    }

    addplayerHandler = (name) => {
        this.setState((prevState)=>({
            players:[
                ...prevState.players,
                name,
            ]
        }))
    }

    removeplayerhandler = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx,1);
        this.setState({
            players: newArray
        });
    }

    nexthandler = () => {
        const { players } = this.state

        if(players.length < 2){
            console.log('error')
            toast.error("you need more than one player",{
                position: toast.POSITION.TOP_LEFT,
                autoClose: 1500
            })
        }else{
            this.setState({
                stage:2
            },()=>{
                setTimeout(()=>{
                    
                    this.generatelooser()
                },2000)
            })
        }
    }

    generatelooser = () => {
        const { players } = this.state;
        this.setState({
            result: players[Math.floor(Math.random()*players.length)]
        })
    }

    resetGame = () => {
        this.setState({
            stage : 1,
        players: [],
        result:''
        })
    }

    render(){
        return(
            <>
            <MyContext.Provider value={{
                state: this.state,
                addplayer : this.addplayerHandler,
                removeplayer:this.removeplayerhandler,
                next: this.nexthandler,
                newlooser : this.generatelooser,
                reset : this.resetGame,
            }}>
                {this.props.children}
            </MyContext.Provider>
            <ToastContainer/>
            </>
        )
    }

}

export {
    MyContext,
    Myprovider
}