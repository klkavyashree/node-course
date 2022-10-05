setTimeout(() => {
    console.log("2 secs");
}, 2000);

const names = ['kkkkk', 'ffff', 'yyy'];
const shortNames = names.filter(item=> item.length < 4);

const geoCode = (place, callBack) => {
    setTimeout(() => {
        const data = {
            langitude: 0,
            latitude: 0
        }
        callBack(data);
    }, 2000);
}

geoCode("abc", (data)=>{
    console.log(data);
})


const add = (int1, int2, callBack)=>{
    setTimeout(() => {
        const sum = int1 + int2;
        callBack(sum);
    }, 2000);
}

add(2, 4, (sum)=>{
    console.log(sum);
})