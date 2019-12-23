import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas = [...this.state.citas, datos];

    // agregar el nuevo estate
    this.setState({ citas });
  }

  // eliminar citas del state
  eliminarCita = id => {
    // copia del state
    const citasActuales = [...this.state.citas];

    // sacar el elmento con id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    // actualizar el state
    this.setState({citas});
  }
  
  render() {

    return (
      <div className="container">
        <Header 
          title='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}  
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
