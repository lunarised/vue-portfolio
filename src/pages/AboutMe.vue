<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about-me">
    <div class="w-100">
      <h2>About Me</h2>
      <p>I have been programming quite consistently since I was doing a robotics course
        in highschool, when I had to create a Paper, Scissors, Rock game on a Pickaxe 08M2 chip.
        I feel I did ok on the assignment all things considered, but I decided to put down
        programming until I decided I wanted to try my hand at computer science.
      </p>
      <p> After doing some computer science papers, I found out that I was very interested in 
        both programming, and in linux. I swapped to using Arch Linux on a thinkpad as my
        daily driver, and learnt the operating system until i could install it in 20 mins.
        I also dabbled a litle in Embedded Systems; playing around with Raspberry Pi's and
        Arduinos. I ended up creating a Raspberry Pi radio configuration which ran off MPD. 
        I had to abandon this project however due to some inconsistencies on how the Pi handles
        UTF characters.
        </p>
        <p>
          Currently my best Programming languages are Python and Java, although, the ones that 
          I enjoy programming in the most are Rust, C89 and OCaml. I am very interested in 
          different programming paradigms, specifically in functional programming, and I follow
          the Haskell and Idris scenes, although I am a little too scared to get my feet wet... 
          at the moment anyways
        </p>
        <p> Outside of Programming, I really do enjoy writing and performing Music, which is mostly
          blues and rock, although I do have a strong love for both Jazz and World music. I also
          enjoy reading about linguistics, and learning about different paradigms of languages.
          </p>
    </div>
  </section> 
</template>


<script>
export default {
  name: "about-me",
  data() {
    return {
      name: "trento"
    };
  }
};
</script>
