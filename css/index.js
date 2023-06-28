
var image = document.getElementsByClassName(".logo")[0];


document.addEventListener("mousemove",handleMouseMove);

function handleMouseMove(event) {
  var windowWidth = window.innerWidth;
var rotation = (mouseX / windowWidth) * 360;

// Apply the rotation to the image
image.style.transform = 'rotate(' + rotation + 'deg)';
}
image.addEventListener('mouseleave', function() {
  image.style.transform = 'rotate(0deg)';
});
