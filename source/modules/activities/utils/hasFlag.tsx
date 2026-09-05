// Module ID: 7313
// Function ID: 7314
// Name: hasFlag
// Dependencies: [1074, 1384, 2]
// Exports: default

// Module 7313 (hasFlag)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import hasFlag from "hasFlag" /* 1384 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag.hasFlag(num, arg1);
      const obj = hasFlag;
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
