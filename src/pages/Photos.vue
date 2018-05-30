<template>
  <div class="section">
    <p v-if="loading" class="notification is-info">
      Loading
    </p>

    <template v-else>
      <h1 class="title">Look at my photos</h1>

      <article v-for="photo in photos" :key="photo.id" class="box has-text-centered">
        <h2 class="title is-3">
          <router-link :to="{name: 'photo', params: {id: photo.id}}">{{ photo.title }}</router-link>
        </h2>
        <div class="content">
          <img :src="photo.thumbnailUrl" :alt="photo.title"/>
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
      photos: null
    };
  },

  created() {
    Api.getPhotos()
      .then(response => {
        this.photos = response.data;
        this.loading = false;
      })
      .catch(() => {
        alert("ERROR");
        this.loading = false;
      });
  }
};
</script>
