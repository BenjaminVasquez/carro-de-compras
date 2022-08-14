import { Component } from "react";
const style={
    logo:{
        fontWeitght:'700',
        fontSize:'3rem',
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={style.logo}>
                Shop
            </div>
        )
    }
}

export default Logo