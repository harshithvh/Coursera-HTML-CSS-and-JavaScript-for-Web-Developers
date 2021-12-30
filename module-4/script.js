var speakName = "Good Bye";
var byeSpeaker = function (name) {
	console.log(speakName + " " + name);
}

var speakWord = "Hello";
var helloSpeaker = function (name) {
	console.log(speakWord + " " + name);
}

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

