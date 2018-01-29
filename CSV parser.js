function parseCSV(inputString) {
  // Create empty Object to contain results
  let resultObj = {}

  // Split main string into individual rows:
  let rowArray = inputString.split('\n')

  // Put column headers from 1st row into a new array
  let keyArray = rowArray[0].split(',')
  
  // Take column header names from keyArray and set them as keynames in the result Object
  keyArray.forEach(function(el){
    resultObj[el.trim()] = []
  })

  // Loop through all remaining rows in the file in two steps
  // For each row, loop through each value in the row, and push each value into the appropriate Object key
  for (let i = 1; i < rowArray.length; i++) {

    // Split single row into array of values e.g. [1,"red t-shirt",10,20]
    let valArray =  rowArray[i].split(',')

    // New loop to read each value:
    for ( let i = 0; i < valArray.length; i++) {

      // Get keyname from keyArray based on the current index
      let keyname = keyArray[i].trim();

      // Push current value into keynamed array in Object
      let currValue = valArray[i];

      // Clean up values for integers or strings
      if (isNaN(parseInt(currValue))) {
        currValue = currValue.replace(/"/g,"").trim()
      } else {
        currValue = parseInt(currValue)
      }

      // Push cleaned value into the relevant Object key:
      resultObj[keyname].push(currValue)
    }

  }
  return resultObj
}
