<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title"> {{ loadedPost.title }}</h1>
      <div class="post-detail">
        <div class="post-details">
          {{loadedPost.updatedDate | date}}
        </div>
        <div class="post-detail">{{loadedPost.author}}</div>
      </div>
      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>What you thinking bout <a href="">Tell me</a></p>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // data(){
  //   return {loadedPost:{}}
  // },
  // created() {
  //   axios.get(`https://blog-5adfe.firebaseio.com/posts/${this.$route.params.id}.json`)
  //     .then(res=> {
  //     this.loadedPost = res.data
  //     console.log(this.$route.params.id)
  //   })
  // }
   asyncData(context) {
    return axios.get(`${process.env.baseUrl}/posts/${context.params.id }.json`)
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
