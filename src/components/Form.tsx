import { useState } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"

export default function Form() {

  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: ''
  })

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value

      // e.target indica el elemento que se está modificando

    })
  }


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
          value={activity.category}
          onChange={handleChange}
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
        <label className="text-lg font-semibold" htmlFor="name"> Actividad: </label>
        <input type="text"
        id="name"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white pr-3"
        placeholder="Ej. Comida, jugo de naranja, Pesas, Bicicleta"
        value={activity.name}
        onChange={handleChange}
        
        />

        
      </div>


      <div className="grid grid-cols-1 gap-3">
        <label className="text-lg font-semibold" htmlFor="calories"> Calorias: </label>
        <input type="number"
        id="calories"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white pr-3"
        placeholder="Ej. 300 o 500"
        value={activity.calories}
        onChange={handleChange}

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
