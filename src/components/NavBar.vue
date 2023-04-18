<template>
 <v-app-bar app color="prim" dark flat class="px-14 bar">

    <v-img class="mx-2" src="../assets/Logo.png" max-height="150" max-width="180" contain v-on:click="scroll('home')" cursor></v-img> 

    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="text-sec">Inicio</v-btn>
    <v-btn text @click="scroll('about')" >Sobre mí</v-btn>
    <v-btn text @click="scroll('portfolio')" >Proyectos</v-btn>
    <v-btn text @click="scroll('contact')" >Contacto</v-btn>
 </v-app-bar>
</template>

<script>
    export default {
        methods: {
            scroll(refName){
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"});
            }
        }
    }
</script>

<style>
.bar{
    padding:20px;
}

</style>