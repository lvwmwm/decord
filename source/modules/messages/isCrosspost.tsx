// Module ID: 7723
// Function ID: 61472
// Name: isCrosspost
// Dependencies: [653, 1360, 2]
// Exports: default

// Module 7723 (isCrosspost)
import ME from "ME";

let closure_2;
let closure_3;
let closure_4;
({ MessageFlags: closure_2, MessageReferenceTypes: closure_3, MessageTypes: closure_4 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = require(1360) /* hasFlag */.hasFlag(type.flags, constants.IS_CROSSPOST);
    const obj = require(1360) /* hasFlag */;
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};
