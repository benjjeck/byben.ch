const maxContentWidthInRem = 85;
const minContentWidthInRem = 30;

const gridAligner = document.getElementById('grid-aligner');


/**
 * Rounds the height of any given element to the nearest rem - i.e. the background-grid of the page
 * @param {*} element 
 */
function alignHeightToGrid(element) {
	const height = element.offsetHeight;
	const heightInRem = height / 16;
	const roundedHeightInRem = Math.ceil(heightInRem);
	// element.style.height = roundedHeightInRem + 'rem';

	console.log('Aligned element to ' + roundedHeightInRem + 'rem');
}

window.onresize = (event) => {
	alignHeightToGrid(gridAligner);
}

window.onload = () => {
	alignHeightToGrid(gridAligner);
}

