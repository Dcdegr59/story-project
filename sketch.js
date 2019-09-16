var Straw = false;
var Stick = false;
var Brick = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Three Little Pigs"; // title

  document.getElementById('author').innerHTML="Don Degracia"; // author


  
  // All of your code goes under here
  

  var story = beginning() + 'The three little pigs each went out to build their house. The first pig spent ' + many() + 'Then came along the big bad wolf, he was able to smell the pigs inside. He goes to each house and ' + asks() + ' After everything was settled, the wolf went on his way.'  // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 7)); // Random number rounded down
  if(hours < 3) {
    Straw = true;
   } else if(hours < 5) {
     Stick = true;
   }else if (hours < 7) {
     Brick = true;
  }

  if(Straw == true) {
    return hours + " hours building, and built a straw house."
  }
  if(Stick == true) {
    return hours + " hours building, and built a stick house."
  }
  if(Brick == true) {
    return hours + " hours building, and built a brick house."
  }
}

function asks() {
  let dice =   random(1,6)
  if (dice > 5){


    return "Then came along the big bad wolf, he was able to smell the pigs inside. The wolf ask the pigs to let him in so they let him in the house until they notice that he was going to eat them."
     }
    if (dice < 5){
    return "They don't let him in."
    }
}

function blow() {
  let insp = random(1,6) ;
  if(insp > 5) {
    return "The pigs did not let the wolf in so tries to blow thier house down."
  } else {
    return "The wolf blows the house down, leaving the pigs to try and escape from his grasp."
  }
}

function beginning()  {
  let dice = random(1,6)
  if (dice > 3) {

    return "One day "
  }
  if (dice < 3) {
    return "Once upon a time "
  }

}
//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    