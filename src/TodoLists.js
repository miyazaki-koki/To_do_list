import React, { Component } from 'react';
import Todo from './todo';

export default class TodoLists extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            cards:[]
        }
    }
    onInput = (e) => {
        this.setState({
          name: e.target.value
        });
      }

    addCard=()=>{
        const {cards,name} = this.state;
        this.setState({
            cards:[...cards,name]
        });
    }

    removeCard=(index)=>{
        const {cards,name} = this.state;

        this.setState({
            cards:[...cards.slice(0,index),...cards.slice(index+1)]
        });
    }

    render(){
        const { cards } = this.state;
        return(
            <div>
            <input type="date" type="date" onInput={this.onInput} />
            <button type="button" onClick={this.addCard} >追加</button>
            <div>
            {cards.map((card,index)=>
                <div className="cards">
                {card}
                <Todo />
                <button type="reset" onClick={()=>{this.removeCard(index)}}>消去</button>
                </div>
                )}
            </div>
            </div>
        );
    }
}