// Module ID: 13297
// Function ID: 101003
// Dependencies: []

// Module 13297
const OrientationLockState = require(dependencyMap[0]).OrientationLockState;
const _module = require(dependencyMap[1]);
const RPCErrors = _module.RPCErrors;
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default {
  [_module.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation(number) {
      let obj = importDefault(dependencyMap[2])(number);
      obj = {};
      const requiredResult = obj.required();
      let validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj.lock_state = validResult.required();
      const numberResult = number.number();
      validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      const numberResult1 = number.number();
      obj.picture_in_picture_lock_state = validResult.allow(null).optional();
      const allowResult = validResult.allow(null);
      const numberResult2 = number.number();
      const validResult1 = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj.grid_lock_state = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).allow(null).optional();
      return requiredResult.keys(obj);
    },
    handler(args) {
      let lock_state;
      let picture_in_picture_lock_state;
      ({ lock_state, picture_in_picture_lock_state } = args.args);
      const id = args.socket.application.id;
      if (null == id) {
        let tmp8 = importDefault(dependencyMap[4]);
        let obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj, "No application.");
        throw tmp8;
      } else {
        obj = importDefault(dependencyMap[3]);
        obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
        obj.dispatch(obj);
        const obj1 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: tmp };
        importDefault(dependencyMap[3]).dispatch(obj1);
      }
    }
  }
};
