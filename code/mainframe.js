let mainframe = []; // Making the initial variable


// COMMON TOOLS

// Fetch
mainframe.fetch = function(url, type) {
    let output;
    if (type === undefined) { type = false }
    console.log(url)
    console.log(type)
    fetch(url).then(
        function(u){ return u.json();}
      ).then(
        function(json){
            console.log(json)
            output = json;
            console.log(output)
        }
      )
    console.log(output)
    return output
}   

// Find


// URL Parameters
mainframe.parameters = function(parameter) {
    return (new URL(document.location)).searchParams.get(parameter)
};

// STATISTICS
mainframe.statistics = [];

// Function stats
