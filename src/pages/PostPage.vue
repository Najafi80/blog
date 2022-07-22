<template>
    <div class="PostPage">
        
        <div class="d-flex justify-content-center m-5 height" v-if="loding">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div class="row m-5 d-flex justify-content-center" v-else>



            <div class="col-lg-6">
                <div class="card mb-4" >
                    <a href="#!">
                    <img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
                    </a>
                        <div class="card-body">
                        <div class="small text-muted">January 1, 2021</div>
                        <h2 class="card-title h4">{{ post.title }}</h2>
                        <p class="card-text">{{ post.body }}</p>
                        <router-link to="/" class="btn btn-primary">back →</router-link>
                </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
let loding = ref(true)

let post = reactive({
    title : '',
    body : ''
})

    function changePages() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(response =>{
            post.title = response.data.title
            post.body = response.data.body
            loding.value = false
        })
    }
    
        changePages()

</script>

<style scoped>

.height{
    height: 100vh !important;    
}


</style>