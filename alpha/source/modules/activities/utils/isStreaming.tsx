// Module ID: 9524
// Function ID: 9525
// Name: isStreaming
// Dependencies: [2145, 6015, 2]
// Exports: default

// Module 9524 (isStreaming)
import Constants from "Constants" /* 2145 */;
import ActivityTypes from "ActivityTypes" /* 6015 */;
import size from "module_2" /* 2 */;

function _isStreaming(type) {
  let tmp = type.type === ActivityTypes.ActivityTypes.STREAMING;
  if (tmp) {
    const isMatch = null != type.url && validStreamURL.test(type.url);
    tmp = isMatch;
  }
  return tmp;
}
const validStreamURL = Constants.validStreamURL;
const result = size.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(type) {
  let tmp = null != type;
  if (tmp) {
    let someResult;
    const _Array = Array;
    if (Array.isArray(type)) {
      someResult = type.some(_isStreaming);
    } else {
      someResult = type.type === ActivityTypes.ActivityTypes.STREAMING;
      if (someResult) {
        const isMatch = null != type.url && validStreamURL.test(type.url);
        someResult = isMatch;
      }
    }
    tmp = someResult;
  }
  return tmp;
};
