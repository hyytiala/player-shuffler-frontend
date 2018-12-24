import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, remove }