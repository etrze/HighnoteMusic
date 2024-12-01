const name = document.getElementById('name');
const email = document.getElementById('email');
const day = document.getElementByID('');
const time = ;
const teacher = ;
const appointment = name, email, day, time, teacher;
const form = document.getElementById('form');
const errorElement = document.getElementByID('error');



function lessonForm() {
	out1.alert = appointment.value
}

submit.addEventListener('click',lessonForm);

form.addEventListener('submit', e => {
	let messages= []
	if (name.value == '' || name.value == null) {
		messages.push("Name is required");
	}
	
	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
});