window.addEventListener('load', () => {
	const form = document.querySelector("#form");
	const input = document.querySelector("#input");
	const listelement = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

        if(!task){
            alert("Plese fill out your todo list");
            return;
        }

		const taskelement = document.createElement('div');
		taskelement.classList.add('task');

		const taskcontentelement = document.createElement('div');
		taskcontentelement.classList.add('content');

		taskelement.appendChild(taskcontentelement);

		const taskinputelement = document.createElement('input');
		taskinputelement.classList.add('text');
		taskinputelement.type = 'text';
		taskinputelement.value = task;
		taskinputelement.setAttribute('readonly', 'readonly');

		taskcontentelement.appendChild(taskinputelement);

		const taskactionelement = document.createElement('div');
		taskactionelement.classList.add('actions');
		
		const taskeditelement = document.createElement('button');
		taskeditelement.classList.add('edit');
		taskeditelement.innerText = 'Edit';

		const taskdeleteelement = document.createElement('button');
		taskdeleteelement.classList.add('delete');
		taskdeleteelement.innerText = 'Delete';

		taskactionelement.appendChild(taskeditelement);
		taskactionelement.appendChild(taskdeleteelement);

		taskelement.appendChild(taskactionelement);

		listelement.appendChild(taskelement);

		input.value = '';

		taskeditelement.addEventListener('click', (e) => {
			if (taskeditelement.innerText.toLowerCase() == "edit") {
				taskeditelement.innerText = "Save";
				taskinputelement.removeAttribute("readonly");
				taskinputelement.focus();
			} else {
				taskeditelement.innerText = "Edit";
				taskinputelement.setAttribute("readonly", "readonly");
			}
		});

		taskdeleteelement.addEventListener('click', (e) => {
			listelement.removeChild(taskelement);
		});
	});
});