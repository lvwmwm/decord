// Module ID: 5689
// Function ID: 48982
// Name: hasFlag
// Dependencies: [653, 1360, 2]
// Exports: default

// Module 5689 (hasFlag)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

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
      hasFlagResult = require(1360) /* hasFlag */.hasFlag(num2, arg1);
      const obj = require(1360) /* hasFlag */;
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
