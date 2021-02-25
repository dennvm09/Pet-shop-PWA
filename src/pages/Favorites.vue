<template>
  <div>
      <v-list>
          <v-subheader v-if="!favorites.length">Your favorites list is empty</v-subheader>
          <div v-else>
              <v-subheader>My Favorites</v-subheader>
              <v-list-item v-for="(dog, index) in favorites" :key ="index">
                  <v-list-item-avatar>
                      <img :src="dog.img" alt="samoyed">
                  </v-list-item-avatar>
                  <v-list-item-content>{{dog.name}}</v-list-item-content>
                  <v-list-item-action>
                      <v-icon>delete</v-icon>
                  </v-list-item-action>
              </v-list-item>
          </div>
      </v-list>
  </div>
</template>

<script>
export default {
    computed : {/**propiedad para poner variales que son calculadas, las puedo calcular con elementos del mismo componente */
        favorites() {
            return this.$store.state.favorites; /** $store sale por la variable que tenemos en main */
        }
    }    
}
</script>

<style>

</style>