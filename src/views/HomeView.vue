<template>
  <v-app id="home">
    <NavBar/>
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position:relative" class="mt-16">
              <h1 class="text-grey">
                Hola,
              </h1>
              <h1 class="text-white">
                Soy Andrés González
              </h1>
              <span class="text-grey">Actuario e Ingeniero de Software</span><br />
              <v-btn tile dark class="text-sec mt-8" variant="outlined">Contácteme</v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div style="position:absolute;z-index:9999;bottom:0;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center">
              <v-icon color="sec">fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index:9999;" class="mt-16">
              <v-img src="../assets/data.svg" contain max-height="200"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="../assets/about.svg" max-height="200" contain></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar
  },
});
</script>

<style scoped>
.v-container{
  padding: 40px 0;
  
}

.head {
  position: relative; 
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: rgb(var(--v-theme-prim));
  transform: skew(0deg,6deg);
}

.head::after{
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: rgb(var(--v-theme-prim));
  transform: skew(0deg,-6deg);
}
.egg{
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: rgba(var(--v-theme-sec),0.7);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
}

</style>
