<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="technical-proficiencies">
    <div class="w-100">
      <h2>Technical Proficiencies</h2>
      <br>
      <h3>Programming</h3>
      <p>I am primarily a Java programmer; having completed most of my personal projects in it, however, I am somewhat flexible in my language capabilities, having a varying range of experience in other languages, including but not limited to</p>
      <div id="langList">
        <button
          @click="showModal(lang.name, lang.text)"
          v-for="lang in languages"
          :key="{lang}"
          :style="{color:lang.color, backgroundColor:lang.bg}"
        >{{lang.name}}</button>
      </div>
      <h3>Operations</h3>
      <p>I spent a year in the Otago Polytechnic Student OPs team, and have spent a bit of my
        own time learning about Systems Administration, and Operations. I understand and have 
        experience with many technologies and systems used in this area. Such as: </p>
        <div id="opList">
        <button
          @click="showModal(oper.name, oper.text)"
          v-for="oper in operations"
          :key="{oper}"
           :style="{color:oper.color, backgroundColor:oper.bg}"
        >{{oper.name}}</button>
        </div>
    </div>
    <v-dialog />
  </section>
</template>

<script>
import languages from "../assets/languages.json"
export default {
  name: "technical-proficiencies",
  
  data: () =>  ({
    languages ,
    operations: [
      {name: "Linux", text:
      "I have used linux literally every day for the past 5 years. This was originally \
      because I wanted to improve my skills with linux servers, however, I quickly fell \
      inlove with Linux as it rarely broke on me, and I could configure my environments \
      easier than on Windows. I currently use a mix of Arch Linux, and Debian for my projects \
      however, I am comfortable with Ubuntu also as I have spent years adding foreign ppa's \
      for various things. <a href=https://github.com/lunarised/dotfiles target= _blank>You can find many of my dot files and configuration files on my \
      github. </a>",
      color: "#ffffff",
      bg: "#0088cc"
      },
      {name: "Configuration Management", text: 
      "I have in the past, used some configuration management tools, and used them to have \
      multiple machines running the same version of specific software. For this task, I used \
      both Chef and Puppet, although I preferred puppet as it made far more sense to me in \
      regards of its grouping scheme. I have also dabbled a little into Nix, which is a \
      functional programming based tool that deals with configuation management, and is the \
      core technology behind a linux distribution called NixOS",
      color: "#222222",
      bg: "#FEFE00",
      },
      {name: "Monitoring", text: 
      "For server monitoring, I have both used homemade tools, and effective tools. I designed \
      some software that would send diagnostics to a Raspberry Pi, which would then send me a \
      phone notification, via the Browser if something had happened to any of my systems. As \
      this was several years ago, and didn't work when I expected it to, I looked into other \
      monitoring software, At this time, I was introduced to Nagios in my Systems Administration \
      class. I liked the sheer simplicity of Nagios, and have been using it since. I also did \
      some configuration management as part of my Student Ops role with Nagios.",
      bg: "#b30000",
      color: "#ffffff"},
      {name: "Containerization", text: 
      "While I have dabbled in docker a fair bit in my degree, Maintaining containers, \
      fixing errors for other people and even creating some containers myself, There is \
      still much for me to learn in regard to Docker, Such as Docker-Compose, Docker Swarm \
      and Kubernetes. I intend to improve my skills with Docker over the coming months as \
      I really enjoy the idea of containerization",
      color:"#ffffff",
      bg: "#00B4AB"
      },
      {name: "Virtualization", text: 
      "As a member of the Student Ops group, I utilised VMWare to provide virtual machines \
      to the other project groups. I have also used virtualization in my own time, such as \
      using dyanamic malware analysis tools such as Cuckoo, which require a very specific \
      virtual machine setup.",
      color: "#ffffff",
      bg: "#DA5B0B"
      },
      {name: "Git", text: 
      "I have used a large amount of git, from using it as a developer by utilizing CI/CD and \
      pull requests to make my development more agile, to maintaining it for all IT students at \
      Otago Polytechnic. While the user side of git is mostly the same regardless of what \
      provider you are using, I have worked with the greater git ecosystems in Github, Gitlab, \
      and Gitea. I'm constantly looking for new and interesting ways to utilize git to help me \
      with my projects.",
      color: "#ffffff",
      bg: "#222222"}

    ]
  }),
  methods: {
    showModal(title, text) {
      this.$modal.show("dialog", { title, text });
    },
    hideModal() {
      this.$modal.hide("dialog");
    }
  }
};
</script>

<style scoped>
ul {
  margin-left: auto;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#langList{
  text-align: center;
  align-content: justify;
 
}
#langList button:first-child{
  margin-left: 0px;
}
#langList button{
  
  
  margin-right: auto;
  margin-left: 10px;
  border: 0;
  border-radius: 12px;
  width: auto;
  padding-left:20px;
  padding-right:20px;

}










#opList{
  text-align: center;
  align-content: justify;
 
}
#opList button:first-child{
  margin-left: 0px;
}
#opList button{
  
  
  margin-right: auto;
  margin-left: 10px;
  border: 0;
  border-radius: 12px;
  width: auto;
  padding-left:20px;
  padding-right:20px;

}
</style>