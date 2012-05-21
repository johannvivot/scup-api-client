Scup API Client
===============

A Javascript implementation for Scup API Client

Usage example:

`````javascript
    // Setup ScupClient
    var client = new ScupClient('YOUR_PUBLIC', 'YOUR_PRIVATE');

    // Get monitorings
    client.monitoramentos().success(function(data){ 
        // DO SOMETHING
    });
`````