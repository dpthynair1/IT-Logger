import {GET_TECHS,ADD_TECH,SET_LOADING, TECHS_ERROR, DELETE_LOG, DELETE_TECH} from './types'

// Get techs from server

export const getTechs = () => async dispatch => {

    try {
        setLoading()

       const res = await fetch('/techs') 
       const data = await res.json()
       dispatch({
           type: GET_TECHS,
           payload: data
       })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }

}

// Add techs

export const addTech = tech => async dispatch => {
    try {
        setLoading()
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        })
const data= res.json()
        dispatch({
            type: ADD_TECH,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}

// Delete Tech

export const deleteTech = (id) => async dispatch =>{
    try {
        await fetch(`/techs/${id}`, {
            method: 'DELETE',
    })
    dispatch({
        type: DELETE_TECH,
        payload: id
    })
    } catch (error) {
        
    }
}


// Set loading to true

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

