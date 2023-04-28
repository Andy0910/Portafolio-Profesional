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
              <v-btn tile dark class="text-sec mt-8" variant="outlined" @click="scroll('contact')">Contácteme</v-btn>
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
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="../assets/about.svg" max-height="100" class="img-class"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16 about-title">Sobre mí</h5>
              <p class="text-grey about-info">
                Actuario e ingeniero de software
especializado en el análisis de datos,
riesgo, finanzas y resolución de
problemas en áreas relacionadas a la
matemática, programación y
estadísitca.
              </p>
              <v-btn tile dark color="sec" class="mt-4 btn-resume" href="CVEspanol_AndresGonzalez.pdf" target="_blank">
                Descargar Currículum
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" class="padd" style="margin-top:3em">
        <div class="first" id="project">
          <div class="text-center mt-4 title">
            <h2>Habilidades blandas</h2>
          </div>
          <v-row>
            <v-col cols="12" style="margin-top:2em">
              <div class="child">
                <v-btn icon="fas fa-person-chalkboard" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Resolución de problemas</h3>
              </div>
              <div class="child">
                <v-btn icon="fas fa-list-check" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Capacidad de trabajar bajo presión</h3>
              </div>
              <div class="child">
                <v-btn icon="fas fa-users-gear" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Trabajador en equipo</h3>
              </div>
              <div class="child">
                <v-btn icon="fas fa-comment-dots" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Comunicación asertiva</h3>
              </div>
            </v-col>
          </v-row>
          <div class="text-center mt-4 title" style="margin-top:3em !important">
            <h2>Habilidades técnicas</h2>
          </div>
          <v-row>
            <v-col  style="margin-top:2em">
              <div class="child">
                <v-btn icon="fas fa-chart-column" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Análisis de datos con R - Python - SQL</h3>
              </div>
              <div class="child">
                <v-btn icon="fas fa-code" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Desarrollo de software con Java</h3>
              </div>
              <div class="child">
                <v-btn icon="fas fa-laptop" color="sec" class="text-white"></v-btn>
                <h3 class="ml-3 mt4">Desarrollo web con Javascript</h3>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col cols="12" sm="12" id="portfolio" style="margin-top:20em">
        <div class="text-center mt-4 title" style="margin:2rem">
          <h2>Proyectos</h2>
        </div>
        <div class="d-flex justify-center mb-6" style="margin-top:2em !important">
          <h4 class="mr-2 text-sec proy-ttl">Análisis de datos</h4>
        </div>
      </v-col>
      <v-col cols="12" class="imgHover">
        <v-row class="" align="center" justify="center">
          <template v-for="(item,i) in items" :key="i">
            <v-col v-if="item.data " cols="12" md="4">
             <h2 style="font-size:medium;margin-bottom:3rem" class="text-center">{{ item.title }}</h2>
              <v-hover v-slot="{isHovering, props}">
                <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props" >
                  <v-img :src="item.img" max-height="225px" width="100%" cover></v-img>
                  
                </v-card>
              </v-hover>
              <div class="text-center" style="margin-top:2rem">
                <p v-if="item.desc" class="text-grey">
                  {{ item.desc }}
                </p>
              </div>
              <div class="text-center" style="margin-top:2rem">
              <v-btn v-if="item.source" class="mr-2" variant="tonal" :href="item.source" target="_blank" >Leer</v-btn>
            </div>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <div class="d-flex justify-center mb-6"  style="margin-top:3em">
        <h4 class="mr-2 text-sec proy-ttl" >Desarrollo web</h4>
      </div>
      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item,i) in items" :key="i">
            <v-col v-if="!item.data " cols="12" md="4" >
              <v-hover v-slot="{isHovering, props}">
                <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover': isHovering}" v-bind="props">
                  <v-card-title class="text-center">{{ item.title }}</v-card-title>
                  <v-img :src="item.img" height="225px" width="100%" cover></v-img>
                </v-card>
              </v-hover>
              <div class="text-center" style="margin:1rem">
                <v-btn v-if="item.source" class="mr-2" variant="tonal" :href="item.source">Leer</v-btn>
                <p v-if="item.desc" class="text-grey">
                  {{ item.desc }}
                </p>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child">
              <h1>Información de contacto</h1>
              <v-btn icon="fas fa-map-marker-alt" class="mt-10" variant="outlined"></v-btn><br/>
              <span class="text-caption">Moravia, San José, Costa Rica</span><br/>
              <v-btn icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br/>
              <span class="text-caption">(+506) 7106-9006</span><br/>
              <v-btn icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br/>
              <span class="text-caption">andres.gonzalez42@hotmail.com</span><br/>
            </div>
          </v-col>
          <v-col cols="12" sm="8">
            <h1 class="mt-10">Envíame un mensaje</h1>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field label="Nombre" persistent-hint variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Correo electrónico" persistent-hint variant="outlined"></v-text-field>
              </v-col>
            </v-row>
            <v-textarea label="Mensaje" persistent-hint variant="outlined"></v-textarea>
            <v-btn color="sec" class="mt-2">Enviar</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
  setup(){
    return {
      showData: true,
      items: [
        {
          img: "linear_regression.png",
          title: "Características más importantes que determinan el rating de una aplicación móvil",
          source: "https://serengueti.fce.ucr.ac.cr/images/2023/03/16/Articulos/Caracteristicas_Relevantes_Aplicaciones_Moviles.pdf",
          data: true,
          desc: "Utilizar modelos matemáticos como regresión lineal múltiple y árboles de decisión para determinar las características más influyentes en la calificación de una aplicación móvil."
        },
        {
          img: "copula.png",
          title: "Análisis bivariado entre el monto de crédito y probabilidad de elegiblidad",
          source: "AnalisisBivariadoCreditoElegibilidad.pdf",
          data: true,
          desc: "Modelo de clasificación para determinar la probabildad de elegibilidad para un crédito y una vez con esto determinar mediante Cópulas la distribución bivariada entre esta probabilidad y el monto del crédito."
        },
        {
          img: "CRTRAILING.png",
          title: "CR TRAILING",
          data: false,
          desc: "Aplicación web diseñado para amantes del senderismo. Cuenta con una plataforma para reservar actividades y comprar artículos relacionados al senderismo"
        }
      ],
    };
  },
  methods: {
            scroll(refName){
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"});
            }
        },

  components: {
    NavBar,
    FooterView
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
.egg {
  display: block;
  position: relative;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color:rgba(var(--v-theme-sec),0.7);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.egg .img-class{
  width: 85%;
  padding: 300px 50px 0px 50px;
}

.about-title{
  font-size: xx-large;
}
.about-info{
  font-size: large;
  padding-right: 50px;
  padding-top: 50px;
}

.btn-resume{
  margin: 2rem 2rem !important;
}

.first{
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin: 8px;
}

.imgHover{
  padding: 0 200px;
}

.pre{
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}

.hire{
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}

.proy-ttl{
  font-size: x-large;
}

.title{
  font-size: x-large;
}

</style>
