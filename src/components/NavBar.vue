<template>
 <v-app-bar app color="prim" dark flat class="px-14 bar">

    <v-img class="mx-2" src="../assets/Logo.png" max-height="150" max-width="180" contain v-on:click="scroll('home')" cursor></v-img> 

    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="text-sec text-nav" >Inicio</v-btn>
    <v-btn text @click="scroll('about')" class="text-nav">Sobre mí</v-btn>
    <v-btn text @click="scroll('portfolio')" class="text-nav">Proyectos</v-btn>
    <v-btn text @click="scroll('contact')" class="text-nav">Contacto</v-btn>
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

.text-nav{
    text-transform: capitalize;
    font-size: medium;
}

</style>