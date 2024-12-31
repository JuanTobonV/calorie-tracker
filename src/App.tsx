import { useReducer } from "react"

import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-blue-400 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className=" text-center text-lg font-medium text-white uppercase pl-2" >
            Contador de Calorias
          </h1>
          <button className="bg-blue-600 opacity-65 rounded-lg p-2 text-white font-medium mr-2">Reiniciar APP</button>
        </div>


      </header>

      <section className="py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <Form
                dispatch = {dispatch}
            />
          </div>
         
      </section>

      <section className="p-10 mx-auto max-w-4xl">
          <ActivityList
            activities={state.activities}
          
          />
      </section>


      
    </>
  )
}

export default App
