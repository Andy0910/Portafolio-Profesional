<template>
    <v-footer>
        <v-card elevation="0" rounded="0" width="100%" class="bg-prim text-center">
            <v-card-text>

                <v-btn
                class="mx-4"
                icon="fas fa-arrow-up"
                variant="plain"
                color="white"
                @click="scroll('home')"
              ></v-btn>

                <v-btn
                  class="mx-4"
                  icon="fa-brands fa-github"
                  variant="plain"
                  color="white"
                  href="https://github.com/Andy0910"
                  target="_blank"
                ></v-btn>


                <v-btn
                  class="mx-4"
                  icon="fa-brands fa-linkedin"
                  variant="plain"
                  color="white"
                  href="https://www.linkedin.com/in/andrés-gonzález-fallas-8971981b5/"
                  target="_blank"
                ></v-btn>

                <v-btn
                class="mx-4"
                icon="fa-brands fa-whatsapp"
                variant="plain"
                color="white"
                href="https://wa.me/50671069004"
                target="_blank"
              ></v-btn>
     
       
              </v-card-text>
      
              <v-card-text class="text-white">
                @ {{ new Date().getFullYear() }} —
                <strong>Andrés González Fallas</strong>
              </v-card-text>
        </v-card>
    </v-footer>
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
    .v-footer{
        padding: 8px 0 !important;
    }
</style>