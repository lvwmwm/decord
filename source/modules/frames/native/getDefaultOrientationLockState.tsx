// Module ID: 16539
// Function ID: 16540
// Name: setOrientationLockState
// Dependencies: [9563, 706, 2]
// Exports: setOrientationLockState

// Module 16539 (setOrientationLockState)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getIsTabletActivitySurface from "getIsTabletActivitySurface" /* 9563 */;

const result = set.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(arg0, application) {
  let defaultOrientationLockState = arg2;
  if (arg2 == null) {
    let obj = getIsTabletActivitySurface;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(application);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: null, lockState: null };
    obj[1] = arg0;
    obj[2] = defaultOrientationLockState;
    dispatcherDefault.dispatch(obj);
    const obj2 = dispatcherDefault;
  }
};
