<template>
  <v-card color="grey lighten-2">
    <v-img :src="pet.img" height="170px" crossorigin="anonymous"></v-img>
    <v-card-title>
      <div>
        <h3>{{ pet.name }}</h3>
        <p>{{ pet.breed }}</p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import axios from "../plugins/axios";
export default {
    name: "Dog",
    props: {
        pet: { /**aqui es la variable que esta arriba */
            type: Object
        }
    },
    created(){
      axios.get("/breed/"+this.pet.breed+"/images/random")
            .then(res => {
              this.pet.img = res.data.message;
              //console.log(res);
            })
            .catch(error => {
              console.log(error);
            })
    }
};
</script>

<style>
</style>