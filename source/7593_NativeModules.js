// Module ID: 7593
// Function ID: 60526
// Name: NativeModules
// Dependencies: [31, 27, 33, 116, 7594, 63, 44, 7596, 7597]

// Module 7593 (NativeModules)
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let NativeModules;
let closure_10;
let closure_11;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let forwardRef;
({ useCallback: closure_3, useEffect: closure_4, useImperativeHandle: closure_5, useMemo: closure_6, useRef: closure_7, forwardRef } = result);
({ View: closure_8, NativeModules } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let fn = this;
if (this) {
  fn = this.__rest;
}
if (!fn) {
  fn = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let tmp3 = key10007;
      let _Object3 = Object;
      let callResult = hasOwnProperty.call(arg0, key10007);
      if (callResult) {
        callResult = arg1.indexOf(key10007) < 0;
      }
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object4 = Object;
      if ("function" === typeof Object.getOwnPropertySymbols) {
        const _Object = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object2 = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  };
}
let closure_13 = require("codegenNativeCommands")({ supportedCommands: ["goBack", "goForward", "reload", "stopLoading", "injectJavaScript", "requestFocus", "postMessage", "clearFormData", "clearCache", "clearHistory", "loadUrl"] });
const resolveAssetSource = get_ActivityIndicator.Image.resolveAssetSource;
let c15 = 0;
let RNCWebView = NativeModules.RNCWebView;
const forwardRefResult = forwardRef((overScrollMode) => {
  let containerStyle;
  let messagingWithWebViewKeyEnabled;
  let nativeConfig;
  let onError;
  let onHttpError;
  let onHttpError2;
  let onLoad;
  let onLoadEnd;
  let onLoadProgress;
  let onLoadStart;
  let onLoadingError;
  let onLoadingFinish;
  let onLoadingProgress;
  let onLoadingStart;
  let onMessage;
  let onNavigationStateChange;
  let onRenderProcessGone;
  let onRenderProcessGone2;
  let onShouldStartLoadWithRequest;
  let renderError;
  let renderLoading;
  let setViewState;
  let source;
  let startInLoadingState;
  let style;
  let viewState;
  overScrollMode = overScrollMode.overScrollMode;
  let str = "always";
  if (undefined !== overScrollMode) {
    str = overScrollMode;
  }
  const javaScriptEnabled = overScrollMode.javaScriptEnabled;
  const thirdPartyCookiesEnabled = overScrollMode.thirdPartyCookiesEnabled;
  const scalesPageToFit = overScrollMode.scalesPageToFit;
  const allowsFullscreenVideo = overScrollMode.allowsFullscreenVideo;
  const allowFileAccess = overScrollMode.allowFileAccess;
  const saveFormDataDisabled = overScrollMode.saveFormDataDisabled;
  const cacheEnabled = overScrollMode.cacheEnabled;
  const androidHardwareAccelerationDisabled = overScrollMode.androidHardwareAccelerationDisabled;
  const androidLayerType = overScrollMode.androidLayerType;
  let str2 = "none";
  if (undefined !== androidLayerType) {
    str2 = androidLayerType;
  }
  let defaultOriginWhitelist = overScrollMode.originWhitelist;
  if (undefined === defaultOriginWhitelist) {
    defaultOriginWhitelist = current(onShouldStartLoadWithRequest2[4]).defaultOriginWhitelist;
  }
  const setSupportMultipleWindows = overScrollMode.setSupportMultipleWindows;
  const setBuiltInZoomControls = overScrollMode.setBuiltInZoomControls;
  const setDisplayZoomControls = overScrollMode.setDisplayZoomControls;
  const nestedScrollEnabled = overScrollMode.nestedScrollEnabled;
  ({ messagingWithWebViewKeyEnabled, onMessage, renderLoading, renderError, source, nativeConfig } = overScrollMode);
  ({ startInLoadingState, onNavigationStateChange, onLoadStart, onError, onLoad, onLoadEnd, onLoadProgress, onHttpError, onRenderProcessGone, style, containerStyle, onShouldStartLoadWithRequest } = overScrollMode);
  const sum = c15 + 1;
  c15 = sum;
  current = callback3("WebViewMessageHandler".concat(sum)).current;
  const tmp17 = callback3(null);
  const importDefault = tmp17;
  const tmp = undefined === javaScriptEnabled || javaScriptEnabled;
  const tmp11 = undefined === setSupportMultipleWindows || setSupportMultipleWindows;
  const tmp12 = undefined === setBuiltInZoomControls || setBuiltInZoomControls;
  const tmp13 = undefined !== setDisplayZoomControls && setDisplayZoomControls;
  const tmp14 = undefined !== nestedScrollEnabled && nestedScrollEnabled;
  const tmp15 = fn(overScrollMode, ["overScrollMode", "javaScriptEnabled", "thirdPartyCookiesEnabled", "scalesPageToFit", "allowsFullscreenVideo", "allowFileAccess", "saveFormDataDisabled", "cacheEnabled", "androidHardwareAccelerationDisabled", "androidLayerType", "originWhitelist", "setSupportMultipleWindows", "setBuiltInZoomControls", "setDisplayZoomControls", "nestedScrollEnabled", "startInLoadingState", "messagingWithWebViewKeyEnabled", "onNavigationStateChange", "onLoadStart", "onError", "onLoad", "onLoadEnd", "onLoadProgress", "onHttpError", "onRenderProcessGone", "onMessage", "renderLoading", "renderError", "style", "containerStyle", "source", "nativeConfig", "onShouldStartLoadWithRequest"]);
  const tmp2 = undefined === thirdPartyCookiesEnabled || thirdPartyCookiesEnabled;
  const tmp3 = undefined === scalesPageToFit || scalesPageToFit;
  const tmp4 = undefined !== allowsFullscreenVideo && allowsFullscreenVideo;
  const tmp5 = undefined !== allowFileAccess && allowFileAccess;
  const tmp6 = undefined !== saveFormDataDisabled && saveFormDataDisabled;
  const tmp7 = undefined === cacheEnabled || cacheEnabled;
  const tmp8 = undefined !== androidHardwareAccelerationDisabled && androidHardwareAccelerationDisabled;
  let obj = current(onShouldStartLoadWithRequest2[4]);
  obj = {
    onNavigationStateChange,
    onLoad,
    onError,
    onHttpErrorProp: onHttpError,
    onLoadEnd,
    onLoadProgress,
    onLoadStart,
    onRenderProcessGoneProp: onRenderProcessGone,
    onMessageProp: onMessage,
    startInLoadingState,
    originWhitelist: defaultOriginWhitelist,
    onShouldStartLoadWithRequestProp: onShouldStartLoadWithRequest,
    onShouldStartLoadWithRequestCallback: onMessage2((arg0, arg1, arg2) => {
      if (arg2) {
        const RNCWebView = outer1_9.RNCWebView;
        const result = RNCWebView.onShouldStartLoadWithRequestCallback(arg0, arg2);
      } else if (arg0) {
        const url = outer1_13.loadUrl(tmp17.current, arg1);
      }
    }, [])
  };
  const webWiewLogic = obj.useWebWiewLogic(obj);
  onShouldStartLoadWithRequest2 = webWiewLogic.onShouldStartLoadWithRequest;
  onMessage2 = webWiewLogic.onMessage;
  ({ viewState, setViewState } = webWiewLogic);
  const lastErrorEvent = webWiewLogic.lastErrorEvent;
  const items = [setViewState, tmp17];
  ({ onLoadingStart, onHttpError: onHttpError2, onLoadingError, onLoadingFinish, onLoadingProgress, onRenderProcessGone: onRenderProcessGone2 } = webWiewLogic);
  callback(arg1, () => ({
    goForward() {
      return outer2_13.goForward(outer1_1.current);
    },
    goBack() {
      return outer2_13.goBack(outer1_1.current);
    },
    reload() {
      outer1_4("LOADING");
      outer2_13.reload(outer1_1.current);
    },
    stopLoading(current) {
      return outer2_13.stopLoading(outer1_1.current);
    },
    postMessage(arg0) {
      return outer2_13.postMessage(outer1_1.current, arg0);
    },
    injectJavaScript(PLAYER_FUNCTIONS, PLAYER_FUNCTIONS) {
      return outer2_13.injectJavaScript(outer1_1.current, PLAYER_FUNCTIONS);
    },
    requestFocus(current) {
      return outer2_13.requestFocus(outer1_1.current);
    },
    clearFormData(current) {
      return outer2_13.clearFormData(outer1_1.current);
    },
    clearCache(current, current) {
      return outer2_13.clearCache(outer1_1.current, current);
    },
    clearHistory(current) {
      return outer2_13.clearHistory(outer1_1.current);
    }
  }), items);
  const items1 = [onMessage2, onShouldStartLoadWithRequest2];
  const tmp21 = callback2(() => ({ onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2, onMessage: onMessage2 }), items1);
  callback = tmp21;
  const items2 = [current, tmp21];
  setViewState(() => {
    const result = tmp17(onShouldStartLoadWithRequest2[5]).registerCallableModule(current, closure_5);
  }, items2);
  if ("LOADING" === viewState) {
    if (!renderLoading) {
      renderLoading = current(onShouldStartLoadWithRequest2[4]).defaultRenderLoading;
    }
    let renderLoadingResult = renderLoading();
  } else if ("ERROR" === viewState) {
    importDefault(onShouldStartLoadWithRequest2[6])(null != lastErrorEvent, "lastErrorEvent expected to be non-null");
    if (!renderError) {
      renderError = current(onShouldStartLoadWithRequest2[4]).defaultRenderError;
    }
    renderLoadingResult = renderError(lastErrorEvent.domain, lastErrorEvent.code, lastErrorEvent.description);
  } else {
    renderLoadingResult = null;
    if ("IDLE" !== viewState) {
      const _console3 = console;
      const concat = "RNCWebView invalid state encountered: ".concat;
      console.error("RNCWebView invalid state encountered: ".concat(viewState));
      renderLoadingResult = null;
    }
  }
  const items3 = [importDefault(onShouldStartLoadWithRequest2[7]).container, importDefault(onShouldStartLoadWithRequest2[7]).webView, style];
  const items4 = [importDefault(onShouldStartLoadWithRequest2[7]).container, containerStyle];
  let tmp31 = "number" !== typeof source && source;
  if (tmp31) {
    tmp31 = "method" in source;
  }
  if (tmp31) {
    if ("POST" === source.method) {
      if (source.headers) {
        const _console2 = console;
        console.warn("WebView: `source.headers` is not supported when using POST.");
      }
    }
    if (tmp32) {
      const _console = console;
      console.warn("WebView: `source.body` is not supported when using GET.");
    }
    tmp32 = "GET" === source.method && source.body;
  }
  let component;
  if (null != nativeConfig) {
    component = nativeConfig.component;
  }
  if (!component) {
    component = importDefault(onShouldStartLoadWithRequest2[8]);
  }
  obj = {};
  let tmp41 = "function" === typeof onMessage;
  if (!tmp41) {
    tmp41 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
    const tmp42 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
  }
  obj.messagingEnabled = tmp41;
  obj.messagingModuleName = current;
  obj.onLoadingError = onLoadingError;
  obj.onLoadingFinish = onLoadingFinish;
  obj.onLoadingProgress = onLoadingProgress;
  obj.onLoadingStart = onLoadingStart;
  obj.onHttpError = onHttpError2;
  obj.onRenderProcessGone = onRenderProcessGone2;
  obj.onMessage = onMessage2;
  obj.onShouldStartLoadWithRequest = onShouldStartLoadWithRequest2;
  obj.ref = tmp17;
  obj.source = resolveAssetSource(source);
  obj.style = items3;
  obj.overScrollMode = str;
  obj.javaScriptEnabled = tmp;
  obj.thirdPartyCookiesEnabled = tmp2;
  obj.scalesPageToFit = tmp3;
  obj.allowsFullscreenVideo = tmp4;
  obj.allowFileAccess = tmp5;
  obj.saveFormDataDisabled = tmp6;
  obj.cacheEnabled = tmp7;
  obj.androidHardwareAccelerationDisabled = tmp8;
  obj.androidLayerType = str2;
  obj.setSupportMultipleWindows = tmp11;
  obj.setBuiltInZoomControls = tmp12;
  obj.setDisplayZoomControls = tmp13;
  obj.nestedScrollEnabled = tmp14;
  let props;
  if (null != nativeConfig) {
    props = nativeConfig.props;
  }
  const obj1 = { style: items4 };
  const items5 = [closure_10(component, Object.assign({}, tmp15, obj, props), "webViewKey"), renderLoadingResult];
  obj1.children = items5;
  return callback4(closure_8, obj1);
});

export default Object.assign(forwardRefResult, { isFileUploadSupported: RNCWebView.isFileUploadSupported() });
