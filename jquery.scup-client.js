/*
 * A JavaScript implementation of the scup client API.
 * Version 1.0 Copyright (C) Johann Vivot 2012
 */

// Class ScupClient
var ScupClient = function(public_key, private_key){
    this.public_key = public_key;
    this.private_key = private_key;
    this.end_point = 'api.scup.com.br'
}

// Generate signature
ScupClient.prototype.generate_signature = function () {
    var timestamp = parseInt(Number(new Date()/1000));
    var signature = hex_md5(timestamp + this.private_key);

    return { timestamp: timestamp, signature: signature };
}

// Get auth url params
ScupClient.prototype.get_auth_params = function () {
    var auth = this.generate_signature();

    return { time: auth.timestamp, public_key: this.public_key, signature: auth.signature };
}

// Send a request
ScupClient.prototype.send = function (path, auth, params) {
    var query = '?publickey=' + auth.public_key + '&signature=' + auth.signature + '&time=' + auth.time + '&ipp=100';

    if (params) {
        query += '&' + params;
    }

    var url = 'http://' + this.end_point + path + query;

    return jQuery.ajax({
        url: url,
        context: this,
        async: false,
        type: 'GET',
        dataType: 'jsonp',
        timeout: 1000
    });
}

// Get monitorings
ScupClient.prototype.monitoramentos = function () {
    var auth = this.get_auth_params();
    var path = '/1.0/monitoramentos/';

    return this.send(path, auth)
}

// Get searches
ScupClient.prototype.buscas = function (id) {
    var auth = this.get_auth_params();
    var path = '/1.0/buscas/' + id + '/';

    return this.send(path, auth);
}

// Get items
ScupClient.prototype.itens = function (id, params) {
    var auth = this.get_auth_params();
    var path = '/1.0/itens/' + id + '/';

    return this.send(path, auth, params);
}

// Get users
ScupClient.prototype.relacionamentos = function (id, params) {
    var auth = this.get_auth_params();
    var path = '/1.0/relacionamentos/' + id + '/';

    return this.send(path, auth, params);
}

// Get users items
ScupClient.prototype.historicos = function (id, params) {
    var auth = this.get_auth_params();
    var path = '/1.0/historicos/' + id + '/';

    return this.send(path, auth, params);
}