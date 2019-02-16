<template>
  <div class="home-page">
    <section class="intro">
      <h1>Latest news</h1>
    </section>
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
  // data() {
  //   return {
  //     loadedPosts: [
       
  //     ]
  //   }
  // },
  created() {
    
  }
}
</script>


<style scoped>
.intro {
  height: 150px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url('~assets/images/background.jpg');
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
