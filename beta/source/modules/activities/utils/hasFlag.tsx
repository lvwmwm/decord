// Module ID: 6732
// Function ID: 6733
// Name: hasFlag
// Dependencies: [1086, 1391, 2]
// Exports: default

// Module 6732 (hasFlag)
import Constants from "Constants" /* 1086 */;
import FlagUtils from "FlagUtils" /* 1391 */;
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
