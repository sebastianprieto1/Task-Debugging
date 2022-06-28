// const projectName = document.getElementById('projectName');
// const projectDeadline = document.getElementById('projectDeadline');
// const projectDescription = document.getElementById('projectDescription');
// const projectForm = document.getElementById('projectForm');
// const errorElement = document.getElementById('error');

// projectForm.addEventListener('submit', (e) => {
//     let messages = [];
//     if (projectName.value === '' || projectName.value === null) {
//         messages.push('Project name is required');
//         }  
        
//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(', ');
//     }
// })

const name = document.getElementById('projectName');
const description = document.getElementById('projectDescription');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null) { 
        messages.push('Name is required')
    }

    if (projectDescription.value === '' || projectDescription.value === null) {
        messages.push('Project description is required')
    }
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    } 
})