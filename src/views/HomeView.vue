<script setup>
import Navbar from '../components/Navbar.vue'

</script>

<template>
    <main>
      <div class="bg-home"></div>
      <Navbar/>

      <div class="container justify-content-center">
        <div class="row pt-5 pt-sm-5 p-md-0 p-lg-5 mt-5 m-md-5 mt-sm-0 m-lg-5">
          <div class="col-12 col-md-6">
            <img src="../assets/img/book-cover.jpg" alt="" class="w-100">
          </div>
          <div class="col-12 col-md-6 justify-content-center align-items-center">
            <div class="content-heading">
              <h1 class="heading">Lorem ipsum dolor sit amet.</h1>
              <p class="paragraf">14, juli 2004</p>
              <div class="icon-click d-flex">
                <div class="icon me-4">
                  <i class="fa-solid fa-share-from-square"></i>
                </div>
                <div class="icon me-4">
                  <i class="fa-solid fa-share-from-square"></i>
                </div>
                <div class="icon me-4">
                  <i class="fa-solid fa-share-from-square"></i>
                </div>
              </div>
              <p class="paragraf mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, blanditiis!</p>
            </div>
            <div class="content-button d-flex mt-5">
              <a href="">
                <p>Baca Sekarang</p>
              </a>
              <a href="">
                <p>Baca Sekarang</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>
