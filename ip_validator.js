function validIP(ip) {
    var regex = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g);

    console.log((regex.test(ip) ? ip + ' is valid' : ip + ' is not valid'));
}

validIP('127.0.0');
validIP('127.0.0.1');