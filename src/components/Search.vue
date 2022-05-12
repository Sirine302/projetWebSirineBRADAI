<template>
  <!-- search area -->
                  <div id="cover">
                    
                      <div class="tb">
                        <div class="td">
                          <input type="text" placeholder="Search a fruit" required :value="search" @input="onSearchChanged"/>
                        </div>
                        <div class="td" id="s-cover">
                          <button class="searchButton" type="submit" v-if="search" @click="cleanSearch">
                            <div id="s-circle"></div>
                            <span></span>
                          </button>
                        </div>
                      </div>
                    
                  </div>
                  <!-- end search area -->
</template>

<script>
export default {
	name:'Search',
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

</style>