const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.getElementById('message-1');
const message2 = document.getElementById('message-2');


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    message1.textContent = 'Loading....';
    fetch('http://localhost:3000/weather?address='+search.value).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message1.textContent = data.error;
        }else{
            message1.textContent = data.location;
            message2.textContent = data.forecast;
        }
    })
})
})