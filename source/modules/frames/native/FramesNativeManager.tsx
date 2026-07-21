// Module ID: 10478
// Function ID: 81160
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10478 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_7(closure_6(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
function postMessageToWebView() {
  return _postMessageToWebView(...arguments);
}
function _postMessageToWebView() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _postMessageToWebView = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const NativeEventEmitter = arg1(dependencyMap[7]).NativeEventEmitter;
let closure_10 = importDefault(dependencyMap[8]);
const ComponentActions = arg1(dependencyMap[9]).ComponentActions;
let closure_12 = arg1(dependencyMap[10]).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const webViewProxy = arg1(dependencyMap[11]).getWebViewProxy("FRAME_WEB_VIEW_KEY");
const obj = arg1(dependencyMap[11]);
let nativeEventEmitter = null;
if (obj2.isAndroid()) {
  const prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(importDefault(dependencyMap[13]));
}
let tmp5 = (arg0) => {
  class FramesNativeManager {
    constructor() {
      self = this;
      tmp = closure_3(this, FramesNativeManager);
      obj = closure_6(FramesNativeManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = FramesNativeManager;
  callback2(FramesNativeManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      const FramesNativeManager = this;
      callback5(FramesNativeManager, "_initialize", this, 3)([]);
      const lifecycleSubscription = this.lifecycleSubscription;
      if (null != lifecycleSubscription) {
        lifecycleSubscription.remove();
      }
      let addListenerResult;
      if (null != closure_14) {
        addListenerResult = closure_14.addListener("onHostDestroy", () => {
          const connectedFrame = store.getConnectedFrame();
          if (null != connectedFrame) {
            const obj = { applicationId: connectedFrame.applicationId };
            self.leaveFrame(obj);
          }
        });
      }
      self.lifecycleSubscription = addListenerResult;
      const scriptMessageSubscription = self.scriptMessageSubscription;
      if (null != scriptMessageSubscription) {
        scriptMessageSubscription.remove();
      }
      self.scriptMessageSubscription = closure_13.addOnMessageListener((data) => {
        const parsed = JSON.parse(data.data);
        const connectedFrame = store.getConnectedFrame();
        if (null != connectedFrame) {
          const url = connectedFrame.url;
        }
        let tmp5 = tmp4;
        if ("object" === typeof parsed) {
          tmp5 = null != tmp3;
        }
        if (tmp5) {
          callback(closure_2[16]).handleMessage(parsed, url, closure_17);
          const obj = callback(closure_2[16]);
        }
      });
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "_terminate",
    value() {
      callback5(FramesNativeManager, "_terminate", this, 3)([]);
      const lifecycleSubscription = this.lifecycleSubscription;
      if (null != lifecycleSubscription) {
        lifecycleSubscription.remove();
      }
      const scriptMessageSubscription = this.scriptMessageSubscription;
      if (null != scriptMessageSubscription) {
        scriptMessageSubscription.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "showRPCDisconnectErrorUI",
    value(arg0) {
      let code;
      let message;
      ({ code, message } = arg0);
      let obj = callback(closure_2[17]);
      obj = {};
      const intl = FramesNativeManager(closure_2[18]).intl;
      obj.title = intl.formatToPlainString(FramesNativeManager(closure_2[18]).t.hbiAO6, { code });
      obj.body = message;
      obj.show(obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "leaveFrame",
    value(applicationId) {
      const self = this;
      applicationId = applicationId.applicationId;
      this.releaseWebView();
      let obj = FramesNativeManager(closure_2[19]);
      if (obj.isNotNullish(applicationId)) {
        obj = { applicationId };
        self.clearFrameState(obj);
      }
    }
  };
  items[4] = {
    key: "clearFrameState",
    value(applicationId) {
      applicationId = applicationId.applicationId;
      let obj = callback(closure_2[20]);
      obj.stopFrame({ applicationId });
      obj = { -9223372036854775808: "subheader_localized", 9223372036854775807: "message", 9223372036854775807: 21, 9223372036854775807: "modal_top_pill_localized", applicationId };
      callback(closure_2[21]).dispatch(obj);
    }
  };
  items[5] = {
    key: "releaseWebView",
    value() {
      const releaseFrameIdResult = this.releaseFrameId();
      if (null != releaseFrameIdResult) {
        const ComponentDispatch = FramesNativeManager(closure_2[22]).ComponentDispatch;
        const obj = { id: releaseFrameIdResult };
        ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
        closure_13.releaseWebView();
      }
      return releaseFrameIdResult;
    }
  };
  items[6] = {
    key: "releaseFrameId",
    value() {
      this.frameId = undefined;
      return this.frameId;
    }
  };
  items[7] = {
    key: "hasFrameId",
    value() {
      return null != this.frameId;
    }
  };
  items[8] = {
    key: "getOrCreateFrameId",
    value() {
      const frameId = this.frameId;
      if (null != frameId) {
        return frameId;
      } else {
        const v4Result = FramesNativeManager(closure_2[23]).v4();
        tmp.frameId = v4Result;
        return v4Result;
      }
    }
  };
  return callback(FramesNativeManager, items);
}(importDefault(dependencyMap[24]));
tmp5.displayName = "FramesNativeManager";
tmp5 = new tmp5();
const obj2 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default tmp5;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";
