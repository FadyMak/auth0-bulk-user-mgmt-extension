<template>
  <div>
    <ext-header />
    <div class="container root-container">
      <div class="row">
        <div class="col-xs-12">
          <form class="js-users-search advanced-search-control">
            <span class="search-area">
              <i class="icon-budicon-489"></i>
              <input v-model="query" class="js-user-input user-input" type="text" placeholder="Search for users" spellcheck="false">
            </span>
            <span class="controls pull-right">
              <button type="reset" @click="clearQuery">
                Reset <i class="icon-budicon-471"></i>
              </button>
            </span>
          </form>
        </div>
      </div>
      <users :users="users" />
      <div id="actions-bar" class="row">
        <div class="col-xs-12">
          <a href="#" class="btn btn-danger pull-right">
            Delete User(s)
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExtHeader from './components/ExtHeader.vue'
import Users from './components/Users.vue'

export default {
  name: 'app',
  beforeCreate () {
    console.log(this.$store)
    this.$store.dispatch('get_users')
  },
  data () {
    return {
      query: ''
    }
  },
  components: {
    Users,
    ExtHeader
  },
  methods: {
    clearQuery() {
      this.query = ''
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    }
  }
}
</script>

<style>
form.js-users-search {
  margin-bottom: 20px;
}

#actions-bar {
  margin-top: 20px;
}
</style>
