// Module ID: 11958
// Function ID: 11959
// Name: doesOrientationMatchLockState
// Dependencies: [2143, 2]
// Exports: default

// Module 11958 (doesOrientationMatchLockState)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2143 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1 || arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
  let tmp4 = arg0;
  if (!tmp) {
    tmp = !tmp4 && arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT;
    const tmp5 = !tmp4 && arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT;
  }
  if (!tmp) {
    if (tmp4) {
      tmp4 = arg1 === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE;
    }
    tmp = tmp4;
  }
  return tmp;
};
