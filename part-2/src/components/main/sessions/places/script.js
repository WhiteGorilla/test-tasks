import axios from "axios";

export default {
  name: "places",
  data() {
    return {
    };
  },

  props: ["places", "sessionId"],

  mounted() {
  },

  methods: {
    bookTicket(place ) {
      // console.log(place, index);

      axios
        .post("https://cinema-api-test.herokuapp.com/bookingPlace", {
            movieShow_id : this.sessionId,
            row_id : place._id,
            place_position : place.position,
            isFree : place.isFree
          }
        )
        .then(response => {
          alert(response.data);
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
