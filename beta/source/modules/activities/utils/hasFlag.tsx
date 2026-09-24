// Module ID: 7589
// Function ID: 7590
// Name: hasFlag
// Dependencies: [1078, 1389, 2]
// Exports: default

// Module 7589 (hasFlag)
import Constants from "Constants" /* 1078 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags, arg1) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = FlagUtils.hasFlag(num, arg1);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
