<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'admin',
  // Order is imortant
  middleware: ['check-auth','auth'],
  components: {
    AdminPostForm
  },
  // data() {
  //   return {
  //     loadedPost: {
  //       author: '',
  //       title: '',
  //       content: '',
  //       thumbnail: ''
  //     }
  //   }
  // },
  // created() {
  //   axios.get(`https://blog-5adfe.firebaseio.com/posts/${this.$route.params.postId}.json`)
  //     .then(res=> {
  //     this.loadedPost = res.data
  //   })
  // },
   asyncData(context) {
    return axios
      .get(
        `${process.env.baseUrl}/posts/${context.params.postId}.json`
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
      .then(()=>{
        this.$router.push('/admin')
      })
    }
  }
}
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
