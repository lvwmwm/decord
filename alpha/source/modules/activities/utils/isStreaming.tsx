// Module ID: 8625
// Function ID: 8626
// Name: isStreaming
// Dependencies: [2145, 6069, 2]
// Exports: default

// Module 8625 (isStreaming)
import Constants from "Constants" /* 2145 */;
import ActivityTypes from "ActivityTypes" /* 6069 */;
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
