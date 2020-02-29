<template lang="pug">
  .area
    .places(v-for="(placesRow, rowIndex) in places" :key="rowIndex")
      .place(v-for="(place, placeIndex) in placesRow" :key="placeIndex" :class="{active: place.isFree}" @click="bookTicket(place)")
        b {{place.position}}

</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
