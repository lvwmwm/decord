// Module ID: 8686
// Function ID: 8687
// Name: isStreaming
// Dependencies: [2026, 1087, 2]
// Exports: default

// Module 8686 (isStreaming)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 2026 */;
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
