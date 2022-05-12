<template>
   <!-- hero area -->
      <div class="hero-area hero-bg" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 offset-lg-2 text-center">
              <div class="hero-text">
                <div class="hero-text-tablecell">
                  <p class="subtitle">Feelin’ coco-nutty</p>
                  <img src="@/assets/img/logo1.1.png" class="hero-img" alt="" />
                  <!-- search area -->
                  <div id="cover">
                    
                      <div class="tb">
                        <div class="td">
                          <input type="text" :value="search" @input="onSearchChanged" placeholder="Search a fruit"/>
                        </div>
                        <div class="td" id="s-cover">
                          <button class="searchButton" href="#search" @click="scroll(item.id)">
                            <div id="s-circle"></div>
                            <span></span>
                          </button>
                        </div>
                      </div>
                    
                  </div>
                  <!-- end search area -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end hero area -->
</template>

<script>
    export default {
	name:'Home',
  props: {
		search: String
  },
	watch: {
		search: function(newSearch) {
      localStorage.setItem("search", newSearch)
		},
	},
	methods: {
		cleanSearch: function() {
			this.$emit('update:search', "")
		},
		onSearchChanged(event) {
			this.$emit('update:search', event.target.value)
		},
	}
}
</script>

<style>
/* -----------------------------------------------------------------------------
  
  # Hero Styles
  
  ----------------------------------------------------------------------------- */
  .hero-img {
    width: 800px;
    margin-top: 5px;
    margin-bottom: 25px;
  }
  
  .hero-text {
    display: table;
    height: 100%;
  }
  
  .hero-text-tablecell {
    display: table-cell;
  }
  
  .hero-area {
    height: 100%;
    position: relative;
    z-index: 1;
    margin-top: 50vh;
    transform: translateY(-50%);
  }
  
  .hero-text p.subtitle {
    color: #93ff18;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 7px;
    font-size: 15px;
  }
  
  .hero-text h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.3;
    color: #fff;
  }
  
  .hero-area div {
    height: 100%;
  }
  
  .hero-area div.hero-text {
    height: 100%;
    width: 100%;
  }
  
  .hero-area div.hero-text-tablecell {
    height: auto;
    vertical-align: middle;
  }
  
  .hero-area div.hero-text-tablecell div {
    height: auto;
    vertical-align: middle;
  }
  
  /* -----------------------------------------------------------------------------

# Search Bar style

----------------------------------------------------------------------------- */

* {
    outline: none;
  }
  
  .tb {
    display: table;
    width: 100%;
  }
  
  .td {
    display: table-cell;
    vertical-align: middle;
  }
  
  input {
    color: rgb(61, 70, 37);
    font-family: Nunito;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
  }

  .searchButton {
  color: rgb(61, 70, 37);
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  }
  
  #cover {
    margin: 0 auto 0 auto;
    padding: 10px 40px;
    background-color: #fcffe2c4;
    border-radius: 70px;
    box-shadow: 0 100px 400px #b6ffbc, 0 0 0 10px #ffffffeb;
    transform: scale(0.6);
  }
  
  form {
    height: 105px;
  }
  
  input[type="text"] {
    width: 100%;
    height: 60px;
    font-size: 60px;
    line-height: 1;
  }
  
  input[type="text"]::placeholder {
    color: #56634a;
  }
  
  #s-cover {
    width: 1px;
    padding-left: 35px;
  }
  
.searchButton {
    position: relative;
    display: block;
    width: 84px;
    height: 96px;
    cursor: pointer;
  }
  
  #s-circle {
    position: relative;
    top: -8px;
    left: 0;
    width: 43px;
    height: 43px;
    margin-top: 0;
    border-width: 15px;
    border: 7px solid rgb(76, 92, 72);
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
  }
  
.searchButton span {
    position: absolute;
    top: 68px;
    left: 43px;
    display: block;
    width: 45px;
    height: 15px;
    background-color: transparent;
    border-radius: 10px;
    transform: rotateZ(52deg);
    transition: 0.5s ease all;
  }
  
.searchButton span:before,
  .searchButton span:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 47px;
    height: 8px;
    background-color: rgb(76, 92, 72);
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }
  
  #s-cover:hover #s-circle {
    top: -1px;
    width: 60px;
    height: 10px;
    border-width: 0;
    background-color: rgb(76, 92, 72);
    border-radius: 20px;
  }
  
  #s-cover:hover span {
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -9px;
    transform: rotateZ(0);
  }
  
  #s-cover:hover .searchButton span:before {
    bottom: 11px;
    transform: rotateZ(52deg);
  }
  
  #s-cover:hover .searchButton span:after {
    bottom: -11px;
    transform: rotateZ(-52deg);
  }
  #s-cover:hover .searchButton span:before,
  #s-cover:hover .searchButton span:after {
    right: -6px;
    width: 40px;
    background-color: rgb(76, 92, 72);
  }
  
</style>