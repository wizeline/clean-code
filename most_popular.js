function popular(votes) {
    var total = [];
    votes.forEach(function(e) {
        if (typeof(total[e]) !== 'undefined') {
            total[e] = total[e] + 1;
        } else {
            total[e] = 1;
        }
    });
    
    var highestName;
    var names = Object.keys(total);
    var highest = 0;

    names.forEach(function(key) {
        if (total[key] > highest) {
            highest = total[key];
            highestName = key;
        }
    })

    return highestName;
}

var names = ["Jessica", "Mauricia", "Jacky", "Jacky", 'Heriberta', "Romualdo", "Mauricia", "Heriberta", "Jacky"];
popular(names); // if you don't want to print, run this
console.log(popular(names)); // otherwise, run this