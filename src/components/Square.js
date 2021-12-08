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
                <div className="w-auto h-auto bg-white m-0 box-border"></div>
            );
        }else {
            return(
                <div className="w-auto bg-black h-24 m-0 box-border" ></div>
            );
        }
    }
}