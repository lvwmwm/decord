// Module ID: 6173
// Function ID: 6174
// Dependencies: [5100, 2]
// Exports: default

// Module 6173
import HeaderRecord from "HeaderRecord";

let c0;
let closure_1;
({ FindResultDirections: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = require("set").fileFinishedImporting("modules/autocompleter/findNextSelectedResult.tsx");
function findNextSelectedResult(DOWN, closure_24, arr) {
  if (0 === arr.length) {
    return 0;
  } else {
    let tmp = closure_24;
    if (null != arg3) {
      tmp = arg3;
      if (arg3 === closure_24) {
        return closure_24;
      }
    }
    let num = 1;
    if (DOWN === constants.UP) {
      num = -1;
    }
    const sum = closure_24 + num;
    if (sum >= 0) {
      if (sum < length) {
        let tmp13Result = sum;
        if (arr[sum].type === constants2.HEADER) {
          tmp13Result = callback(DOWN, sum, arr, tmp);
        }
      }
      return tmp13Result;
    }
    let num2 = -1;
    if (sum < 0) {
      num2 = length;
    }
    tmp13Result = callback(DOWN, num2, arr, tmp);
    const tmp13 = callback;
  }
}

export default findNextSelectedResult;
