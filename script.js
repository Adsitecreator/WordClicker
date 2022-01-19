
for (let i = 0; i < 100; i++) {   
var newDiv = document.createElement('div');
newDiv.setAttribute('class','letterClass')

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
  let result = (text.substr(25, 26));   // Converts letter clicked to a string
  result = result[0]
  newDiv.setAttribute('class','answerClass')
    box.append(newDiv);
    newDiv.innerHTML +=(result)
    
  console.log(result);
  
});






function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }