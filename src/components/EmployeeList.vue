<template>
  <div class="employeeList">
      <div v-for="employee in employees" :key="employee.id">
          <h1>{{ employee.title }}</h1>
      </div>
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

</style>