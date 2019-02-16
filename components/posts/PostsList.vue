<template>
       <section class="posts-list">
      <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
      />
      <!-- <PostPreview
      https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/10/uncharted-the-lost-legacy-chloe-frazer-adventure-falling-620x349.jpg
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.bolsamania.com/cine/wp-content/uploads/2018/05/45-600x450.jpg"
      title="Monster"
      previewText="Monstering around"
      />
      <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://icdn7.digitaltrends.com/image/anthem-everything-we-know-720x720.jpg"
      title="Big fella"
      previewText="This is a huge mf"
      /> -->
    </section>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin:{
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
