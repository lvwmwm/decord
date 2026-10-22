// Module ID: 15736
// Function ID: 15737
// Name: FramesNativeManager
// Dependencies: [17, 6761, 1385, 15734, 15737, 10735, 5896, 1128, 2]

// Module 15736 (FramesNativeManager)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5896 */;
import leaveFrame from "leaveFrame" /* 10735 */;
import react_nativeDefault from "react-native" /* 15734 */;
import FramesStore from "FramesStore" /* 6761 */;
import PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import FramesManager from "FramesManager" /* 15737 */;
import size from "module_2" /* 2 */;

let allFrames;

const NativeEventEmitter = react_native.NativeEventEmitter;
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  const self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class FramesNativeManager extends FramesManager {
  _initialize() {
    super._initialize();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    let obj = nativeEventEmitter;
    let addListenerResult;
    if (nativeEventEmitter != null) {
      addListenerResult = obj.addListener("onHostDestroy", () => {
        allFrames = allFrames.getAllFrames();
        for (const item10007 of allFrames) {
          let obj = leaveFrame;
          let leaveFrameResult = obj.leaveFrame(item10007.id);
          continue;
        }
      });
    }
    this.lifecycleSubscription = addListenerResult;
  }
  _terminate() {
    super._terminate();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
  }
  showRPCDisconnectErrorUI(reason) {
    let code;
    let intl;
    let message;
    ({ code, message } = reason);
    const obj = { title: intl.formatToPlainString(intl2.t.hbiAO6, { code }), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl2.intl;
    show(obj);
  }
}
let closure_5 = FramesNativeManager.prototype;
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const result = size.fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
