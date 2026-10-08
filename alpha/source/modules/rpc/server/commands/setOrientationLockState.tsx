// Module ID: 14580
// Function ID: 14581
// Name: setOrientationLockState
// Dependencies: [10612, 2023, 1096, 11137, 14547, 11134, 584, 2]

// Module 14580 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 2023 */;
import RPCErrorDefault from "RPCError" /* 11134 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11137 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14547 */;
import FramesStore from "FramesStore" /* 10612 */;
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants2.OrientationLockState;
const RPCErrors = Constants.RPCErrors;
let obj = {
  validation(number) {
    let allowResult;
    let allowResult1;
    let validResult;
    const obj = createRpcJoiSchemaObjectDefault(number);
    const obj2 = { lock_state: validResult.required(), picture_in_picture_lock_state: allowResult.optional(), grid_lock_state: allowResult1.optional() };
    const keys = obj.required().keys;
    obj.required();
    const numberResult = number.number();
    validResult = numberResult.valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
    const numberResult1 = number.number();
    const validResult3 = numberResult1.valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
    allowResult = validResult3.allow(null);
    const numberResult2 = number.number();
    const validResult4 = numberResult2.valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
    allowResult1 = validResult4.allow(null);
    return keys(obj2);
  },
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
        const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
        const tmp14 = new RPCErrorDefault(obj2, "No application.");
        throw tmp14;
      } else {
        const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(socket.context, socket.source.iframeId);
        if (null != frameByEmbeddedContext) {
          const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: frameByEmbeddedContext.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
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
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmpResult4 = RPCErrorDefault;
      const tmpResult21 = new tmpResult4(obj, "command not available from \"" + socket.source.type + "\" transport");
      throw tmpResult21;
    }
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default { [Constants.RPCCommands.SET_ORIENTATION_LOCK_STATE]: obj };
