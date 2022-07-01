

const pName = document.getElementById('projectName');
const pDescription = document.getElementById('projectDescription');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
messages.push('Please enter a description for your project')

form.addEventListener('submit', (e) => {
    let messages = []
    if (pName.value === '' || pName.value === null) { 
        messages.push('Name is required')
    }

    if (pDescription.value === '' || pDescription.value === null) {
    }

    if (messages.length > 0) {
    errorElement.innerText = messages.join(', ')
    } 
})