// Module ID: 8751
// Function ID: 8752
// Name: FramesNativeManager
// Dependencies: [5, 17, 8499, 8500, 1074, 2005, 4739, 7746, 1365, 8752, 8753, 1231, 8754, 8766, 5204, 1115, 1370, 573, 1110, 1255, 2]

// Module 8751 (FramesNativeManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import intl3 from "intl" /* 1115 */;
import v1 from "v1" /* 1255 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import Constants2 from "Constants" /* 2005 */;
import Constants3 from "Constants" /* 4739 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import react_nativeDefault from "react-native" /* 8752 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 8753 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8766 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 8499 */;
import WebView from "WebView" /* 7746 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import FramesManager from "FramesManager" /* 8754 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

function postMessageToWebView() {
  return obj(...arguments);
}
let obj = function _postMessageToWebView() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: closure_2_9.injectJavaScript(getPostMessageJavaScriptDefault(closure_0)), done: false };
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_0 = closure_3;
            const obj2 = closure_130_1(closure_130_2[11]);
            obj2.captureException(closure_0);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeEventEmitter = react_native.NativeEventEmitter;
const isLaunched = FramesConstants.isLaunched;
const ComponentActions = Constants.ComponentActions;
let closure_7 = Constants2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const TransportTypes = Constants3.TransportTypes;
const React4 = WebView.getWebViewProxy("FRAME_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  let self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class FramesNativeManager extends FramesManager {
  _initialize() {
    const self = this;
    super._initialize();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    obj = nativeEventEmitter;
    let addListenerResult;
    if (nativeEventEmitter != null) {
      addListenerResult = obj.addListener("onHostDestroy", () => {
        const managedFrame = self.getManagedFrame();
        obj = self;
        if (null != managedFrame) {
          obj.leaveFrame(managedFrame.id);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    const scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      scriptMessageSubscription.remove();
    }
    self.scriptMessageSubscription = closure_9.addOnMessageListener((data) => {
      let intl;
      let intl2;
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        const managedFrame = self.getManagedFrame();
        let tmp7 = typeof parsed === "object";
        const tmp3 = parsed;
        if (tmp7) {
          tmp7 = isLaunched(managedFrame);
        }
        if (tmp7) {
          tmp7 = null != managedFrame.data.iframeId;
        }
        if (tmp7) {
          const obj2 = { type: TransportTypes.POST_MESSAGE, origin: managedFrame.data.url, iframeId: managedFrame.data.iframeId };
          obj = WebViewPostMessageTransportDefault;
          obj.handleMessage(tmp3, obj2, postMessageToWebView);
        }
      } catch (tmp16) {
        const _SyntaxError = SyntaxError;
        if (tmp16 instanceof SyntaxError) {
          if (data.data === closure_7) {
            const managedFrame1 = self.getManagedFrame();
            const obj3 = self;
            if (null != managedFrame1) {
              obj3.leaveFrame(managedFrame1.id);
              const obj4 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl3.intl;
              intl2 = intl3.intl;
              show(obj4);
            }
          }
        } else {
          throw tmp16;
        }
      }
    });
  }
  _terminate() {
    super._terminate();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    const scriptMessageSubscription = this.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      scriptMessageSubscription.remove();
    }
  }
  showRPCDisconnectErrorUI(reason) {
    let code;
    let intl;
    let message;
    ({ code, message } = reason);
    obj = { title: intl.formatToPlainString(intl3.t.hbiAO6, { code }), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    show(obj);
  }
  getManagedFrame() {
    let frameByIframeId;
    if (null != this.iframeId) {
      frameByIframeId = FramesStore.getFrameByIframeId(tmp.iframeId);
    }
    return frameByIframeId;
  }
  leaveFrame(frameId) {
    this.releaseWebView();
    obj = GlobalUtils;
    if (obj.isNotNullish(frameId)) {
      const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId, lockState: null, pictureInPictureLockState: null };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
    super.leaveFrame(frameId);
  }
  releaseWebView() {
    const releaseIframeIdResult = this.releaseIframeId();
    if (null != releaseIframeIdResult) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      obj = { id: releaseIframeIdResult };
      ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
      closure_9.releaseWebView();
    }
    return releaseIframeIdResult;
  }
  releaseIframeId() {
    this.iframeId = undefined;
    return this.iframeId;
  }
  hasIframeId() {
    return null != this.iframeId;
  }
  getOrCreateIframeId() {
    const iframeId = this.iframeId;
    if (null != iframeId) {
      return iframeId;
    } else {
      obj = v1;
      const v4Result = obj.v4();
      tmp.iframeId = v4Result;
      return v4Result;
    }
  }
}
let closure_13 = FramesNativeManager.prototype;
FramesNativeManager.displayName = "FramesNativeManager";
const framesNativeManager = new FramesNativeManager();
const result = size.fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default framesNativeManager;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";
