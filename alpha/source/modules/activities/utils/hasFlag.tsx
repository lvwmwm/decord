// Module ID: 7483
// Function ID: 7484
// Name: hasFlag
// Dependencies: [1072, 1396, 2]
// Exports: default

// Module 7483 (hasFlag)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1396 */;
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
