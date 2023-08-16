function viralAdvertising(n) {
    var viralObject = []      
    var shared = 5
    var liked = 2
    var cumulative = 2                                                                         
    for (var i = 1; i <= n; i++) {
        var eachDayObject = {}
        eachDayObject["Day"] = i
        eachDayObject["Shared"] = shared
        eachDayObject["Liked"] = liked
        eachDayObject["Cumulative"] = cumulative
        shared = liked * 3 
        liked = Math.floor(shared / 2) 
        cumulative = cumulative + liked 
        viralObject.push(eachDayObject)
    }  

    var showCumulative = {}
    showCumulative = viralObject.filter((obj) => obj.Day === n);

    return showCumulative[0]["Cumulative"]
}

var n = 5
console.log(viralAdvertising(n))