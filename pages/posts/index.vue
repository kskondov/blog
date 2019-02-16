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
  asyncData(context, callback){
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
        {
          id: '1',
          title: 'Jump',
          previewText: 'Falling Hell',
          thumbnail: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/10/uncharted-the-lost-legacy-chloe-frazer-adventure-falling-620x349.jpg'
        },
        {
          id: '2',
          title: 'Monster',
          previewText: 'Monstering around',
          thumbnail: 'https://www.bolsamania.com/cine/wp-content/uploads/2018/05/45-600x450.jpg'
        },
        {
          id: '3',
          title: 'Big fella',
          previewText: 'This is one huge mf',
          thumbnail: 'https://icdn7.digitaltrends.com/image/anthem-everything-we-know-720x720.jpg'
        }]
      })
    }, 1500)
  },
}
</script>


<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
