import React, { Component } from 'react';
import axios from 'axios';
import '../todo.css'

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          toDoList:[],
        }
    }
    async componentDidMount() {
        const to_do_array = await axios.get('https://panorbit.in/api/todo.json');
        this.setState({ toDoList: to_do_array.data.todo });
    }

    renderIncompleteList = (item, listArray) => {
        return listArray.map((el, index) => {
            if(item.id === el.userId && !el.completed){
                return (
                    <div key={index} className="row task-list">
                        <i style={{fontSize: '30px'}} class="fa fa-square-o" aria-hidden="true"></i>
                        <h3 className="subtext"><span>{el.title}</span></h3>
                    </div>
                )
            }
            return null
        })
    }
    
    renderCompleteList = (item, listArray) => {
        return listArray.map((el, index) => {
            if(item.id === el.userId && el.completed) {
                return (    
                    <div key={index} className="row task-list">
                        <i style={{fontSize: '30px'}} class="fa fa-check-square-o" aria-hidden="true"></i>
                        <h3 className="subtext"><span>{el.title}</span></h3>
                    </div>
                ) 
            }
            return null;
        })
    }
    
    render() {
        const { toDoList } = this.state;
        const { user } = this.props;
        
        return (
            <>
                <main id="to-do">
                    <section className="task-card">
                        <div className="task-header">
                            <h2>ToDo</h2>
                        </div>
                        <div className="task-body">
                            {this.renderIncompleteList(user,toDoList)}
                        </div>
                    </section>
                    <section className="task-card complete">
                        <div className="row task-header">
                            <h2>Completed</h2>
                            <i style={{fontSize: '30px',color:'green'}} className="subtext fa fa-check-circle" aria-hidden="true"></i>

                        </div>
                        <div className="task-body">
                            {this.renderCompleteList(user,toDoList)}
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default ToDo;
