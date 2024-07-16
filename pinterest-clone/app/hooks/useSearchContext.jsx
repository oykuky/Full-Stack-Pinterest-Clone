import {createContext, useContext, useState} from 'react'

const Context = createContext();
export const SearchProvider = ({children}) =>{
    const [search,setSearch] = useState("");
    return(
        <Context.Provider value={{search,setSearch}}>
        {children}
        </Context.Provider >
    )
}

export const useSearchContext =() =>{
    return useContext(Context)
}