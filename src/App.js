import React, { useState } from 'react'; //Importa los módulos React y useState desde la biblioteca de React.

export default function PersonaMayor() { //Declaración del componente PersonaMayor
  const [personas, setPersonas] = useState([]); //Define una variable de estado llamada personas que almacena un arreglo vacío inicialmente. setPersonas es una función utilizada para actualizar el valor de personas.
  const [nombre, setNombre] = useState(''); // Define una variable de estado llamada nombre que almacena una cadena vacía inicialmente. setNombre es una función utilizada para actualizar el valor de nombre.
  const [edad, setEdad] = useState(''); //Define una variable de estado llamada edad que almacena una cadena vacía inicialmente. setEdad es una función utilizada para actualizar el valor de edad.
  const [personaMayor, setPersonaMayor] = useState(null); // Define una variable de estado llamada personaMayor que inicialmente se establece como null. setPersonaMayor es una función utilizada para actualizar el valor de personaMayor.

  const agregarPersona = () => { //Declaración de la función agregarPersona

    if (nombre && edad) {// Comprobar si se ha ingresado un nombre y una edad

      const nuevaPersona = { nombre, edad: parseInt(edad) };// Crear un nuevo objeto de persona con el nombre y la edad (convertida a numero entero) ingresados

      setPersonas([...personas, nuevaPersona]);// Agregar la nueva persona al arreglo de personas utilizando el spread operator

      if (!personaMayor || nuevaPersona.edad > personaMayor.edad) {// Verificar si no hay una persona mayor establecida o si la nueva persona es la persona mayor
        setPersonaMayor(nuevaPersona);// Establecer la nueva persona como la persona mayor
      }


      setNombre('');// Restablecer el campo de nombre a una cadena vacía
      setEdad('');// Restablecer el campo de edad a una cadena vacía
    }
  };


  return (
    <div className="container">
      <h2>Personas</h2>
      <ul className="list-group">
        {personas.map((persona, index) => ( //Itera sobre el arreglo 'personas' y genera un elemento <li> por cada persona
          <li key={index} className="list-group-item">{persona.nombre} ({persona.edad} años)</li> //Muestra el nombre y la edad de cada persona
        ))}
      </ul>

      <br />

      <div className="mb-3">
        <input //Campo de entrada de texto para el nombre
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} //Establece el valor del estado nombre con el valor actual del campo de entrada de texto cuando se produce un cambio en dicho campo.
        />

        <br />

        <input //Campo de entrada numérica para la edad
          type="number"
          className="form-control"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(parseInt(e.target.value))} //establece el valor del estado edad con el valor actual del campo de entrada numérico cuando se produce un cambio en dicho campo.
        />

        <br />

        <button className="btn btn-primary" onClick={agregarPersona}>Agregar Persona</button> {/*Crea un botón con el texto "Agregar Persona" y define que la función agregarPersona se ejecutará cuando el botón sea presionado.*/}
      </div>

      <p>Persona más mayor: {personaMayor ? personaMayor.nombre : ''}</p> {/*Muestra el nombre de la persona más mayor*/}
    </div>
  );
};


