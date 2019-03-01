import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)

      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(
          post=>post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token){
        state.token = token
      },
      clearToken(state) {
        state.token =null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get(`${process.env.baseUrl}/posts.json`)
        .then(res=>{
          const postsArray=[]
          for (const key in res.data) {
            postsArray.push({...res.data[key], id:key})
          }
          vuexContext.commit('setPosts', postsArray)
        })
        .catch(e=>context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post){
        const createdPost =  {...post, updatedDate: new Date()}
        return axios.post(`${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`, 
        createdPost)
        .then(res=>{
          vuexContext.commit('addPost', {...createdPost, id:res.data.name})
        })
        .catch(e=>console.log(e))
      },
      editPost(vuexContext, editedPost){
        return this.$axios.$put(
          `${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`,
           editedPost)
           .then(res=>{
             vuexContext.commit('editPost', editedPost)
            })
           .catch(e=>console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fibAPIKey}`
        if(!authData.isLogin){
          authUrl =`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fibAPIKey}`
        }
        return this.$axios.$post(
          authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
  
          }).then(result=>{
            //Dispatch actions commit mutations
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + result.expiresIn*1000)
            vuexContext.dispatch('setLogoutTimer', result.expiresIn*1000)
          }).catch(e=>console.log(e.response))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(()=>{
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext){
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('tokenExpiration')
        if (new Date().getTime() > +expirationDate || !token) {
          return
        }
        vuexContext.dispatch('setLogoutTimer', +expirationDate -new Date().getTime())
        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token !=null
      }
    }
  })
}

export default createStore