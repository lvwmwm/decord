// Module ID: 8711
// Function ID: 8712
// Dependencies: [6092, 2]
// Exports: default

// Module 8711
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6092 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ FindResultDirections: _window, AutocompleterResultTypes: map } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/findNextSelectedResult.tsx");
function findNextSelectedResult(DOWN, selectedIndex, arr, arg3) {
  if (0 === arr.length) {
    return 0;
  } else {
    let tmp = selectedIndex;
    if (null != arg3) {
      tmp = arg3;
      if (arg3 === selectedIndex) {
        return selectedIndex;
      }
    }
    let num = 1;
    if (DOWN === _window.UP) {
      num = -1;
    }
    const sum = selectedIndex + num;
    if (sum >= 0) {
      let tmp13Result;
      if (sum < arr.length) {
        tmp13Result = sum;
        if (arr[sum].type === map.HEADER) {
          tmp13Result = findNextSelectedResult(DOWN, sum, arr, tmp);
        }
      }
      return tmp13Result;
    }
    let num2 = -1;
    const tmp13 = findNextSelectedResult;
    if (sum < 0) {
      num2 = length;
    }
    tmp13Result = tmp13(DOWN, num2, arr, tmp);
  }
}
let c2 = findNextSelectedResult;

export default findNextSelectedResult;
