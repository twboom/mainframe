let mainframe = []; // Making the initial variable


// COMMON TOOLS

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
mainframe.parameters = function(parameter) {
    return (new URL(document.location)).searchParams.get(parameter)
};

// STATISTICS
mainframe.statistics = [];

// Function stats
