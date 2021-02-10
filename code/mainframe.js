let mainframe = []; // Making the initial variable
mainframe.info = {
    'version': 0.1,
    'tools': ['url parameters']
};
mainframe.prefix = {
    'statistics': 'MF Statistics: '
}


// COMMON TOOLS

// Fetch
mainframe.fetch = function(url, type) {
    
};

// Find
mainframe.find = function(array, key, query) {
    function object() {
        return objectValue = key;
    }

    return array.find(object)
};

// URL Parameters
mainframe.parameters = function(parameter) {
    return (new URL(document.location)).searchParams.get(parameter)
};

// STATISTICS
mainframe.statistics = []; // Declaring the Statistics variable
mainframe.statistics.env = [];

// Function stats

// New tracker
mainframe.statistics.new = function(name, steps) {
    class tracker {
        constructor(name, steps) {
            this.name = name;
            this.steps = steps;
            this.start = Date.now();
            this.latest = Date.now();
            this.completedSteps = 0;
            this.remaining = [];
            this.remaining.steps = this.steps - this.completedSteps;
            this.env = []
        }
    }
    mainframe.statistics.env.push(new tracker(name, steps));
    console.log(mainframe.prefix.statistics + 'Created tracker for ' + name + ' with ' + steps + ' steps')
}

// Completed step
mainframe.statistics.update = function(name, process) {
    class completedStep {
        constructor(step, lenght) {
            this.step = step
            this.lenght = lenght
            this.process = process
        }
    };
    const instance = mainframe.find(mainframe.statistics.env, name)
    instance.completedSteps += 1;
    if (process == undefined) { process = 'unkown process'}
    console.log(mainframe.prefix.statistics + 'Completed '+ process + ' from ' + name + ' in ' + (Date.now() - instance.latest) + 'ms')
    console.log(mainframe.prefix.statistics + instance.completedSteps + ' out of ' + instance.steps + ' completed, ' + (instance.steps - instance.completedSteps) + ' remaining (' + ((instance.completedSteps / instance.steps) * 100) + '%)')
    instance.env.push(new completedStep(instance.completedSteps - 1, Date.now() - instance.latest, process))   
    instance.latest = Date.now();
    if (instance.completedSteps === instance.steps) { mainframe.statistics.finish(name) }
}

// Function completed
mainframe.statistics.finish = function(name) {
    const instance = mainframe.find(mainframe.statistics.env, name)
    const time = Date.now() - instance.start
    console.log(mainframe.prefix.statistics + 'Completed all ' + instance.steps + ' steps from ' + name + ' in ' + time + 'ms')
    for (let i = 0; i < instance.env.length; i++) {
        console.log(mainframe.prefix.statistics + 'Step ' + instance.env[i].step + ' (' + instance.env[i].process + '): ' + instance.env[i].lenght + 'ms')
    }; 
}