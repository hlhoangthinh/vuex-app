import axios from 'axios'
const employees = { 
    namespaced: true,
    state: {
        employees: []
    },
    mutations: {
        SET_EMPLOYEES(state, data) {
            state.employees = data
        }
    },
    actions: {
        loadEmployees({commit}) {
            axios
                .get('https://6111e675c38a0900171f1319.mockapi.io/Employee')
                .then(res => {
                    commit('SET_EMPLOYEES', res.data)
                })
                .catch(error => console.log(error))
        }
    }
}

export default employees