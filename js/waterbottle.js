var waterbottle = {
    brand: "Hydroflask",
    colour: "green",
    volume: 10,
    volumeUnits:"dL",
    leakProof: true,
    containableLiquids: ["water", "coffee", "juice", "wine", "cordial"],
    percentageFull: 50,
    isEmpty: function() {
            if (waterbottle.percentageFull === 0) {
                return true
            } else {
                return false
            }
    }
}

console.log(waterbottle.isEmpty())