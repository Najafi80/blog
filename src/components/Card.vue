<template>
  <div class="Card">
    <div class="card mb-4">
        <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
        <div class="card-body">
            <div class="small text-muted">January 1, 2021</div>
            <h2 class="card-title h4">{{prop.post.title}}</h2>
            <p class="card-text">{{prop.post.body}}</p>
            <button class="btn btn-primary" @click="readMore">Read more →</button>
        </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

let prop = defineProps(['post']);

const router = useRouter()

function readMore(){
    router.push({name : 'post', params : { id : prop.post.id }})
}


</script>

