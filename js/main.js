console.log("JavaScript is Working")

// Variables
const iconElements = document.querySelectorAll("object");
console.log(iconElements)

// Function for click
function handleFruitClick(event) {
  const iconId = event.currentTarget.id;
  console.log(`You clicked on the fruit icon: ${iconId}`);
}

// Attach listeners once object is loaded
iconElements.forEach(function attachClickEvent(icon) {
  icon.addEventListener("load", function onLoad() {
    icon.contentDocument.documentElement.addEventListener("click", handleFruitClick);
  });
});