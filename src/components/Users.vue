<template>
  <div class="row">
    <div class="col-xs-12">
      <table class="table table-fixed">
        <thead>
          <tr>
            <th width="5%" data-column="checkbox">
              <input :checked="allSelected" @change="toggleAll" type="checkbox" />
            </th>
            <th width="5%" data-column="picture"></th>
            <th width="30%" data-column="name">Name</th>
            <th width="30%" data-column="email">Email</th>
            <th width="30%" data-column="connections">Connection</th>
          </tr>
        </thead>
        <tbody>
          <user v-for="user in users" :user="user"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from './User.vue'

export default {
  name: 'users',
  props: ['users'],
  components: {
    User
  },
  data() {
    return {
      allSelected: false
    }
  },
  methods: {
    toggleAll (e) {
      this.$store.dispatch('toggle_all_users', this.allSelected)
      this.allSelected = !this.allSelected
    }
  },
}
</script>

<style>
table {
  max-height: 50px;
}
</style>
