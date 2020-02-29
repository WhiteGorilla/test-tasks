<template lang="pug">
  section.movies
    form( @submit.prevent="formSearch" )
      input(type="text")   
      button(type="submit" ) Search


    template(v-if="movies")
      .movie(v-for="(movie, index) in movies" :key="index")
        .poster
          img( v-if="movie.pictureLink" :src="movie.pictureLink" :alt="movie.name")

        .info
          h3 {{movie.name}}
          template( v-if="genres")
          small( v-for="(genreId, index) in movie.genre_id" :key="index") {{genres[index]}}
          p {{movie.description}} 
          i {{movie.dateOfRelease| moment("DD/MM/YYYY H:MM")}}

</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
