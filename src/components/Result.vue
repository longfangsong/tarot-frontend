<template>
  <div>
    <ul>
      <li>你觉得这是一个时代的终结，或者至少是你生命中某个阶段的结束这个结局不是为了遗憾而是为了欣喜。很快你会享受过去的努力带来的回报。和任何结局一样，许多机会都会呈现出来，你所做出的选择将会产生深远的影响，从而可能会戏剧性地改变你的生活。</li>
      <li>这些卡片表明，你现在最想要的是要揭示一个秘密走进去，听听你内心的微小声音和直觉。高阶女祭司的出现告诉你，神圣女性的力量与你同在</li>
      <li>你害怕你的世界正在崩溃：你正在经历突然的变化和中断，你不知道该怎么做。也许下意识地你想要一个问题的解决方案，但并不期望事情会变成现实。把这个改变作为一个新的开始的机会。</li>
      <li>一个愿望成真，这是一个好运和幸运的时代，也许经过一段时间的斗争和心痛。身体健康，可能在生病之后，幸运将会给你一种新的生活乐趣。如果考虑到新的恋情，新的工作，职业变化，或者你想旅行，那就去做吧。您也可能会收到意想不到的礼物！</li>
      <li>生活看起来很忙碌，充满挑战，你会发现很难对事物有正确的看法。你可能在爱情或工作上有对手。想想关系或工作是否真的适合你。这是一个冷静和耐心的时候，生活很快就会恢复正常。</li>
      <li>这对你来说是一个转型时期。然而，你生活中的一些事件可能会动荡不安，或者令人痛心，但结局总是会为全新的开始留下空间。这对你来说是一个新的开始，拥抱它并且每天都过着生活，就好像它是你生命中的最后一幕一样！</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'result',
  created: function () {
    axios.post('http://47.94.239.198/webtest/tarot/tarot_beta.php', {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      'Submit': 'submit'
    }).then(function (response) {
      console.log(response)
    })
  }
}
</script>

<style scoped>
  ul {
    margin-top: -40pt;
  }
  li {
    position: relative;
    color: #FFF;
    font-size: 9pt;
    margin-bottom: 10px;
    list-style: none;
  }
  @media screen and (min-width: 767px) {
    li {
      font-size: 10pt;
    }
  }
</style>
