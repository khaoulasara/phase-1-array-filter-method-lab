// Code your solution here
function findMatching(source, sought) {
    console.log("Inside findMatching function"); 
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    console.log("Inside fuzzyMatch function");
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    console.log("Inside matchName function"); 
    return source.filter((record) => record.name === soughtName);
  }
  