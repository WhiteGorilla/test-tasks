<template lang="pug">
  section
    .wrap
      .session(v-for="(session, index) in movieShows" :key="index")

        .session-info
          //- .id {{session._id}}
          .time Date: {{session.startTime | moment("DD/MM/YYYY H:MM")}}
          .price Price:
            b  {{session.ticketPrice}}$

        Places( :places="session.places" :sessionId="session._id")
         
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
