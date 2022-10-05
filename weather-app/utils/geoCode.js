const geoCode = (place, callBack) => {
    console.log(place, "added name");
    callBack({
        langitude: 37.8267,
        latitude: -122.4233
    })
}

module.exports = geoCode;