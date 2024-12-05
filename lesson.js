document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('form'); 
	const output = document.getElementById('formData'); 
	
	form.addEventListener('submit', (event) => { 
		event.preventDefault();                   // Prevent the form from submitting 
		
		const formData = new FormData(form); 
		const data = {}; 
		
		formData.forEach((value, key) => { 
			data[key] = value; 
		}); 

		const name = data['name'];
		const email = data['email'];
		const day = Object.keys(data).find(key => data[key].match(/MON|TUES|WED|THURS|FRI|SAT/));
		const time = Object.keys(data).find(key => data[key].match(/12PM-1PM|1PM-2PM|2PM-3PM|3PM-4PM|4PM-5PM|5PM-6PM|6PM-7PM/));
		const teacher = data['teacher'];
		
		// Clear the previous output 
		output.innerHTML = ''; 

		//Add string to the output
		const intro=document.createElement('p');
		intro.textContent = `${name} (${email}), your lesson is scheduled for ${data[day]} at ${data[time]} with ${teacher}. If you have any questions please reach out via email or call. Thank you.`;
		output.appendChild(intro);
	}); 
});