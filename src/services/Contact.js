import axios from 'axios';
export default class ContactService {
    constructor() {
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        axios.defaults.baseURL = 'http://localhost:8000/api'
    }

    getAll() {
        return axios.get('/contacts');
    }
    addContact(contact) {
        return axios.post('/contacts', contact);
    }
    getId(id) {
        return axios.get('/contacts/' + id);
    }
    delete(id) {
        return axios.delete('/contacts/' + id);
    }
    edit(id, contact) {
        return axios.put('/contacts/' + id, contact);
    }
    login(credentials) {
        return axios.post('/login', credentials);
    }
}

export const contactService = new ContactService(); 