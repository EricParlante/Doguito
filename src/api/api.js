import axios from "axios"

export const api = axios.create({ //Peticiones que van al localhost 5000
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => { 
    const respuesta = await api.get(url)
    setData(respuesta.data)
}