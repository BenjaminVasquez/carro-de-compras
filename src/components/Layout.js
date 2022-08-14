import { Component } from "react";

const style= {
    Layout:{
        blackgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        

    },
    container:{
        whidth:'1200px',
    }
}

class Layout extends Component{
    
    render(){
        return (
        <div style={style.Layout}>
            <div style={style.container} >
                {this.props.children}
                
            </div>
        </div>
        )
    }
}
export default Layout