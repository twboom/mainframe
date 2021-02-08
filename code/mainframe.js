let mainframe = []; // Making the initial variable


// COMMON TOOLS
mainframe.js = []; // Making the JS variable

// Fetch
mainframe.js.fetch = function(url, out, type) {
    fetch(url)
        .then(response => response.text())
        .then(data => function() {
            if (type !== true) { out = JSON.parse(data) };
            return out;
        });
};

// Find


// URL Parameters


// STATISTICS
mainframe.statistics = [];

// Function stats
