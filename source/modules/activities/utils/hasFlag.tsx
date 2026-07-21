// Module ID: 5685
// Function ID: 48929
// Name: hasFlag
// Dependencies: []
// Exports: default

// Module 5685 (hasFlag)
const ActivityFlags = require(dependencyMap[0]).ActivityFlags;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      flags = flags.flags;
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      hasFlagResult = require(dependencyMap[1]).hasFlag(num2, arg1);
      const obj = require(dependencyMap[1]);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
