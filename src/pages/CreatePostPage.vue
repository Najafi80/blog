<template>
    <div class="CreatePostPage">
        <div class="container my-5">

            <h2 class="text-muted mb-5">createPost</h2>
            
            <form @submit.prevent="sendPost" >
                <div class="mb-3">
                    <label class="form-label">title</label>
                    <input type="text" class="form-control" placeholder="title" v-model="titlePost">
                    <di class="text-danger">{{ inputValid }}</di>
                </div>

                <div class="mb-3">
                    <label  class="form-label">body</label>
                    <textarea class="form-control" placeholder="Write something..." rows="7" v-model="bodyPost"></textarea>
                     <div class="text-danger">{{ textAreaValid }}</div>
                </div>
                <button class="btn btn-primary" type="submit" :disabled="lodingButton">
                    <div v-if="lodingButton" class="spinner-border spinner-border-sm" role="status">
                    </div>   
                    Create
                </button>
          </form>
          
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue' 
import axios from 'axios'
import Swal from 'sweetalert2'

let titlePost = ref('')
let bodyPost = ref('')
let inputValid = ref('')
let textAreaValid = ref('')
let lodingButton = ref(false)


function createPost(){

            lodingButton.value = true
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                    title : titlePost ,
                    body : bodyPost,
                    userId: 1,
                })
                .then(res => {
                    lodingButton.value = false
                    Swal.fire({
                        title: 'thanks !',
                        text: 'Create Post Sucsesfully !',
                        icon: 'success',
                        confirmButtonText: 'ok'
                })
            })

}


function sendPost() {
        console.log(titlePost.value,bodyPost.value)
        if( titlePost.value === '' || bodyPost.value === ''){
            if(titlePost.value === ''){
                inputValid.value = "this is a require"
            }else inputValid.value = ''
            if( bodyPost.value === ''){
                textAreaValid.value = "this is a require"
            }else textAreaValid.value = ''
        }else createPost()
        
}

</script>