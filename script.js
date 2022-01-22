var newDiv = document.createElement('div');

newDiv.setAttribute('class','questionClass')
var box = document.getElementById("gameArea");
box.append(newDiv);
newDiv.innerHTML= ("What is a three letter word for a four legged feline? <hr>" )


for (let i = 0; i < 100; i++) {   

var newDiv = document.createElement('div');
newDiv.setAttribute('class','letterClass')
var box = document.getElementById("gameArea");
box.append(newDiv);
newDiv.innerHTML = generateRandomLetter();  // Function returns a capital Leter 
}

// newDiv.setAttribute('class','deleteClass')
// box.append(newDiv);    
// newDiv.innerHTML =("Delete")

newDiv.setAttribute('class','answerClass')
 box.append(newDiv);    
 newDiv.innerHTML =("<hr>")

   

window.addEventListener('click', function(event){  


  let textObj =(event.target);
  text = textObj.outerHTML
   console.log(text)
   
  let result = (text.substr(25, 26));   // Converts letter clicked to a string
  result = result[0]
  newDiv.setAttribute('class','answerClass')
    box.append(newDiv);
      
    // 
    newDiv.innerHTML +=(result)
    
   
    var answer = newDiv.innerHTML
  console.log(answer.slice(4));
  
  if (answer.slice(4) =="CAT") { console.log("You win!")
    
  }
});







function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }


  // var element =  document.getElementById('deleteLetter');
    // console.log(element)
    // if (element == null)
    // {
    
    // newDiv.innerHTML +='<button id="deleteLetter" Delete>' // need to make a delete 
    // }