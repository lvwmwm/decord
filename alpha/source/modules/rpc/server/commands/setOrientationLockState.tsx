// Module ID: 15723
// Function ID: 15724
// Name: setOrientationLockState
// Dependencies: [1098, 15699, 9257, 9263, 9256, 584, 2]

// Module 15723 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import getSocketFrameDefault from "getSocketFrame" /* 9256 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9257 */;
import RPCErrorDefault from "RPCError" /* 9263 */;
import Constants from "Constants" /* 1098 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15699 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let c2;
({ RPCCommands, RPCErrors: c2 } = Constants);
let obj = {};
const SET_ORIENTATION_LOCK_STATE = RPCCommands.SET_ORIENTATION_LOCK_STATE;
let obj2 = {
  handler(arg0) {
    let args;
    let lock_state;
    let picture_in_picture_lock_state;
    let socket;
    ({ socket, args } = arg0);
    ({ lock_state, picture_in_picture_lock_state } = args);
    const grid_lock_state = args.grid_lock_state;
    if (isPostMessageSocketDefault(socket)) {
      const id = socket.application.id;
      if (null == id) {
        const self3 = this;
        const self4 = this;
        const obj2 = { errorCode: constants.INVALID_COMMAND };
        const tmp15 = new RPCErrorDefault(obj2, "No application.");
        throw tmp15;
      } else {
        const tmp10 = getSocketFrameDefault(socket);
        if (null != tmp10) {
          const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: tmp10.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
          const tmpResult = DispatcherDefault;
          tmpResult.dispatch(obj3);
        }
        const obj4 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: grid_lock_state };
        const tmpResult3 = DispatcherDefault;
        tmpResult3.dispatch(obj4);
      }
    } else {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const obj = { errorCode: constants.INVALID_COMMAND };
      const tmpResult4 = RPCErrorDefault;
      const tmpResult21 = new tmpResult4(obj, "command not available from \"" + socket.source.type + "\" transport");
      throw tmpResult21;
    }
  }
};
obj[SET_ORIENTATION_LOCK_STATE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_ORIENTATION_LOCK_STATE, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default obj;
