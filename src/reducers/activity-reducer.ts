import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity' /*Describe qué está sucediendo, referencia */
    payload: {newActivity:Activity}/*Datos que se van a agregar al state cuando el user haga algo */
}

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions

    ) => {
        //Se puede con switch

        if(action.type === "save-activity"){
            //Este código maneja la lógica para actualizar el state
            

            return {
                ...state, /*Ya que si agregamos otros initial state, queremos esa persistencia de todos */
                activities: [...state.activities, action.payload.newActivity]  // Actualiza la propiedad `activities` con una nueva lista que incluye `newActivity`
            }   
        }

        return state

    }