<template>
<!-- cards section -->
					<div class="vignette_fruits">
						<a href="#" >
							<img v-bind:src="pictureUrl">
							<div class="overlay">
                               <span class="title"> {{title}} </span>
                                
								<span>Protein : {{protein}} </span>
								<span>Fat : {{fat}} </span>
								<span>Calories : {{calories}} </span>
								<span>Sugar : {{sugar}} </span>
								
								
							</div>
						</a>
					</div>
<!-- utiliser GRIIIIIIIID !-->
	<!-- end cards section -->
</template>

<script>
    export default {
        name:'SweetestFruits',
		props: ["title", "protein", "fat", "calories","sugar", "pictureUrl"],
	}
</script>

<style>
 

/* -----------------------------------------------------------------------------

# Fruits cards Page Styles

----------------------------------------------------------------------------- */
.overlay {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0px;
	align-items: center;
	opacity: 0;
	transition: opacity ease-out 0.1s ;
}

.overlay:hover {
	opacity: 1;
	transition: opacity ease-in 0.5s ;
}

.vignette_fruits{
	/* width: 23.5%;
	margin-top: 2%; */
	width:100%;
	aspect-ratio: 1;
	padding: 20px;
	box-sizing: border-box;
	background-color:rgb(240, 240, 240);
	position: relative;
	/* display: flex;
	align-items: center;
	justify-content: center; */
}
	
.vignette_fruits img{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: 0.3s;
	height: 50%;
}
					
.vignette_fruits a:hover img{
	opacity: 0.2;
}
					
.vignette_fruits span{
	padding: 0px 0px;
	text-align: center;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	font-size: 20px;
	color: #111;
	text-transform: uppercase;
	opacity: 1;
	transition: 0.3s;
}

.title{
	font-style: normal;
	font-size: 20px;
	font-weight: 700;
	position: relative;
}
.title:after {
	content: "";
	width:100%;
	height: 1px;
	background-color: black;
	position: absolute;
	left:50%;
	transform: translateX(-50%);
	bottom: 4px;
}

/* -----------------------------------------------------------------------------
  
  # RESPONSIVE
  
  ----------------------------------------------------------------------------- */
/* @media all and (max-width: 900px)
{
  .vignette_fruits{
	width: 48.5%;
	}
 
} */
				
</style>