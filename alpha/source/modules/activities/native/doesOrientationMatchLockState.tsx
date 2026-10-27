// Module ID: 11461
// Function ID: 11462
// Name: doesOrientationMatchLockState
// Dependencies: [2026, 2]
// Exports: default

// Module 11461 (doesOrientationMatchLockState)
import Constants from "Constants" /* 2026 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants.OrientationLockState;
const result = size.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = null == arg1 || arg1 === OrientationLockState.UNLOCKED;
  let tmp3 = arg0;
  if (!tmp) {
    tmp = !tmp3 && arg1 === OrientationLockState.PORTRAIT;
    const tmp4 = !tmp3 && arg1 === OrientationLockState.PORTRAIT;
  }
  if (!tmp) {
    if (tmp3) {
      tmp3 = arg1 === OrientationLockState.LANDSCAPE;
    }
    tmp = tmp3;
  }
  return tmp;
};
