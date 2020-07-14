<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="home">
    <div class="w-100">
      <h1 id="halla">James McKenzie</h1>
      <br>
      <h2>SysAdmin, Programmer, Dog Person</h2>
      <p>
        I am a BIT graduate from Otago Polytechnic with experience in operations,
        systems programming, machine learning, and infrastructure management.
      </p>
      <p>
        At the Otago Polytechnic, I was a key member in the student OP's team,
        and had various experiences maintaining systems. Such experiences were managing 
        SSL certificates, diagnosing hardware faults, and general maintenance of several
        systems used by the other students for their projects.
      </p>
      <a href="https://github.com/lunarised">
      <img src="../../src/assets/GitHub-Mark-64px.png" alt="Find me on Github!">
      </a>
      <a href="https://linkedin.com/in/lunarised"><img src="../../src/assets/linkedin.png" height="64px" width="64px">
      </a>
    </div>
  </section>
</template>
<style scoped>
a img{
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<script>
export default {
  name: "Home",
  data: () => ({
    name: "trento"
  })
};
</script>
