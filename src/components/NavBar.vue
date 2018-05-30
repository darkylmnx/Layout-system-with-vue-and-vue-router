<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <div class="navbar-item" href="/">
        Vue multi layouts
      </div>

      <a class="navbar-burger" @click="open = !open">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': open}">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link class="button is-primary" :to="{name: 'about'}" @click.native="open = fasle">
            About
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link class="button is-primary" to="/" @click.native="open = fasle">
            Posts
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link class="button is-primary" :to="{name: 'photos'}" @click.native="open = fasle">
            Photos
          </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-info" href="https://itnext.io/@arieldi" @click="open = fasle">
            @darkylmnx
          </a>
        </div>
        <div class="navbar-item">
          <a class="button is-info" href="https://foreignrap.com/" @click="open = fasle">
            Foreignrap
          </a>
        </div>
        <div class="navbar-item">
          <a class="button is-info" href="http://mustsee.earth" @click="open = fasle">
            Like traveling ? Click
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
