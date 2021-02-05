let mainframe = []; // Making the initial variable

// Fetch
mainframe.fetch = function(url, out, type) {
    fetch(url)
        .then(response => response.text())
        .then(data => function() {
            if (type !== true) { out = JSON.parse(data) };
            return out;
        });
};

// Find


// URL Parameters

