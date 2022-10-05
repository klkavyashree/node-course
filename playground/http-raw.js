const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=f0011653eeebf13812ad0bff20f43290&query=37.8267,-122.4233&units=f';

const request = http.request(url, (response)=>{
    let data = '';

    response.on('data', (chunk)=>{
        data = data + chunk;
    })

    response.on('end', ()=>{
        console.log(JSON.parse(data));
    })
})

request.on('error', (error)=>{
    console.log(error);
})

request.end();