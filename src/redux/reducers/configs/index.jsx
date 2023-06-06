import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
    name: 'config',
    initialState: {
        navigationMode: 'routes', // routes or monopage
        language: 'PT'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { 
    setLanguage,
} = configSlice.actions

export default configSlice.reducer