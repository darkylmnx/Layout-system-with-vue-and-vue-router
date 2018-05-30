<template>
  <div class="section">
    <p v-if="loading" class="notification is-info">
      Loading
    </p>

    <template v-else>
      <h1 class="title">Welcome to my Stories</h1>

      <article v-for="post in posts" :key="post.id" class="box">
        <h2 class="title is-3">
          <router-link :to="{name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
        </h2>
        <div class="content">
          {{ post.body }}
        </div>
      </article>
    </template>
  </div>
</template>

<script>
import Api from "@/Api";

export default {
  data() {
    return {
      loading: true,
      posts: null
    };
  },

  created() {
    Api.getPosts()
      .then(response => {
        this.posts = response.data;
        this.loading = false;
      })
      .catch(() => {
        alert("ERROR");
        this.loading = false;
      });
  }
};
</script>
