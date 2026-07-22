// Module ID: 15610
// Function ID: 119091
// Name: setOrientationLockState
// Dependencies: []
// Exports: setOrientationLockState

// Module 15610 (setOrientationLockState)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/frames/native/getDefaultOrientationLockState.tsx");

export const setOrientationLockState = function setOrientationLockState(id) {
  let defaultOrientationLockState = arg1;
  if (null == arg1) {
    let obj = require(dependencyMap[0]);
    defaultOrientationLockState = obj.getDefaultOrientationLockState(id);
  }
  if (null != defaultOrientationLockState) {
    obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: id.id, lockState: defaultOrientationLockState };
    importDefault(dependencyMap[1]).dispatch(obj);
    const obj2 = importDefault(dependencyMap[1]);
  }
};
