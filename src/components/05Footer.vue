<template>
  <div class="footer-basic" id="about">
        <footer>
            <div class="social">
                <a href="#"><img src="../assets/img/footer/lol1.png" alt=""/></a>
                <a href="#"><img src="../assets/img/footer/lol2.png" alt=""/></a>
                <a href="#"><img src="../assets/img/footer/lol3.png" alt=""/></a>
                <a href="#"><img src="../assets/img/footer/lol4.png" alt=""/></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#home">Home</a></li>
                <li class="list-inline-item"><a href="#allFruits">All Fruits</a></li>
                <li class="list-inline-item"><a href="#about">About</a></li>
            </ul>
            <p class="copyright">Sirine BRADAI © 2022 Projet programmation Web 😎 </p>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    .footer-basic {
  padding:70px 0;
  background-color:#ffffff;
  color:#4b4c4d;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:50px;
  height:50px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:18px;
  color:#aaa;
  margin-bottom:0;
}
</style>