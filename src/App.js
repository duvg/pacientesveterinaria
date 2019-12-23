import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  // eventos de react

  // cuando la aplicacion carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  // al agregar o eliminar  una cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  // eventos personalizados


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
          titulo='Administrador Pacientes Veterinaria'
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
