// Module ID: 7953
// Function ID: 7954
// Name: isCrosspost
// Dependencies: [676, 1384, 2]
// Exports: default

// Module 7953 (isCrosspost)
import ME from "ME";

let c3;
let c4;
let obj1;
({ MessageFlags: obj1, MessageReferenceTypes: c3, MessageTypes: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = require(1384) /* hasFlag */.hasFlag(type.flags, constants.IS_CROSSPOST);
    const obj = require(1384) /* hasFlag */;
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};
