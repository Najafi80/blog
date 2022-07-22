<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">Start Bootstrap</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><router-link :to="{ path:'/'}" class="nav-link">Home</router-link></li>
                        <li class="nav-item"><router-link :to="{ path:'/createPost' }" class="nav-link">
                        Create Post
                        </router-link></li>
                        <li class="nav-item"><router-link :to="{ path:'/contact'}" class="nav-link">Contact</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>

  </div>
</template>

<style>

.router-link-active{
    color: #fff !important;
}

</style>
