// Module ID: 7099
// Function ID: 57092
// Dependencies: []

// Module 7099
const _module = require(dependencyMap[0]);
({ FindResultDirections: closure_0, AutocompleterResultTypes: closure_1 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/autocompleter/findNextSelectedResult.tsx");
function findNextSelectedResult(DOWN, closure_27, closure_31, arg3) {
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
          tmp12Result = findNextSelectedResult(DOWN, sum, closure_31, tmp);
        }
      }
      return tmp12Result;
    }
    let num2 = -1;
    if (sum < 0) {
      num2 = length;
    }
    tmp12Result = findNextSelectedResult(DOWN, num2, closure_31, tmp);
    const tmp12 = findNextSelectedResult;
  }
}

export default findNextSelectedResult;
