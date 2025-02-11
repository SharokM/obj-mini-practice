const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");


const learning = {
  topic: "JS",
  learningGoals: [
    "Building JS Programs",
    "Develop & Create New Apps",
    "Perfect Debugging Skills",
    "Complete Portfolio",
  ],
  category: "Front End Development",
  topicImportance: "High",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  achievedStudyGoal: false,
  addStudyTime: function (hours) {
    this.hoursThisWeek += hours;
    if (this.hoursThisWeek >= this.weeklyHourGoal) {
        this.achievedStudyGoal = true;
        this.celebrate();
    } 
  },
  celebrate: function () {
    body.classList.add("celebrate");
    success.classList.remove("hide");
    dance.classList.remove("hide");
  }
};

// learning.topic = "JavaScript";
// learning.splice = [1, 1];
topicElement.innerText = `✔️ I'm learning ${learning.topic}`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;


topicElement.classList.remove("hide");
countElement.classList.remove("hide");

learning.addStudyTime(13);