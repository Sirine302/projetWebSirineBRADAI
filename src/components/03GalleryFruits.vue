<template>
  <section class="mostFruit">
    <h1 class="titre_seasonal" id="allFruits">TUTTY FRUITS</h1>

    <!-- buttons !-->
    <div class="wrapper">
      <div class="icon all" @click="changeFilterFruits('all')"  id="search">
        <div class="tooltip">ALL</div>
        <span
          ><img src="../assets/img/filterButtons/grape.png" alt=""/></span>
      </div>

      <div class="icon sweet" :value="filterFruits" @click="changeFilterFruits('sweet')" >
        <div class="tooltip">SWEET</div>
        <span
          ><img src="../assets/img/filterButtons/sweet.png" alt=""/></span>
      </div>

      <div class="icon protein" @click="changeFilterFruits('protein')">
        <div class="tooltip">PROTEIN</div>
        <span
          ><img src="../assets/img/filterButtons/protein.png" alt="" id="home"
        /></span>
      </div>
      <div class="icon calories" @click="changeFilterFruits('calories')">
        <div class="tooltip">CALORIES</div>
        <span
          ><img src="../assets/img/filterButtons/calories.png" alt=""/></span>
      </div>
      <div class="icon fat" @click="changeFilterFruits('fats')">
        <div class="tooltip">FATS</div>
        <span
          ><img src="../assets/img/filterButtons/fat.png" alt=""/></span>
      </div>
    </div>
    <!-- END buttons !-->
    <div class="row ligne_vignette_fruits">
    
      <Sweetest-fruits
        v-for="fruits in fruitsFriltres"
        :key="fruits.id"
        :title="fruits.name"
        :protein="fruits.nutritions.protein"
        :fat="fruits.nutritions.fat"
        :calories="fruits.nutritions.calories"
        :sugar="fruits.nutritions.sugar"
        :pictureUrl="familyPicture[fruits.name]"
      />
    </div>
  </section>
</template>

<script>

import getFruitsData from "@/services/api/fruitsRepository.js";
import SweetestFruits from "./FruitsCards.vue";
import imgFruits from "./imgfruits.js";


getFruitsData();

export default {
  components: {
    SweetestFruits,
  },
  /* utilisation d'un observateur pour modifier les données locales */
  watch: {
		filterFruits: function(newFruitsSortType) {
			localStorage.setItem("filterFruits", newFruitsSortType)
		},
	},
  props: {
		search: String,

  },
  data() {
    return {
      fruitsData: [],
      familyPicture: imgFruits,
      filter: "",
      filterFruits: localStorage.getItem("filterFruits") || "",
    };
  },
  created: function () {
    this.retrieveFruitsData();
  },
  methods: {
    async retrieveFruitsData() {
      this.fruitsData = await getFruitsData();
      console.log(this.fruitsData);
    },
    changeFilterFruits(refFruits) {
      this.filterFruits = refFruits;
      console.log(this.filterFruits);
    },
  },
/* trie des fruits */
  computed: {
    fruitsFriltres() {
      const filterFruits = (fruits) => fruits.name.toLowerCase().includes(this.search.toLowerCase());
      let data = this.fruitsData.filter(filterFruits);
      
      switch (this.filterFruits) {
        case "all":
          data = data.filter((fruit) => fruit.nutritions.sugar >= 0);
          break;
        case "sweet":
          data = data.filter((fruit) => fruit.nutritions.sugar > 10);
          break;
        case "protein":
          data = data.filter(
            (fruit) => fruit.nutritions.protein >= 1
          );
          break;
        case "calories":
          data = data.filter(
            (fruit) => fruit.nutritions.calories > 80
          );
          break;
        case "fats":
          data = data.filter(
            (fruit) => fruit.nutritions.fat >= 0.5
          );
          break;
        default:
          data = this.fruitsData.filter(filterFruits);
          break;
      }
      return data
    },
  },
};
</script>

<style scoped>

/* -----------------------------------------------------------------------------

# gallery Page Styles

----------------------------------------------------------------------------- */
.mostFruit {
  background-color: rgba(255, 255, 255, 0.836);
  padding: 200px 0px 200px 0px;
  /* haut | droit | bas | gauche */
}
/* .row {
  display: flex;
  flex-wrap: wrap;
} */
.conteneur {
  width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.ligne_vignette_fruits {
  /* justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.titre_seasonal {
  font-family: "Poppins", sans-serif;
  font-weight: 10000;
  font-size: 11vw;
  line-height: 1em;
  margin: 0 0 7.25rem 0;
  color: #051922;
}

/* buttons */

.wrapper {
  display: inline-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.wrapper .icon {
  position: relative;
  background-color: rgb(238, 238, 238);
  border-radius: 50%;
  padding: 22px;
  margin: 54px;
  width: 45px;
  height: 45px;
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .all:hover,
.wrapper .all:hover .tooltip,
.wrapper .all:hover .tooltip::before {
  background-color: #d170e5;
  color: #ffffff;
}

.wrapper .sweet:hover,
.wrapper .sweet:hover .tooltip,
.wrapper .sweet:hover .tooltip::before {
  background-color: #ff92bf;
  color: #ffffff;
}

.wrapper .protein:hover,
.wrapper .protein:hover .tooltip,
.wrapper .protein:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}

.wrapper .calories:hover,
.wrapper .calories:hover .tooltip,
.wrapper .calories:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .fat:hover,
.wrapper .fat:hover .tooltip,
.wrapper .fat:hover .tooltip::before {
  background-color: #ffe033;
  color: #ffffff;
}

.wrapper .carbohydrates:hover,
.wrapper .carbohydrates:hover .tooltip,
.wrapper .carbohydrates:hover .tooltip::before {
  background-color: #de463b;
  color: #ffffff;
}

@media all and (max-width: 900px)
{
  .ligne_vignette_fruits {
    grid-template-columns: repeat(2, 1fr);
  }
 
}


@media all and (max-width: 500px)
{
  .ligne_vignette_fruits {
    grid-template-columns: repeat(1, 1fr);
  }
 
}
</style>