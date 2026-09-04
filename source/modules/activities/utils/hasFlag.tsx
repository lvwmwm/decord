// Module ID: 7251
// Function ID: 7252
// Name: hasFlag
// Dependencies: [673, 1399, 2]
// Exports: default

// Module 7251 (hasFlag)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import hasFlag from "hasFlag" /* 1399 */;

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
