<template>
  <div id="cardSelect">
    <Card v-for="key in 22" :key="key" :class="{selected:selected.indexOf(key) !== -1}" :style="{right:8*key+'vw'}"
          v-on:click.native="selectCard(key)"></Card>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'select-card',
  data: function () {
    return {
      selected: []
    }
  },
  components: {
    Card
  },
  methods: {
    selectCard: function (id) {
      if (this.selected.indexOf(id) !== -1) {
        this.selected.remove(id)
      } else {
        this.selected.push(id)
      }
      if (this.selected.length === 6) {
        this.$router.push({name: 'Result'})
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  #cardSelect {
    position relative
    display flex
    padding-left 8.5vw
    .card {
      width 200px
      position relative
      top: 0;
      transition all 0.2s
      &:hover,
      &.selected {
        top: -20px
        transition all 0.2s
      }
    }
  }

  @media screen and (min-width: 767px) {
    #cardSelect {
      padding-left 9.5vw
    }
  }
</style>
