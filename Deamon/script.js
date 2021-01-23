const key = document.getElementById('key')
const run = document.getElementById('run')

const server_link = ``
function login(data){

    // ...
}



run.addEventListener('click', ()=> {
    fetch(`${server_link}:${key}`)
    .then(response => response.json())
     .then(data => login(data))
})