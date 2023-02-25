import { useState, useEffect } from 'react';

export function useFetch(url=""){
    const [ state, setState ] = useState({
        data: undefined,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });

    }

    useEffect(() => {
        getFetch();
    }, []);
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}