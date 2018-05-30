<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import FooterBar from "@/components/FooterBar";

export default {
  components: {
    NavBar,
    SideBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>
