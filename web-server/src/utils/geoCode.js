const geoCode = (place, callBack) => {
    console.log(place, "added name");
    callBack({
        latitude: 37.8267,
        langitude: -122.4233
    })
}

module.exports = geoCode;