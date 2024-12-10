import { categories } from "../data/categories"

export default function Form() {
  return (
    <form action=""
    className="space-y-5 bg-white shadow-md p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label className="text-lg font-semibold" htmlFor="category"> Categoria: </label>
        <select
          name=""
          className="border border-slate-300 p-2 rounded-lg w-full bg-white pr-3"
          id="category"
         >

          {categories.map(categorie => (
            <option 
            value={categorie.id}
            key={categorie.id}
            >
              {categorie.name}
            </option>
          ))}


         </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="text-lg font-semibold" htmlFor="activity"> Actividad: </label>
        <input type="text"
        id="activity"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white pr-3"
        placeholder="Ej. Comida, jugo de naranja, Pesas, Bicicleta"
        
        />

        
      </div>


      <div className="grid grid-cols-1 gap-3">
        <label className="text-lg font-semibold" htmlFor="calorias"> Calorias: </label>
        <input type="number"
        id="calorias"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white pr-3"
        placeholder="Ej. 300 o 500"
        />
      </div>

      <input 
        type="submit" 
        className=" text-white cursor-pointer transition-colors duration-100
      bg-blue-400 p-2 w-full hover:bg-blue-500 rounded-md "
        value="Guardar"
      />
    </form>
  )
}
