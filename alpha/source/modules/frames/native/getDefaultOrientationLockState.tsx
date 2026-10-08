// Module ID: 17458
// Function ID: 17459
// Name: frames/getDefaultOrientationLockState
// Dependencies: [10734, 584, 2]
// Exports: setOrientationLockState

// Module 17458 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 10734 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(frameId, application, arg2) {
  let defaultOrientationLockState = arg2;
  if (arg2 == null) {
    const obj = getDefaultOrientationLockState;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(application);
  }
  if (null != defaultOrientationLockState) {
    const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId, lockState: defaultOrientationLockState };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
};
