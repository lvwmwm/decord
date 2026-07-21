// Module ID: 7542
// Function ID: 60370
// Name: NativeModules
// Dependencies: []

// Module 7542 (NativeModules)
let NativeModules;
let forwardRef;
const _module = require(dependencyMap[0]);
({ useCallback: closure_3, useEffect: closure_4, useImperativeHandle: closure_5, useMemo: closure_6, useRef: closure_7, forwardRef } = _module);
importDefault(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ View: closure_8, NativeModules } = _module1);
const _module2 = require(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = _module2);
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
        // continue
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
let closure_13 = importDefault(dependencyMap[3])({ supportedCommands: ["ignore_users", "block_users", "leave_guild", "delete_message", "deauthorize_app", "share_with_parents", "YouTube", "TikTok", "setup", "strong", "em"] });
const resolveAssetSource = _module1.Image.resolveAssetSource;
let closure_15 = 0;
const RNCWebView = NativeModules.RNCWebView;
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
    defaultOriginWhitelist = require(dependencyMap[4]).defaultOriginWhitelist;
  }
  const setSupportMultipleWindows = overScrollMode.setSupportMultipleWindows;
  const setBuiltInZoomControls = overScrollMode.setBuiltInZoomControls;
  const setDisplayZoomControls = overScrollMode.setDisplayZoomControls;
  const nestedScrollEnabled = overScrollMode.nestedScrollEnabled;
  ({ messagingWithWebViewKeyEnabled, onMessage, renderLoading, renderError, source, nativeConfig } = overScrollMode);
  ({ startInLoadingState, onNavigationStateChange, onLoadStart, onError, onLoad, onLoadEnd, onLoadProgress, onHttpError, onRenderProcessGone, style, containerStyle, onShouldStartLoadWithRequest } = overScrollMode);
  const sum = closure_15 + 1;
  closure_15 = sum;
  const current = callback2("WebViewMessageHandler".concat(sum)).current;
  const require = current;
  const tmp17 = callback2(null);
  const importDefault = tmp17;
  const tmp = undefined === javaScriptEnabled || javaScriptEnabled;
  const tmp11 = undefined === setSupportMultipleWindows || setSupportMultipleWindows;
  const tmp12 = undefined === setBuiltInZoomControls || setBuiltInZoomControls;
  const tmp13 = undefined !== setDisplayZoomControls && setDisplayZoomControls;
  const tmp14 = undefined !== nestedScrollEnabled && nestedScrollEnabled;
  const tmp15 = fn(overScrollMode, []);
  const tmp2 = undefined === thirdPartyCookiesEnabled || thirdPartyCookiesEnabled;
  const tmp3 = undefined === scalesPageToFit || scalesPageToFit;
  const tmp4 = undefined !== allowsFullscreenVideo && allowsFullscreenVideo;
  const tmp5 = undefined !== allowFileAccess && allowFileAccess;
  const tmp6 = undefined !== saveFormDataDisabled && saveFormDataDisabled;
  const tmp7 = undefined === cacheEnabled || cacheEnabled;
  const tmp8 = undefined !== androidHardwareAccelerationDisabled && androidHardwareAccelerationDisabled;
  let obj = require(dependencyMap[4]);
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
        const RNCWebView = RNCWebView.RNCWebView;
        const result = RNCWebView.onShouldStartLoadWithRequestCallback(arg0, arg2);
      } else if (arg0) {
        const url = closure_13.loadUrl(tmp17.current, arg1);
      }
    }, [])
  };
  const webWiewLogic = obj.useWebWiewLogic(obj);
  const onShouldStartLoadWithRequest2 = webWiewLogic.onShouldStartLoadWithRequest;
  const dependencyMap = onShouldStartLoadWithRequest2;
  const onMessage2 = webWiewLogic.onMessage;
  ({ viewState, setViewState } = webWiewLogic);
  const lastErrorEvent = webWiewLogic.lastErrorEvent;
  const items = [setViewState, tmp17];
  ({ onLoadingStart, onHttpError: onHttpError2, onLoadingError, onLoadingFinish, onLoadingProgress, onRenderProcessGone: onRenderProcessGone2 } = webWiewLogic);
  tmp21(arg1, () => ({
    goForward() {
      return navigation.goForward(closure_1.current);
    },
    goBack() {
      return navigation.goBack(closure_1.current);
    },
    reload() {
      callback("LOADING");
      navigation.reload(closure_1.current);
    },
    stopLoading(current) {
      return navigation.stopLoading(closure_1.current);
    },
    postMessage(arg0) {
      return navigation.postMessage(closure_1.current, arg0);
    },
    injectJavaScript(PLAYER_FUNCTIONS, PLAYER_FUNCTIONS) {
      return navigation.injectJavaScript(closure_1.current, PLAYER_FUNCTIONS);
    },
    requestFocus(current) {
      return navigation.requestFocus(closure_1.current);
    },
    clearFormData(current) {
      return navigation.clearFormData(closure_1.current);
    },
    clearCache(current, current) {
      return navigation.clearCache(closure_1.current, current);
    },
    clearHistory(current) {
      return navigation.clearHistory(closure_1.current);
    }
  }), items);
  const items1 = [onMessage2, onShouldStartLoadWithRequest2];
  const tmp21 = callback(() => ({ onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2, onMessage: onMessage2 }), items1);
  const items2 = [current, tmp21];
  setViewState(() => {
    const result = tmp17(onShouldStartLoadWithRequest2[5]).registerCallableModule(current, tmp21);
  }, items2);
  if ("LOADING" === viewState) {
    if (!renderLoading) {
      renderLoading = require(dependencyMap[4]).defaultRenderLoading;
    }
    let renderLoadingResult = renderLoading();
  } else if ("ERROR" === viewState) {
    importDefault(dependencyMap[6])(null != lastErrorEvent, "lastErrorEvent expected to be non-null");
    if (!renderError) {
      renderError = require(dependencyMap[4]).defaultRenderError;
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
  const items3 = [importDefault(dependencyMap[7]).container, importDefault(dependencyMap[7]).webView, style];
  const items4 = [importDefault(dependencyMap[7]).container, containerStyle];
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
    const tmp32 = "GET" === source.method && source.body;
  }
  let component;
  if (null != nativeConfig) {
    component = nativeConfig.component;
  }
  if (!component) {
    component = importDefault(dependencyMap[8]);
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
  return callback3(closure_8, obj1);
});

export default Object.assign(forwardRefResult, { isFileUploadSupported: RNCWebView.isFileUploadSupported() });
