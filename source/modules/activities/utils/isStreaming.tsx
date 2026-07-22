// Module ID: 7876
// Function ID: 62716
// Name: _isStreaming
// Dependencies: [1392, 3801, 2]
// Exports: default

// Module 7876 (_isStreaming)
import { validStreamURL } from "getAvatarURL";
import { ActivityTypes } from "explicitContentFromProto";
import result2 from "result2";

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
const result = result2.fileFinishedImporting("modules/activities/utils/isStreaming.tsx");

export default function isStreaming(items, arg1) {
  if (null == items) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(items)) {
      let someResult = items.some(_isStreaming);
    } else {
      someResult = _isStreaming(items);
    }
  }
};
