import axios from "axios";
import Places from "./places"


export default {
  name: "sessions",
  data() {
    return {
      movieShows:{},
    };
  },

  mounted() {
    this.getMovieShows();
  },

  props:["movies"],

  methods: {

    getMovieShows() {
      axios
        .get("https://cinema-api-test.herokuapp.com/movieShows")
        .then(response => {
          this.movieShows = response.data;
        })
        .catch(response => {
          console.log(response);
        });

    }
  },

  components: {
    Places
  }
};
