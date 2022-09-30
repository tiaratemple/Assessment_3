console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	
	

	form.addEventListener('submit', () => {
		alert("Submitted!")
	})
}


	


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('img').addEventListener("mouseover", () => {
	alert('You can dooo it!')
})