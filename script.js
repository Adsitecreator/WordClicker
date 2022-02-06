var alphabet
var words = [{
  "number": 76,
  "word": "follow",
  "definition": "No to Lead, but to ____"
},
{
  "number": 77,
  "word": "act",
  "definition": " 3 letter to take action; do something"
},
{
  "number": 79,
  "word": "ask",
  "definition": "Say something in order to obtain an answer or some information."
},
{
  "number": 80,
  "word": "men",
  "definition": "Plural of man"
},
{
  "number": 81,
  "word": "change",
  "definition": "make (someone or something) different; alter or modify."
},

{
  "number": 83,
  "word": "light",
  "definition": "Poltergeist, Go into the _____"
},
{
  "number": 84,
  "word": "kind",
  "definition": " Not mean."
},
{
  "number": 85,
  "word": "off",
  "definition": "Bug replenet name brand."
},
{
  "number": 86,
  "word": "need",
  "definition": "Its like want, but with an N."
},
{
  "number": 87,
  "word": "house",
  "definition": "Were you live, also a TV medical drama."
},
{
  "number": 88,
  "word": "picture",
  "definition": "Pretty as a ______"
},
{
  "number": 89,
  "word": "try",
  "definition": "Yoda said that this doesn't exist, only can."
},
{
  "number": 90,
  "word": "us",
  "definition": "Amoung __ 2 letters"
},
{
  "number": 91,
  "word": "again",
  "definition": "Elmos said its Christmas_____"
},

{
  "number": 93,
  "word": "point",
  "definition": "Someone in the Legion that did not earn his spot."
},
{
  "number": 94,
  "word": "mother",
  "definition": "______Fucker!"
}]


var randomElement = words[Math.floor(Math.random() * words.length)];  // code to get a random word & Definition
    console.log(words[0]["definition"])
    console.log(randomElement)
    var  word = randomElement["word"].toUpperCase()
    var definition = randomElement["definition"]
    console.log(word)
    console.log(definition)





var newDiv = document.createElement('div');

newDiv.setAttribute('class','questionClass')
var box = document.getElementById("gameArea");
box.append(newDiv);
newDiv.innerHTML= (definition + " <hr>" )


for (let i = 0; i < 100; i++) {   

var newDiv = document.createElement('div');
newDiv.setAttribute('class','letterClass')   // puts Letters on Screen
var box = document.getElementById("gameArea");
box.append(newDiv);
newDiv.innerHTML = generateRandomLetter();  // Function returns a capital Leter 
}

newDiv.setAttribute('class','answerClass')
 box.append(newDiv);    
 newDiv.innerHTML =("<hr>")
   
window.addEventListener('click', function(event){  
  let textObj =(event.target);
  text = textObj.outerHTML
   console.log(text)
   
  let result = (text.substr(25, 26));   // Converts letter clicked to a string
  result = result[0]
  if (alphabet.includes(result)){      // make sure user clicks on a letter.  This was genius
  newDiv.setAttribute('class','answerClass')
    box.append(newDiv);
  
    newDiv.innerHTML +=(result)
       
    var answer = newDiv.innerHTML
  console.log(answer.slice(4));
  
  if (answer.slice(4) == word) { console.log("You win!")

  window.alert("You Win!")
    
  }
}});







function generateRandomLetter() {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }


  // var element =  document.getElementById('deleteLetter');
    // console.log(element)
    // if (element == null)
    // {
    
    // newDiv.innerHTML +='<button id="deleteLetter" Delete>' // need to make a delete 
    // }



    