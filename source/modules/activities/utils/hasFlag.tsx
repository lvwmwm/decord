// Module ID: 5930
// Function ID: 5931
// Name: hasFlag
// Dependencies: [676, 1403, 2]
// Exports: default

// Module 5930 (hasFlag)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = require(1403) /* hasFlag */.hasFlag(num, arg1);
      const obj = require(1403) /* hasFlag */;
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
