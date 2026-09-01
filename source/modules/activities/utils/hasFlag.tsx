// Module ID: 6158
// Function ID: 6159
// Name: hasFlag
// Dependencies: [676, 1399, 2]
// Exports: default

// Module 6158 (hasFlag)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
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
