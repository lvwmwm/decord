// Module ID: 13418
// Function ID: 103192
// Dependencies: [4155, 482, 10499, 686, 10496, 2]

// Module 13418
import { OrientationLockState } from "items3";
import sum from "sum";

const RPCErrors = sum.RPCErrors;
const result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default {
  [sum.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation(number) {
      let obj = importDefault(10499)(number);
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
        let tmp8 = importDefault(10496);
        let obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj, "No application.");
        throw tmp8;
      } else {
        obj = importDefault(686);
        obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
        obj.dispatch(obj);
        const obj1 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: tmp };
        importDefault(686).dispatch(obj1);
      }
    }
  }
};
