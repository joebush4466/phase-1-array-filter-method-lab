// Code your solution here

function findMatching(array,string){
    let matchingNames =[]
    for(let item of array){
        if(item.toUpperCase() === string.toUpperCase()){
            matchingNames.push(item)
        }
    }
    return matchingNames;
}

function fuzzyMatch(array,string){
    let fuzMatch =[]
    for(let item of array){
        if(item.slice(0,2)===string.slice(0,2)){
            fuzMatch.push(item);
        }
    }
    return fuzMatch;
}

function matchName(array,string){
    let matches =[];
    for(let item of array){
        if(item.name === string){
            matches.push(item)
        }
    }
    return matches;
}