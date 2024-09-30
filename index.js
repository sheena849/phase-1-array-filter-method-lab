// Code your solution here
function findMatching(source,sought){
    return source.filter(
        (possibleMatch)=>possibleMatch.toLowerCase() === sought.toLowerCase()
    );
}
function fuzzyMatch(source, testString) {
    return source.filter(
        (possibleMatch) => 
            possibleMatch.toLowerCase().startsWith(testString.toLowerCase())
    );
}

function matchName(source,soughtName){
    return source.filter(
        (driver)=>driver.name ===soughtName)
}