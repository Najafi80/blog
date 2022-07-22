<template>
    <div class="Content">
        <div class="row">
            <div v-if="loding">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

           
                
                    <!-- Blog entries-->
                <div class="col-lg-8" v-else>
                    
                    
                    <!-- Featured blog post-->
                    <card :post='posts[0]'/>
                    <!-- Nested row for non-featured blog posts-->
                    <div class="row">
                        <div class="col-lg-6" v-for="(item, index) in posts.slice(1)" :key='index'>
                            <!-- Blog post-->
                            <card v-for="post in item" :key="post.id" :post='post'/>
                        </div>

                    </div>

                <Pagination :correntPage="page.corrent" :totalPage="page.total" @changePage='changePages'/>

            </div>

            
            <Sidebar class="col-lg-4"/>
        

        </div>


    </div>
       
</template>

<script setup>
import { ref , reactive } from 'vue'
import axios from 'axios'
import _ from 'underscore'
import Card from './Card.vue'
import Sidebar from './Sidebar.vue'
import Pagination from './Pagination.vue'


    let posts = ref([])
    let loding = ref(true)
    let page = reactive({
        corrent : 1,
        total : 10
    })

  
    function changePages(pageNumber = 1) {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=9`)
        .then(response => {
            posts.value = response.data
            let mainPost = posts.value.shift()

            posts.value = [mainPost , ..._.chunk(posts.value , 2)]
            loding.value = false
            page.corrent = pageNumber
            page.total = parseInt(parseInt(response.headers['x-total-count'])/9)
             
        })

    }
    
        changePages()

       
</script>

