import React from "react";

export default class Square extends React.Component {
    constructor(num) {
        super(num);
        this.props = {
            num: num
        }
    }
    render(){
        if (this.props.num % 2 === 0){
            return(
                <div className="w-5 h-5 bg-black"></div>
            );
        }else {
            return(
                <div className="w-5 h-5 bg-white"></div>
            );
        }
    }
}