// Module ID: 16194
// Function ID: 16195
// Name: setOrientationLockState
// Dependencies: [10778, 709, 2]
// Exports: setOrientationLockState

// Module 16194 (setOrientationLockState)
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(arg0, application) {
  let defaultOrientationLockState = arg2;
  if (arg2 == null) {
    let obj = require(10778) /* getIsTabletActivitySurface */;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(application);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: null, lockState: null };
    obj[1] = arg0;
    obj[2] = defaultOrientationLockState;
    importDefault(709).dispatch(obj);
    const obj2 = importDefault(709);
  }
};
