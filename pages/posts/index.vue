<template>
  <div class="posts-page">
    <PostsList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostsList from '@/components/posts/PostsList'

export default {
  components: {
    PostsList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>


<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
