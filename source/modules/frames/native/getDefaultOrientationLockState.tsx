// Module ID: 15774
// Function ID: 121586
// Name: setOrientationLockState
// Dependencies: [10629, 686, 2]
// Exports: setOrientationLockState

// Module 15774 (setOrientationLockState)
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(id) {
  let defaultOrientationLockState = arg1;
  if (null == arg1) {
    let obj = require(10629) /* getIsTabletActivitySurface */;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(id);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: id.id, lockState: defaultOrientationLockState };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
  }
};
