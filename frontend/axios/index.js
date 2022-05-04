// ✨ implement axiosWithAuth
import axios from 'axios'

export default function axiousWithAuth() {
    const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token,
        }
    })
}