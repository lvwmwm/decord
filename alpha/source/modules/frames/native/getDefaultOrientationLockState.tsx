// Module ID: 18951
// Function ID: 18952
// Name: frames/getDefaultOrientationLockState
// Dependencies: [11553, 584, 2]
// Exports: setOrientationLockState

// Module 18951 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 11553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export function setOrientationLockState(frameId, application, arg2) {
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
}
