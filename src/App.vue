<template>
  <div id="app">
    <star-rating :rating="3.1"></star-rating>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'

export default {
  name: 'app',
  components: {
    StarRating
  }
}
</script>
