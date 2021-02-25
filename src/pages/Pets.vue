<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <app-dog :pet="pet"></app-dog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Dogs } from "../data/dogs";
import Dog from "../components/Dog";
import axios from "../plugins/axios";

export default {
  name: "Pets",
  components: {
    appDog: Dog,
  },
  data() {
    return {
      dogs: Dogs,
    };
  },
  created() { /**lo que va a correr cuando se cree este componente */
    axios.get("/breed/" + this.pet.breed + "/images/random")
      .then(res=> {
        //const husky = this.pet.find( dog => dog.breed === "husky");
        this.pet.img = res.data.message;
        //console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>