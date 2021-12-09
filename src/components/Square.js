import React, { useState } from "react";
import "./CompStyles.css";


export default class Square extends React.Component {
    constructor(id, num) {
        super(id, num);
        this.props = {
            id: id,
            num: num
        }
        this.myRef = React.createRef("ref"+id);
       
    }
    render(){
        if (this.props.num % 2 === 0){
            return(
                <div className="w-auto h-auto bg-white m-0 box-border flex flex-wrap justify-center align-middle items-center" id={"square-"+this.props.id}>
                    {this.props.id}
                </div>
            );
        }else {
            return(
                <div className="w-auto bg-black h-24 m-0 box-border flex flex-wrap justify-center align-middle items-center text-white" id={"square-"+this.props.id}>
                    {this.props.id}
                </div>
            );
        }
    }
}