// Module ID: 7717
// Function ID: 61435
// Name: isCrosspost
// Dependencies: []
// Exports: default

// Module 7717 (isCrosspost)
const _module = require(dependencyMap[0]);
({ MessageFlags: closure_2, MessageReferenceTypes: closure_3, MessageTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/messages/isCrosspost.tsx");

export default function isCrosspost(type) {
  let hasFlagResult = type.type === constants3.DEFAULT;
  if (hasFlagResult) {
    hasFlagResult = require(dependencyMap[1]).hasFlag(type.flags, constants.IS_CROSSPOST);
    const obj = require(dependencyMap[1]);
  }
  if (hasFlagResult) {
    hasFlagResult = null != type.messageReference;
  }
  if (hasFlagResult) {
    hasFlagResult = type.messageReference.type !== constants2.FORWARD;
  }
  return hasFlagResult;
};
