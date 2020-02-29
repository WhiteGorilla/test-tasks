import Vue from "vue";
import axios from "axios";
import Movies from "./movies"
import Sessions from "./sessions"

Vue.use(require("vue-moment"));

export default {
  name: "main-page",
  data() {
    return {
      genres: ["ACTION", "ADVENTURES", "COMEDY", "DRAMA", "HORROR", "WESTERNS"],
      movies: {},
      switcher: true
    };
  },

  mounted() {
    this.getMovies();
  },

  methods: {
    getMovies() {
      axios
        .get("https://cinema-api-test.herokuapp.com/movies")
        .then(response => {
            this.movies = response.data;
        })
        .catch(response => {
            console.log(response);
        });
    }
  },

  components: {
    Movies,
    Sessions
  }
};
