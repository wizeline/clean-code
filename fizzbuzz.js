function fizzbuzz(range, text) {
    for (var i = 1; i <= range; i++) {
        var fizz = (i % 3 === 0); 
        var buzz = (i % 5 === 0);
        var temp = '';
        if (fizz){
            temp += text.fizz || 'Wize';
        }
        if (buzz){
            temp += text.buzz || 'Line';
        }
        console.log(temp ? temp : i);
    }
}

fizzbuzz(100, {fizz: 'Wize', buzz: 'Line'});
