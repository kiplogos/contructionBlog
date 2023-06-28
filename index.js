var mixRatio = prompt("Enter mix ratio: ");








function calculate() {


var length = parseFloat(document.getElementById("enterLength").value);
var width =  parseFloat(document.getElementById("enterWidth").value);
var height =  parseFloat(document.getElementById("enterDepth").value);


var solution = (length*width*height);

var result = "The slab volume is: " + solution.toFixed(2) + " m³.";
var result = solution.toFixed(2);


if (mixRatio==="1:2:4") {
  calcMixcement=(1/7);
  calcMixSand=(2/7);
  calcMixAggregate=(4/7);
}
else if (mixRatio==="1:3:6") {
  calcMixcement=(1/10);
  calcMixSand=(3/10);
  calcMixAggregate=(6/10);
}
else if (mixRatio==="1:4:8") {
  calcMixcement=(1/13);
  calcMixSand=(4/13);
  calcMixAggregate=(8/13);
}
else if (mixRatio==="1:1.5:3") {
  calcMixcement=(1/5.5);
  calcMixSand=(1.5/5.5);
  calcMixAggregate=(3/5.5);
}

// cement density = 1440 kg/m3(28.8m3 per 50kg bag) sand density = 1602 kg/m3  aggregate density = 2650 kg/m3

var cementWeight = Math.round((parseFloat((result*calcMixcement)*1440)/50));
var sandWeight = Math.round(parseFloat(result*(calcMixSand)*1602));
var aggregateWeight = Math.round(parseFloat(result*(calcMixAggregate)*265));
var brcSize = Math.round(parseFloat((length-0.05) * (width-0.05)));





document.getElementById("outputAnswer").innerHTML = "The slab volume is: " + result + " m³.";

return {
  cementWeight: cementWeight,
  sandWeight: sandWeight,
  aggregateWeight: aggregateWeight,
  brcSize: brcSize,


};


}

// Select the submit button element
var submitBtn = document.querySelector("#calculateBtn");

// Add an event listener to the submit button
submitBtn.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the calculate function
  calculate();
});






function price () {
  var result = calculate();

  var cementPrice = parseFloat(result.cementWeight*(document.getElementById("enterCement").value));
  var sandPrice = parseFloat(result.sandWeight*(document.getElementById("enterSand").value));
  var aggregatePrice = parseFloat(result.aggregateWeight*(document.getElementById("enterAggregate").value));
  var brcPrice = parseFloat(result.brcSize*291.12);
  var slabPrice = parseFloat(cementPrice+sandPrice+aggregatePrice+brcPrice);


  document.getElementById("displayCement").innerHTML = "You will use: " + cementPrice.toLocaleString() + " Ksh for cement." ;
  document.getElementById("displaySand").innerHTML = "You will use: " + sandPrice.toLocaleString() + " Ksh for sand. ";
  document.getElementById("displayAggregate").innerHTML = "You will use: " + aggregatePrice.toLocaleString() + " Ksh for aggregate." ;
  document.getElementById("displayBrc").innerHTML = "You will use: " + brcPrice.toLocaleString() + " Ksh for BRC."  ;
  document.getElementById("displaySum").innerHTML = "The slab costs: " + slabPrice.toLocaleString() + " Ksh.";

}



var priceBtn  = document.querySelector("#priceBtn");
priceBtn.addEventListener("click", function(event) {
  event.preventDefault();

  price();
});

var resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("slabForm").reset();
  document.getElementById("outputAnswer").innerHTML = "";
  document.getElementById("displayCement").innerHTML = "";
  document.getElementById("displaySand").innerHTML = "";
  document.getElementById("displayAggregate").innerHTML = "";
});
