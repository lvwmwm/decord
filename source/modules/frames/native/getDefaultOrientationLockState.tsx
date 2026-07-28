// Module ID: 15836
// Function ID: 121958
// Name: setOrientationLockState
// Dependencies: [10632, 686, 2]
// Exports: setOrientationLockState

// Module 15836 (setOrientationLockState)
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(id) {
  let defaultOrientationLockState = arg1;
  if (null == arg1) {
    let obj = require(10632) /* getIsTabletActivitySurface */;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(id);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: id.id, lockState: defaultOrientationLockState };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
  }
};
