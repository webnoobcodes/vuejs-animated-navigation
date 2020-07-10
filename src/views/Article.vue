<template>
  <div class="content">
    <slot />
    <h1>Mood</h1>
    <img src="../assets/mood.jpg" alt="">
    <p>
      In psychology, a mood is a form of pleasant or uncomfortable feeling that forms the background of human experience. The mood depends, among other things, on the overall condition of the individual and their situation. There are also close relationships between drive and mood.
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    position: absolute;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    padding: 16px;
    background-color: #fff;
    transition: .3s all ease-in-out;

    img {
      width: 100%;
      max-width: 600px;
      height: auto;
      margin-bottom: 32px;
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
</style>