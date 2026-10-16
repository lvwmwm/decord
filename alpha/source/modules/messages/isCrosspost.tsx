// Module ID: 8289
// Function ID: 8290
// Name: isCrosspost
// Dependencies: [1087, 1405, 2]
// Exports: default

// Module 8289 (isCrosspost)
import FlagUtils from "FlagUtils" /* 1405 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ MessageFlags: c2, MessageReferenceTypes: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    const obj = FlagUtils;
    hasFlagResult = obj.hasFlag(type.flags, constants.IS_CROSSPOST);
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};
