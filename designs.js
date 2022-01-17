// Select color input
var colorEl = document.getElementById("colorPicker");
// Select size input
var heightEl = document.getElementById("inputHeight");
var widthEl = document.getElementById("inputWidth");
// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(evt) {
	evt.preventDefault()
	const height = heightEl.value;
	const width = widthEl.value;
	const color = colorEl.value;
	makeGrid(height, width);
});
/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */
function makeGrid(height, width) {
	const mainElement = document.querySelector('#pixelCanvas');
	const tableElement = document.createElement('table');
	for (let i = 0; i < height; i++) {
		const trElement = document.createElement('tr');
		for (let x = 0; x < width; x++) {
			trElement.appendChild(document.createElement('td'));
		}
		//apply color to the celll
		tableElement.appendChild(trElement);
		trElement.addEventListener("click", function(e) {
			if (e.target.style.backgroundColor) {
				e.target.style.backgroundColor = "";
			} else {
				e.target.style.backgroundColor = colorEl.value;
			}
		});
	}
	mainElement.innerHTML = '';
	mainElement.appendChild(tableElement)
}
