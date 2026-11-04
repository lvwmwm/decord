// Module ID: 19362
// Function ID: 19363
// Name: frames/getDefaultOrientationLockState
// Dependencies: [11988, 572, 2]
// Exports: setOrientationLockState

// Module 19362 (frames/getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 572 */;
import getDefaultOrientationLockState from "getDefaultOrientationLockState" /* 11988 */;
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
