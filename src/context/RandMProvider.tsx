import { useReducer, useState } from "react";
import { RandMContext } from "./RandMContext";
import axios from 'axios';


export const RandMProvider = ({ children }: any ) => {
    const [ state, setState ] = useState({});
   
    const findCharacter = async (character: any) => { 
        try {
          

            setState(character)
            return state   
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <RandMContext.Provider
            value={{
                state,
                findCharacter,
            }}
        >
            {children}
        </RandMContext.Provider>

    )
}