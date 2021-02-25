import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        favorites: [
            {
                name: 'Rusty',
                breed: 'shiba',
                img: 'https://images.dog.ceo/breeds/shiba/shiba-13.jpg',
            },
            {
                name: 'Rocco',
                breed: 'boxer',
                img: 'https://images.dog.ceo/breeds/boxer/n02108089_14112.jpg',
            },
            {
                name: 'Zoey',
                breed: 'beagle',
                img: 'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
            },
            {
                name: 'Duke',
                breed: 'doberman',
                img: 'https://images.dog.ceo/breeds/doberman/n02107142_4653.jpg',
            },
            {
                name: 'Lily',
                breed: 'malamute',
                img: 'https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg',
            },
        ]
        
    }
});