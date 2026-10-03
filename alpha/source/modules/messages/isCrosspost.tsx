// Module ID: 7707
// Function ID: 7708
// Name: isCrosspost
// Dependencies: [1085, 1390, 2]
// Exports: default

// Module 7707 (isCrosspost)
import FlagUtils from "FlagUtils" /* 1390 */;
import Constants from "Constants" /* 1085 */;
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
