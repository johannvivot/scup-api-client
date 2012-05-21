Scup API Client
===============

A Javascript implementation for [Scup API][1] Client

Usage example:

`````javascript
    // Setup ScupClient
    var client = new ScupClient('YOUR_PUBLIC', 'YOUR_PRIVATE');

    // Get monitorings
    client.monitoramentos().success(function(data){ 
        // DO SOMETHING
    });
`````

[1]: http://www.scup.com.br/trainings-and-help/apidocs