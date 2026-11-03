// Module ID: 16537
// Function ID: 16538
// Name: FramesNativeManager
// Dependencies: [17, 6966, 1357, 16535, 16538, 11076, 6079, 1113, 2]

// Module 16537 (FramesNativeManager)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6079 */;
import leaveFrame from "leaveFrame" /* 11076 */;
import react_nativeDefault from "react-native" /* 16535 */;
import FramesStore from "FramesStore" /* 6966 */;
import PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import FramesManager from "FramesManager" /* 16538 */;
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
