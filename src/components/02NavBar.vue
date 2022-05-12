<template>
  <div class="top-header-area" id="sticker">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 text-center">
              <div class="main-menu-wrap">
                <!-- logo -->
                <div class="site-logo">
                  <a href="index.html">
                    <img src="@/assets/img/logo1.1.png" alt=""/>
                  </a>
                </div>
                <!-- logo -->

                <!-- menu start -->
                <label for="toggle"> ☰ </label>
                <input type="checkbox" id="toggle">
                <nav class="main-menu">
                  <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#allFruits">ALL FRUITS</a></li>
                    <li><a href="#about">ABOUT</a></li>
                  </ul>
                </nav>
                <!-- menu end -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end header -->
</template>

<script>
    export default {
	name:'NavBar'
	}
</script>

<style>
 /* -----------------------------------------------------------------------------
  
  # fixer le menu
  
  ----------------------------------------------------------------------------- */
.main-menu-wrap {
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  background-color: #021017;
}

  
  /* -----------------------------------------------------------------------------
  
  # Header Styles
  
  ----------------------------------------------------------------------------- */
  ul.navbar-nav li.nav-item a.nav-link,
  ul.navbar-nav li.nav-item.active a.nav-link {
    color: #051922;
  }
  
  .top-header-area {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 999;
    width: 100%;
    background-color: #051922a9;
  }
  
  .top-header-area.white ul.navbar-nav li.nav-item a.nav-link,
  .top-header-area.white ul.navbar-nav li.nav-item.active a.nav-link {
    color: #fff;
  }
  
  ul.navbar-nav li.nav-item a.nav-link,
  ul.navbar-nav li.nav-item.active a.nav-link {
    color: #fff;
    font-weight: 700;
    margin-right: 140px;
  }
  
  a.navbar-brand img {
    max-width: 150px;
  }
  
  nav.main-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
		display: flex;
		flex-wrap:wrap;
		align-items: stretch;
  }
  
  nav.main-menu ul li {
    display: inline-block;
    flex-grow:1;
		text-align: center;
		padding: 5px 0px;
  }
  
  nav.main-menu ul li a {
    color: #fff;
    font-weight: 700;
    display: block;
    padding: 15px;
  }
  
  .site-logo {
    float: left;
    max-width: 180px;
  }

  .site-logo {
    padding: 8px 40px;
  }
  
  nav.main-menu li:hover > a {
    color: #3bff14;
  }
  
  .sticky-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999 !important;
  }
  
  .sticky-wrapper.is-sticky .top-header-area {
    background-color: #051922;
    padding: 15px 0;
  }
  
  .top-header-area {
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  
  ul.navbar-nav {
    margin: 0 auto;
  }
  
  a.mobile-show {
    display: none;
  }
  
</style>