const request = require('request');

const foreCast = (latitude, langitude, callBack) =>{
    const url = 'http://api.weatherstack.com/current?access_key=f0011653eeebf13812ad0bff20f43290&query='+latitude+',-'+langitude+'&units%20=%20f';
    request({url, json: true}, (error, { body } = {})=>{
        if (error) {
            callBack("Check network", undefined)
        } else if(body.error){
            callBack('Unable to find location', undefined)
        }
        else {
            callBack(undefined, 'temperature is '+ body.current.temperature +' feels like ' + body.current.feelslike)
        }
    })
}

module.exports = foreCast;