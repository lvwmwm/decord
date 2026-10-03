// Module ID: 7931
// Function ID: 7932
// Name: isStreaming
// Dependencies: [2011, 1085, 2]
// Exports: default

// Module 7931 (isStreaming)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 2011 */;
import size from "module_2" /* 2 */;

function _isStreaming(type) {
  let tmp = type.type === ActivityTypes.STREAMING;
  if (tmp) {
    const isMatch = null != type.url && validStreamURL.test(type.url);
    tmp = isMatch;
  }
  return tmp;
}
const validStreamURL = Constants2.validStreamURL;
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(react) {
  let tmp = null != react;
  if (tmp) {
    let someResult;
    const _Array = Array;
    if (Array.isArray(react)) {
      someResult = react.some(_isStreaming);
    } else {
      someResult = react.type === ActivityTypes.STREAMING;
      if (someResult) {
        const isMatch = null != react.url && validStreamURL.test(react.url);
        someResult = isMatch;
      }
    }
    tmp = someResult;
  }
  return tmp;
};
