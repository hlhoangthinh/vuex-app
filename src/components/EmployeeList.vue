<template>
  <div class="employeeList">
      <table class="styled-table" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Jobs</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="employee in employees" :key="employee.id">
                <td>{{ employee.id }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.jobs }}</td>
                <td>{{ employee.createdAt }}</td>
            </tr>
        </tbody>
      </table>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('employees', ['employees'])
    },
    created(){
        this.$store.dispatch('employees/loadEmployees')
    }
}
</script>

<style>
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.2em;
    font-family: sans-serif;
    /* min-width: 400px; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
    text-align: left;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

</style>