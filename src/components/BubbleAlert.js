import { Component } from "react";

const styles={
        bubbleAlert:{
            blackgroundColor:'#E9725A',
            borderRadius:'15px',
            color:'#black0A283E',
            padding:'2px 10px',
            fontZise:'0.9rem',
            whidth:'20px',
        }
}
class BubbleAlert extends Component{
    getNumer(n){
        if(!n){return ' '}
        return n > 9 ? '9+':n
    }

    render(){
        const {value}=this.props
        return(
            <span style={styles.bubbleAlert}>
               {this.getNumer(value)}
            </span>
        )
    }
}

export default BubbleAlert