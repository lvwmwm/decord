// Module ID: 5928
// Function ID: 5929
// Name: hasFlag
// Dependencies: [676, 1384, 2]
// Exports: default

// Module 5928 (hasFlag)
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
      hasFlagResult = require(1384) /* hasFlag */.hasFlag(num, arg1);
      const obj = require(1384) /* hasFlag */;
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
