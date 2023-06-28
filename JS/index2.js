$(document).ready(function() {
  var formationHeight;
  var length;
  var area;
  var volume;
  var concreteVolume;
  var concreteThickness;
  var priceCement;
  var finalCementPrice;
  var cementVolume;
  var finalAggregatePrice;
  var finalSandPrice;

  $('button.button1').click(function(event){
    event.preventDefault();
    length = parseInt($('#meanGirth').val());
    $('#returnMeanGirth').text('The mean girth is: ' + length);
  });

  $('button.button2').click(function(event){
    event.preventDefault();
    formationHeight = parseInt($("#height").val());
    $('h2.test2').text('Formation height is: ' + formationHeight);
  });

  $('button.button3').click(function(event){
    event.preventDefault();
    width = parseInt($(".trenchWidth").val());

    volume = length * width * formationHeight;
    if (isNaN(volume)) {
      alert("One or more input values are not valid numbers.");
    } else {
      $('h2.test4').text('The volume of excavation is: ' + volume + 'm3');
    }
  });

  $('button.button4').click(function(event){
    event.preventDefault();
    concreteThickness = parseInt($(".thickness").val());
    concreteVolume = parseInt(concreteThickness * length * width);

    $('h2.output8').text("The volume of concrete is: " + concreteVolume + ' m3.');
  });

  $('button.button5').click(function(event){
    event.preventDefault();
    var mix = $('.mixRatio').val();

    $('h2.output5').text("The mix ratio is: " + mix);
    if (mix === "1:2:4") {
      cementVolume = (0.143 * concreteVolume);
      $('h2.output5').text("The cement volume is: " + cementVolume.toFixed(3) + ' m3.');
      var sandVolume = (0.286 * concreteVolume);
      $('h2.output6').text("The sand volume is: " + sandVolume.toFixed(3) + ' m3');
      var aggregateVolume = (0.571 * concreteVolume);
      $('h2.output7').text("The aggregate volume is: " + aggregateVolume.toFixed(3) + ' m3');
    } else if (mix === "1:3:6") {
      cementVolume = (0.1 * concreteVolume);
      $('h2.output5').text("The cement volume is: " + cementVolume.toFixed(3) + ' m3.');
      var sandVolume = (0.3 * concreteVolume);
      $('h2.output6').text("The sand volume is: " + sandVolume.toFixed(3) + ' m3');
      var aggregateVolume = (0.6 * concreteVolume);
      $('h2.output7').text("The aggregate volume is: " + aggregateVolume.toFixed(3) + ' m3');
    } else if (mix === "1:1.5:3") {
      cementVolume = (0.182 * concreteVolume);
      $('h2.output5').text("The cement volume is: " + cementVolume.toFixed(3) + ' m3.');
      var sandVolume = (0.273 * concreteVolume);
      $('h2.output6').text("The sand volume is: " + sandVolume.toFixed(3) + ' m3');
      var aggregateVolume = (0.545 * concreteVolume);
      $('h2.output7').text("The aggregate volume is: " + aggregateVolume.toFixed(3) + ' m3');
    } else {
      alert("Enter a valid mix ratio!");
    }
  });

  $('button.button6').click(function(event){
    event.preventDefault();
    priceCement = parseInt($('.cementPrice').val());
    priceSand = parseInt($('.sandPrice').val());
    priceAggregate = parseInt($('.aggregatePrice').val());

    var mix = $('.mixRatio').val();

    $('h2.output5').text("The mix ratio is: " + mix);
    if (mix === "1:2:4") {
      cementVolume = (0.143 * concreteVolume);
      var sandVolume = (0.286 * concreteVolume);
      var aggregateVolume = (0.571 * concreteVolume);

      finalCementPrice = parseInt((cementVolume / 0.035) * priceCement);
      finalSandPrice = parseInt((sandVolume / 0.693) * priceSand);
      finalAggregatePrice = parseInt((aggregateVolume / 0.571) * priceAggregate);

      if (isNaN(finalCementPrice,finalSandPrice,finalAggregatePrice)) {
        alert("One or more input values are not valid numbers.");
      } else {
        $('h2.output9').text("The cement price is: " + finalCementPrice + ' Ksh.');
        $('h2.output10').append("The sand price is: " + finalSandPrice + ' Ksh.');
        $('h2.output11').append("The aggregate price is: " + finalAggregatePrice + ' Ksh.');
      }
    }
  });
});
