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
        >{{oper.name}}</button>
        </div>
    </div>
    <v-dialog />
  </section>
</template>

<script>
export default {
  name: "technical-proficiencies",
  data: () => ({
    languages: [
      {
        name: "Java",
        text:
          "<p> Most of my prototype programming is done in Java, as it was\
      the first language which I learnt to a degree of proficiency. The fact that it is\
      very clean for crossplatform development is ideal for me as a Windows x Linux \
      Based Programmer. In Java, I have explored many problems, from implementing data\
      structures and building GUI's to creating more complex applications with data-graphing,\
      and even doing some (now understandably) silly systems programming. Java is definitely one\
      of my go-to languages for any sort of software development or mock up</p>",
      bg: "#b07219",
      color: "#eeeeee"
      },

      {
        name: "Python",
        text:
          "Python2 was the first programming language I tried that \
      wasn't connected to some kind of microcontroller. I didn't really enjoy python2 that much \
      until I tried out python3 and decided that it was the language I like to toy with. I have \
      experience in many areas of python3 development, such data-science and AI (using tools \
      such as tensor flow and numpy), designing and testing algoriths, OO Principles, and my \
      favorite of all, funtional programming. While python is almost never my first choice \
      as a language for a project, It's a language that I don't get tired of too quickly",
      bg: "#3572A5",
      color: "#eeeeee"
      },

      { name: "C++", 
      text: "C++ is the language where I first started building big projects. I build a \
      roguelike game in C++ for my Programming 4 paper. While most of the project was done \
      in the .NET framework, with little native C++ being written, I did write some C++ for \
      the more difficult parts of the project (such as using native vectors for the room \
      generation algorithm, which was utilizing a poisson distribution). I enjoy writing \
      C++, and It is probably one of my best languages, beside Java and Python",
      bg: "#f34b7d",
      color: "#eeeeee" 
       },

      { name: "C", text: "While Rust is my go to systems programming language, I got my \
      love of systems programming from using C. I have used C in many projects, from CLI \
      games of ECard, to several arduino projects (such as a digital theremin, or a \
      collision avoiding robot). I still get a kick out of firing up my C environment, and \
      re-figuring out memory management, which is a thrill I dont get in any of my other \
      programming languages of choice.",
      bg: "#555555",
      color: "#eeeeee" },

      { name: "C#", text: "My experience with C# was originally as a way to manage windows \
      forms, and was taught as one of the first languages in my Bachelor of IT. While I \
      enjoyed programming in C# then, It wasn't until I played around with making some\
       functionally designed components for my software testing before I truly realised that \
       this language could do so much more than be an OO heavy weight like Java. While C# \
       is not my best language, Nor a language I will pick over another (Outside of Windows \
       forms), I feel I can both develop and review functions written in it ",
       bg: "#178600",
      color: "#eeeeee" },

      { name: "Ruby", text: "My experience with Ruby has only been for 2 small projects. The \
      first one was for a programming assignment, where we had to create the famous Mastermind \
      game in Ruby. It was here where I first discovered how clean this language looks. From the \
      english like way that it read, to the sample method that retrieved a random element in a \
      list, this language had everything a beautiful language could have. The other project I \
      have used ruby to work through, was a bot that connected to a fediverse instance, and \
      made shitposts from a set of files pertaining to musicians/bands, and sentences. I still \
      haven't finished this project, but it is one i'm quite fond of",
      bg: "#701516",
      color: "#eeeeee" },

      {
        name: "Rust",
        text:
          "Rust is a language that I always strive to get better at. \
      Currently, it is nowhere near one of my most proficient languages, However, I am always \
      excited for whenever I get the time to go through and write/learn a little bit of rust. It \
      really is one of my passions in IT, and I hope to see rust grow into a popular language \
      in the coming years. The features I enjoy the most about rust are the Data Ownership Model \
      and the provable thread safety. The cargo dependancy manager is pretty cool too. \
      While I wouldn't be able to code myself out of a box with rust, I'd certainly have a fun \
      time while I am in there.",
      bg: "#dea584",
      color: "#222222"
      },

      { name: "Bash", text: "Bash has always been a funny language for me to program in. On \
      one hand, doing batch processing in it is very straight forward as you can consider it \
      a sequence of commands, although, once you add conditionals and loops, bash gets rather \
      ugly. I ended up writing a tool in bash that helps initialize jekyll pages. I made this \
      after one of my friends who blogs, asked me why he spent more time writing in metadata for \
      jekyll to process than he did writing his posts. So i essentially made a barebones bash \
      script that fills out the metadata for me. I will oneday put it in a build package, but \
      since it is mainly just being used by some close friends of mine, I will keep it as a \
      simple bash script for now." ,
      bg: "#89e051",
      color: "#222222"}
    ],
    operations: [
      {name: "Linux", text:
      "I have used linux literally every day for the past 5 years. This was originally \
      because I wanted to improve my skills with linux servers, however, I quickly fell \
      inlove with Linux as it rarely broke on me, and I could configure my environments \
      easier than on Windows. I currently use a mix of Arch Linux, and Debian for my projects \
      however, I am comfortable with Ubuntu also as I have spent years adding foreign ppa's \
      for various things. <a href=https://github.com/lunarised/dotfiles target= _blank>You can find many of my dot files and configuration files on my \
      github. </a>"},
      {name: "Configuration Management", text: 
      "I have in the past, used some configuration management tools, and used them to have \
      multiple machines running the same version of specific software. For this task, I used \
      both Chef and Puppet, although I preferred puppet as it made far more sense to me in \
      regards of its grouping scheme. I have also dabbled a little into Nix, which is a \
      functional programming based tool that deals with configuation management, and is the \
      core technology behind a linux distribution called NixOS"},
      {name: "Monitoring", text: 
      "For server monitoring, I have both used homemade tools, and effective tools. I designed \
      some software that would send diagnostics to a Raspberry Pi, which would then send me a \
      phone notification, via the Browser if something had happened to any of my systems. As \
      this was several years ago, and didn't work when I expected it to, I looked into other \
      monitoring software, At this time, I was introduced to Nagios in my Systems Administration \
      class. I liked the sheer simplicity of Nagios, and have been using it since. I also did \
      some configuration management as part of my Student Ops role with Nagios."},
      {name: "Containerisation", text: "Docker"},
      {name: "Virtualization", text: 
      "As a member of the Student Ops group, I utilised VMWare to provide virtual machines \
      to the other project groups. I have also used virtualization in my own time, such as \
      using dyanamic malware analysis tools such as Cuckoo, which require a very specific \
      virtual machine setup."},
      {name: "Git", text: 
      "I have used a large amount of git, from using it as a developer by utilizing CI/CD and \
      pull requests to make my development more agile, to maintaining it for all IT students at \
      Otago Polytechnic. While the user side of git is mostly the same regardless of what \
      provider you are using, I have worked with the greater git ecosystems in Github, Gitlab, \
      and Gitea. I'm constantly looking for new and interesting ways to utilize git to help me \
      with my projects."}

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
</style>