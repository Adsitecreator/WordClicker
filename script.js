
for (let i = 0; i < 100; i++) {   
var newDiv = document.createElement('div');
newDiv.setAttribute('class','letterClass')
var box = document.getElementById("gameArea");
box.append(newDiv);
newDiv.innerHTML = generateRandomLetter();  // Function returns a capital Leter 
}









function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }