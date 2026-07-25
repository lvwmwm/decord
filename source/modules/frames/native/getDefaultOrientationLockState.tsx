// Module ID: 15785
// Function ID: 121755
// Name: setOrientationLockState
// Dependencies: [10593, 686, 2]
// Exports: setOrientationLockState

// Module 15785 (setOrientationLockState)
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(id) {
  let defaultOrientationLockState = arg1;
  if (null == arg1) {
    let obj = require(10593) /* getIsTabletActivitySurface */;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(id);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: id.id, lockState: defaultOrientationLockState };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
  }
};
