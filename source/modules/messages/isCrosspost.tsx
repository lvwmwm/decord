// Module ID: 8188
// Function ID: 8189
// Name: isCrosspost
// Dependencies: [676, 1403, 2]
// Exports: default

// Module 8188 (isCrosspost)
import ME from "ME";

let c3;
let c4;
let obj1;
({ MessageFlags: obj1, MessageReferenceTypes: c3, MessageTypes: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = require(1403) /* hasFlag */.hasFlag(type.flags, constants.IS_CROSSPOST);
    const obj = require(1403) /* hasFlag */;
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};
