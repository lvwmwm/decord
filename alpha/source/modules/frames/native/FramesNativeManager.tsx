// Module ID: 15694
// Function ID: 15695
// Name: FramesNativeManager
// Dependencies: [17, 6754, 1385, 15692, 15695, 10723, 5889, 1128, 2]

// Module 15694 (FramesNativeManager)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5889 */;
import leaveFrame from "leaveFrame" /* 10723 */;
import react_nativeDefault from "react-native" /* 15692 */;
import FramesStore from "FramesStore" /* 6754 */;
import PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import FramesManager from "FramesManager" /* 15695 */;
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
