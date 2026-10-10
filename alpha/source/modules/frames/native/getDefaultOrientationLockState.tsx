// Module ID: 17682
// Function ID: 17683
// Name: frames/getDefaultOrientationLockState
// Dependencies: [10922, 584, 2]
// Exports: setOrientationLockState

// Module 17682 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 10922 */;
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
