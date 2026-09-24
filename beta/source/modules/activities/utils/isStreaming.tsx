// Module ID: 8565
// Function ID: 8566
// Name: isStreaming
// Dependencies: [2008, 1078, 2]
// Exports: default

// Module 8565 (isStreaming)
import Constants from "Constants" /* 1078 */;
import Constants2 from "Constants" /* 2008 */;
import size from "module_2" /* 2 */;

function _isStreaming(type) {
  let tmp = type.type === ActivityTypes.STREAMING;
  if (tmp) {
    let isMatch = null != type.url;
    if (isMatch) {
      isMatch = validStreamURL.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
}
const validStreamURL = Constants2.validStreamURL;
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(noop) {
  if (null == noop) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(noop)) {
      let someResult = noop.some(_isStreaming);
    } else {
      someResult = noop.type === ActivityTypes.STREAMING;
      if (someResult) {
        let isMatch = null != noop.url;
        if (isMatch) {
          isMatch = validStreamURL.test(noop.url);
        }
        someResult = isMatch;
      }
    }
  }
};
