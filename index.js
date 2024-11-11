
var edu = document.getElementById("education");
console.log(edu.style);

function displayEducation() {
  edu.style.display = "block";
  skill.style.display = "none";
  acadamic.style.display = "none";
}

var skill = document.getElementById("skills");
function displaySkills() {
  edu.style.display = "none";
  skill.style.display = "block";
  acadamic.style.display = "none";
}

var acadamic = document.getElementById("acadamics");
function displayAcadamics() {
  edu.style.display = "none";
  skill.style.display = "none";
  acadamic.style.display = "block";
}
