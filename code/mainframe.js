let mainframe = []; // Making the initial variable
mainframe.info = {
    'version': 0.1,
    'tools': ['url parameters']
}


// COMMON TOOLS

// Fetch
mainframe.fetch = function(url, type) {

}   

// Find


// URL Parameters
mainframe.parameters = function(parameter) {
    return (new URL(document.location)).searchParams.get(parameter)
};

// STATISTICS
mainframe.statistics = [];

// Function stats
