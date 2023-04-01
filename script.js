//your JS code here. If required.
const inputFields = document.getElementsByTagName("input");
const btn = document.getElementsByTagName("button");

console.log(inputFields[0])
console.log(btn);
btn[0].addEventListener('click',(e)=>{
	const fname = inputFields[0].value;
	const lname = inputFields[1].value;
	const phn = inputFields[2].value;
	const email = inputFields[3].value;
	window.alert(`First Name: ${fname}
Last Name: ${lname}
Phone Number: ${phn}
Email ID: ${email}`);
})