// Module ID: 10591
// Function ID: 82647
// Name: doesOrientationMatchLockState
// Dependencies: []
// Exports: default

// Module 10591 (doesOrientationMatchLockState)
const OrientationLockState = require(dependencyMap[0]).OrientationLockState;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/native/doesOrientationMatchLockState.tsx");

export default function doesOrientationMatchLockState(arg0, arg1) {
  let tmp = arg0;
  let tmp2 = null == arg1;
  if (!tmp2) {
    tmp2 = arg1 === OrientationLockState.UNLOCKED;
  }
  if (!tmp2) {
    let tmp4 = !tmp;
    if (tmp4) {
      tmp4 = arg1 === OrientationLockState.PORTRAIT;
    }
    tmp2 = tmp4;
  }
  if (!tmp2) {
    if (tmp) {
      tmp = arg1 === OrientationLockState.LANDSCAPE;
    }
    tmp2 = tmp;
  }
  return tmp2;
};
