import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) =>{
          setTimeout(()=>{
            vuexContext.commit('setPosts', [
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
              }])
            resolve()
          },1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore