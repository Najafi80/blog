import { createRouter, createWebHistory } from 'vue-router'

import Home    from '@/pages/HomePage.vue' // !بهتره صفحه اول لیزی لودینگ نباشه 
// const Home = ()=> import('@/pages/HomePage.vue')
const CreatePost = ()=> import('@/pages/CreatePostPage.vue')
const Contact = ()=> import('@/pages/ContactPage.vue')
const Post = ()=> import('@/pages/PostPage.vue')

// import CreatePost   from '@/pages/CreatePostPage.vue'
// import Contact from '@/pages/ContactPage.vue'
// import Post from '@/pages/PostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component: Home
    },
    {
      path : '/createPost',
      name : 'createPost',
      component: CreatePost
    },
    {
      path : '/contact',
      name : 'contact',
      component: Contact
    },
    {
      path : '/posts/:id(\\d+)',
      name : 'post',
      component: Post
    },




  ]
})

export default router
