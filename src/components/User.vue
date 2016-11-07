<template>
  <tr>
    <td>
      <input :checked="user.selected" @change="toggleUserSelection" type="checkbox" />
    </td>
    <td>
      <a href="#"><img :src="user.picture" width="32" class="img-circle"></a>
    </td>
    <td class="text-truncate">{{ user.name }}</td>
    <td class="text-truncate">{{ user.email }}</td>
    <td class="text-truncate">Username-Password-Authentication</td>
  </tr>
</template>

<script>
export default {
  name: 'user',
  props: ['user'],
  methods: {
    toggleUserSelection () {
      this.$store.dispatch('toggle_user', this.user)
    }
  }
}
</script>

<style>

</style>
