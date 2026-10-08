// Module ID: 6999
// Function ID: 7000
// Name: hasFlag
// Dependencies: [1085, 1402, 2]
// Exports: default

// Module 6999 (hasFlag)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags, arg1) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag(num, arg1);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
