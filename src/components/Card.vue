<template>
  <div class="card">
    <img src="../../static/images/background-card.png"/>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style scoped lang="stylus">
  .card > img {
    width 11vw
    border-radius 8px
  }

  .card {
    border-radius 8px
  }

  @media screen and (min-width: 768px) {
    .card > img {
      width 10vw
      border-radius 8px
    }
  }
</style>
