// Module ID: 16982
// Function ID: 16983
// Name: frames/getDefaultOrientationLockState
// Dependencies: [9749, 577, 2]
// Exports: setOrientationLockState

// Module 16982 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 577 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 9749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(frameId, application, arg2) {
  let defaultOrientationLockState = arg2;
  if (arg2 == null) {
    defaultOrientationLockState = getDefaultOrientationLockState.getDefaultOrientationLockState(application);
  }
  if (null != defaultOrientationLockState) {
    const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId, lockState: defaultOrientationLockState };
    DispatcherDefault.dispatch(obj3);
  }
};
