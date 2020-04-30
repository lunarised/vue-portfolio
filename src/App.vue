<template>
  <div id="app">
    <NavBar/>
    <Home/>
    <technical-proficiencies/>
    <AboutMe/>
    <Projects/>
  </div>
  
</template>

<script>
import Home from './pages/Home.vue'
import TechnicalProficiencies from './pages/TechnicalProficiencies.vue'
import NavBar from './components/NavBar.vue'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
export default{
  name: 'App',
  components: {
    NavBar,
    Home,
    TechnicalProficiencies,
    AboutMe,
    Projects
  }
}

</script>


<style>
* {
  margin: 0;
}


body {
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  padding-top: 54px;
  color: #868e96;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2rem;
}

@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}
@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }

  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

p.lead {
  font-size: 1.15rem;
  font-weight: 400;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item i:hover {
  color: #add8e6;
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
  max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

.bg-primary {
  background-color: #6fa587 !important;
}

.text-primary {
  color: #add8e6 !important;
}



img.dev-icons {
  width: 48px;
  height: 48px;
}

img.source-icons {
  height: 32px;
}
</style>
