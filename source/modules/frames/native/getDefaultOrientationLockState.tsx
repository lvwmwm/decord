// Module ID: 15865
// Function ID: 15866
// Name: setOrientationLockState
// Dependencies: [10652, 709, 2]
// Exports: setOrientationLockState

// Module 15865 (setOrientationLockState)
const result = require("set").fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(id) {
  let defaultOrientationLockState = arg1;
  if (arg1 == null) {
    let obj = require(10652) /* getIsTabletActivitySurface */;
    defaultOrientationLockState = obj.getDefaultOrientationLockState(id);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null };
    obj[1] = id.id;
    obj[2] = defaultOrientationLockState;
    importDefault(709).dispatch(obj);
    const obj2 = importDefault(709);
  }
};
