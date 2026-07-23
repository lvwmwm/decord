// Module ID: 7104
// Function ID: 57126
// Dependencies: [5043, 2]

// Module 7104
import HeaderRecord from "HeaderRecord";

let closure_0;
let closure_1;
({ FindResultDirections: closure_0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = require("set").fileFinishedImporting("modules/autocompleter/findNextSelectedResult.tsx");
function findNextSelectedResult(DOWN, closure_27, closure_31) {
  if (0 === closure_31.length) {
    return 0;
  } else {
    let tmp = closure_27;
    if (null != arg3) {
      tmp = arg3;
      if (arg3 === closure_27) {
        return closure_27;
      }
    }
    let num = 1;
    if (DOWN === constants.UP) {
      num = -1;
    }
    const sum = closure_27 + num;
    if (sum >= 0) {
      if (sum < length) {
        let tmp12Result = sum;
        if (closure_31[sum].type === constants2.HEADER) {
          tmp12Result = callback(DOWN, sum, closure_31, tmp);
        }
      }
      return tmp12Result;
    }
    let num2 = -1;
    if (sum < 0) {
      num2 = length;
    }
    tmp12Result = callback(DOWN, num2, closure_31, tmp);
    const tmp12 = callback;
  }
}

export default findNextSelectedResult;
