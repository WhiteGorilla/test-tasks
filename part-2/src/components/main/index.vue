<template lang="pug">
  .main-page
    .container
      nav
        .nav-link(@click="switcher = true" :class="{active: switcher}") Movies
        .nav-link(@click="switcher = false" :class="{active: !switcher}") Sessions

      Movies(v-show="switcher" :movies="movies" :genres="genres")
      Sessions(v-show="!switcher" :movies="movies")

</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
