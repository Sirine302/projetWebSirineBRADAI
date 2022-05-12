<template>
  <div>
    <!-- Stars background animation !-->
     <section class="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>

    <!-- Components !-->
    <NavBar/>
    <Home :search.sync="search"/>
    <galleryFruits :search="search"/>
    <Footer/>
  </div>
</template>


<script>
import NavBar from './components/02NavBar.vue'
import Home from './components/01Home.vue'
import galleryFruits from './components/03GalleryFruits.vue'
import Footer from './components/05Footer.vue'

export default {
  components: {
    NavBar,
    Home,
    galleryFruits,
    Footer,
  },
  watch: {
    search: function(newValue) {
      console.log(newValue);
    }
  },
  data() {
    return {
			search: localStorage.getItem("search") || "",
    }
  },
  // ...
}
</script>

<style scoped>
/* Le fichier css génèral se situe dans assets/css/main.css et est importé depuis le fichier main.js */
.spacing {
  margin-top: 100px;
}
</style>