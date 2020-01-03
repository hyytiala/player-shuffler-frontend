import axios from 'axios'
const baseUrl = 'https://player-shuffler.herokuapp.com/api/games'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


const create = async (newObject) => {
    const name = {name: 'Peli'}
    const response = await axios.post(baseUrl, name)
    return response.data
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, remove }