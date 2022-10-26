// code your solution here
function saturdayFun(verb = "roller-skate") {
    return `This Saturday, I want to ${verb}!`
}

const mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

const wrapAdjective = function (str = "*"){
    return function(adj = "special"){
        return `You are ${str}${adj}${str}!`
}
}