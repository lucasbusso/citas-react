const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

//Destructuring de paciente
  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  const handleEliminar = () => {
    const respuesta = confirm("¿Está seguro de eliminar este registro?")
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-7 rounded-lg my-10">

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normalcase">    {nombre}    </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {""}
        <span className="font-normal normalcase">    {propietario}    </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="font-normal normalcase">   {email}     </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {""}
        <span className="font-normal normalcase">    {fecha}    </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
        <span className="font-normal normalcase">   {sintomas}     </span>
        </p>
{/* Botones del listado */}
        <div className="mt-5 block lg:flex lg:w-30 lg:justify-end flex-column">
          <button
            type="button"
            className="py-2.5 px-6 border-2 border-solid border-indigo-600 hover:bg-indigo-100 bg-white hover:shadow-md rounded-md uppercase font-semibold text-indigo-600 w-full lg:w-30 "
            onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button
            type="button"
            className="py-3 px-3 bg-red-500 hover:bg-red-600 rounded-md uppercase hover:shadow-md font-semibold text-white lg:ml-5 w-full lg:w-30 mt-4 lg:mt-0"
            onClick={handleEliminar}
          >Eliminar</button>
          
        </div>
      </div>
  )
}

export default Paciente
