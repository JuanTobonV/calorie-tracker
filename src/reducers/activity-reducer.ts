import { Activity } from "../types"

export type ActivityActions = 
    {
    type: 'save-activity' /*Describe qué está sucediendo, referencia */
    payload: {newActivity:Activity}/*Datos que se van a agregar al state cuando el user haga algo */
    } 
    | { type: 'set-activeId', payload: {id:Activity['id']} }

export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ""
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

        if(action.type === "set-activeId"){
            return{
                ...state,
                activeId:action.payload.id
            }
        }

        return state

    }