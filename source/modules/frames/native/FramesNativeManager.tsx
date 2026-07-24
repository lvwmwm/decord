// Module ID: 10518
// Function ID: 81426
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5, 27, 10508, 653, 4155, 7592, 478, 10519, 10520, 1184, 10521, 4471, 1212, 1327, 10512, 686, 1207, 491, 10536, 2]

// Module 10518 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import getActivityIndicator from "get ActivityIndicator";
import isNonEmptyString from "isNonEmptyString";
import module_4471 from "module_4471";
import _get from "_get";
import getSystemLocale from "getSystemLocale";
import _inherits from "_inherits";
import { NativeEventEmitter } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ComponentActions } from "ME";
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_12 } from "items3";
import WebView from "WebView";
import isWindows from "isWindows";
import tmp5 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(module_4471(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
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
  return obj(...arguments);
}
const webViewProxy = WebView.getWebViewProxy("FRAME_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (isWindows.isAndroid()) {
  let prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(require("enforcing"));
}
tmp5.displayName = "FramesNativeManager";
tmp5 = new tmp5();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/frames/native/FramesNativeManager.tsx");

export default tmp5;
export const FRAME_WEB_VIEW_KEY = "FRAME_WEB_VIEW_KEY";
