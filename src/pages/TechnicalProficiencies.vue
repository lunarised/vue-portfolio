<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="technical-proficiencies">
    <div class="w-100">
    <h2>Technical Proficiencies</h2>
    <p>I am primarily a Java programmer; having completed most of my personal projects in it, however, I am somewhat flexible in my language capabilities, having a varying range of experience in other languages, including but not limited to</p>
    <ul>
      <li v-for="lang in languages" :key="{lang}">{{lang}}</li>
    </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "LiamMag",
  data: () => ({
    languages: ["Java", "Python", "C++", "C", "C#", "Ruby", "Rust", "Bash"]
  })
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>