// Module ID: 10497
// Function ID: 81954
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10497 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AnalyticEvents: closure_9, RPCCloseCodes: closure_10 } = arg1(dependencyMap[6]));
const tmp3 = (arg0) => {
  class FramesManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, FramesManager);
      items1 = [...items];
      obj = closure_6(FramesManager);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      FramesManager = tmp2Result;
      tmp2Result.actions = {
        RPC_APP_DISCONNECTED(arg0) {
              tmp2Result.handleRPCDisconnect(arg0);
            },
        FRAME_LAUNCH(applicationId) {
              const result = tmp2Result(closure_2[7]).trackFrameSessionStart(applicationId.applicationId);
            },
        FRAME_LAUNCH_FAIL(applicationId) {
              const result = tmp2Result(closure_2[8]).discardPendingFrameLaunch(applicationId.applicationId);
            },
        FRAME_STOP(applicationId) {
              tmp2Result(closure_2[7]).trackFrameSessionEnd(applicationId.applicationId);
            }
      };
      tmp2Result.handleRPCDisconnect = (reason) => {
        reason = reason.reason;
        const id = reason.application.id;
        if (null != id) {
          if (null != reason) {
            const connectedFrame = connectedFrame.getConnectedFrame();
            let applicationId;
            if (null != connectedFrame) {
              applicationId = connectedFrame.applicationId;
            }
            if (applicationId === id) {
              let obj = { applicationId: id };
              tmp2Result.leaveFrame(obj);
              if (reason.code !== constants2.CLOSE_NORMAL) {
                obj = callback(closure_2[9]);
                obj = {};
                ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
                obj.application_id = id;
                obj.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
                const result = tmp2Result.showRPCDisconnectErrorUI(reason);
              }
            }
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = FramesManager;
  callback2(FramesManager, arg0);
  return callback(FramesManager);
}(importDefault(dependencyMap[10]));
tmp3.displayName = "FramesManager";
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/frames/FramesManager.tsx");

export default tmp3;
