// Module ID: 16256
// Function ID: 16257
// Name: frames/getDefaultOrientationLockState
// Dependencies: [8903, 573, 2]
// Exports: setOrientationLockState

// Module 16256 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 8903 */;
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
