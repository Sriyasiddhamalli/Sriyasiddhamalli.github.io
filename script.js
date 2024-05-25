/*TAKE ACTION personalize it feature*/
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

/* DOM doesn't always load fully so browser may not be able to find the button element */
if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/* create a separate function for displaying the script */
function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am contacting you to ask you to support H.R.3614 - Menstrual Equity For All Act. So many people in my community lack access to the proper menstrual products and education, but this bill will help to resolve this issue. For example, " + learning +  ". For these reasons, please support the Menstrual Equity For All Act. Menstrual products are essential items and should be made more accessible. Thank you for your time.";
}


/*HOME fact generator feature*/
// creating variables
var factList = [
  "16.9 million people who menstruate in the US are living in poverty.",
  "500 million people lack access to menstrual products and hygiene facilities.",
  "1 in 4 teens in the US has missed class because they don't have access to menstrual products.",
  "Tax on menstrual products in the US ranged from 4.7% to 10% in 2019.",
  "The average person who menstruates spends about $1,773 on period products in their lifetime.",
  "People unable to access menstrual products have reported using rags, toilet paper, and children’s diapers. Some people have also used the menstrual products they did have for longer than intended.",
  "The 'Tampon Tax' on menstrual products is still in effect in 27 US states. ",
  "Two-thirds of the 16.9 million low-income women in the US could not afford menstrual products in the past year, with a half of this needing to choose between menstrual products and food."
];

// referencing button in HTML file to manipulate in JavaScript
var factsBtn = document.getElementById("factsBtn");

// referencing quote in HTML file to manipulate in JavaScript
var fact = document.getElementById("fact");

// counter
var count = 0;


// defining displayQuote function from event listener
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  /* conditional to keep count within the available indices. once the count reaches the quoteList index (length), restart the count by setting it to 0 */
  if(count == factList.length){
    count = 0;
  }
}

/* EVENT LISTENERS */
if (factsBtn) {
  factsBtn.addEventListener("click", displayFact);
}