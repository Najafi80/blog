<template>
    <div class="Pagination">
        <!-- Pagination-->
        <nav aria-label="Pagination">
            <hr class="my-0" />
            <ul class="pagination justify-content-center my-4">

                <li class="page-item " :class="{'disabled' : isFirstPage }" >
                    <a class="page-link" href="#content" :disabled='isFirstPage' @click="onClick(1)">Newer</a>
                </li>



                <li class="page-item" v-for="page in pages" :key="page.name" :class="{'active' : page.isActive}">
                    <a class="page-link" :disabled='page.isActive' href="#!" @click="onClick(page.name)">
                        {{ page.name }}
                    </a>
                </li>
            
                
                <li class="page-item" :class="{'disabled' : islastPage }">
                    <a class="page-link" 
                    href="#content"
                    :disabled='prop.islastPage'
                    @click="onClick(prop.totalPage)">Older</a>
                </li>

            </ul>

        </nav>

    </div>
</template>

<script setup>
import {computed , defineProps , defineEmits } from 'vue'


   let prop = defineProps({
        correntPage:{
            type : Number,
            require: true
        },
        totalPage:{
            type: Number,
            require: true
        },
        maxButtons: {
            type: Number,
            require: false,
            default: 3
        }

    })

    

        let startPage = computed(()=>{
            if (prop.correntPage <= 4) return 1
            else if (prop.correntPage + 3 > prop.totalPage) return prop.totalPage - 7
            else if (prop.correntPage > 4) return prop.correntPage - 3

        })


        let endpage = computed(()=>{
            if (prop.correntPage - 3 <= 0) return 7
            else return Math.min(prop.correntPage + prop.maxButtons , prop.totalPage)
        })

        let pages = computed(()=>{

            let range = []

            for (let i = startPage.value ; i <= endpage.value ; i++) {
                range.push({
                    name: i,
                    isActive : i == prop.correntPage
                })
                
            }

                return range

        })

        let isFirstPage = computed(()=>{
            return prop.correntPage == 1
        })
        let islastPage =computed(()=>{
            return prop.correntPage == prop.totalPage
        })


        let emit = defineEmits(['changePage'])
    
       function onClick(page) {
           emit('changePage',page)
       }

</script>