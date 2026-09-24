// Module ID: 8332
// Function ID: 8333
// Name: isCrosspost
// Dependencies: [1078, 1389, 2]
// Exports: default

// Module 8332 (isCrosspost)
import FlagUtils from "FlagUtils" /* 1389 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

({ MessageFlags: c2, MessageReferenceTypes: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = FlagUtils.hasFlag(type.flags, constants.IS_CROSSPOST);
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};
