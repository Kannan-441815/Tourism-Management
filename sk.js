// javascript design for tourism

const form=document.getElementById("form");
const uname=document.getElementById("form");
const name=document.getElementById("form");
const email=document.getElementById("form");
const phnum=document.getElementById("form");
const number=document.getElementById("form");
const dest=document.getElementById("form");
const date-travel=document.getElementById("form");
const npeople=document.getElementById("form");

	form.addEventListener('submit',e=>
		{
			e.preventDefault();
			checkInput();
		});
		
		function checkInput()
		{
			const unamevalue=uname.value.trim();
			const namevalue=name.value.trim();
			const emailvalue=email.value.trim();
			const phnumvalue=uname.value.trim();
			const numbervalue=uname.value.trim();
			const destvalue=uname.value.trim();
			const datevalue=uname.value.trim();
			const npeoplevalue=uname.value.trim();
			
			if(unamevalue ===''){
				setError(uname,'username cannot be blank');
				}
			else{
				setSuccess(uname);
			}	
		}	