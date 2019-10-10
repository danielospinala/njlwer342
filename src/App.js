import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     tarea:"",
     lista:[]

   }
   this.updateTarea = this.updateTarea.bind(this);
      this.keyPress = this.keyPress.bind(this);
  };

  updateTarea(event) {
this.setState({tarea: event.target.value});
}
keyPress(event){
if (event.key === 'Enter') {

  this.setState({
    lista: this.state.lista.concat([this.state.tarea]),
    tarea:""
  })
  event.preventDefault();
}
    //  event.key === 'Enter' ? event.preventDefault(): console.log("no")
         // put the login here

      }



  render() {

    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
          {this.state.lista.map(tareas => {
          return <li key={`tareas_${tareas}`}>{tareas}</li>;}
        )}
          </ul>

           <form>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.tarea}
              onChange={this.updateTarea}
              onKeyPress={this.keyPress}/>
           </form>

        </div>
      </div>
    )
  }
  //

}


export default App;
