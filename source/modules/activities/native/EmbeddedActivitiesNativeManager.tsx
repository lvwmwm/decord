// Module ID: 10547
// Function ID: 81555
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5, 27, 1348, 4203, 1347, 4156, 653, 6702, 477, 10548, 10549, 1184, 10550, 4472, 1212, 10565, 3749, 675, 686, 10567, 5668, 3832, 10295, 1207, 1327, 491, 10568, 2]

// Module 10547 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import getActivityIndicator from "get ActivityIndicator";
import enforcing from "enforcing";
import isNonEmptyString from "isNonEmptyString";
import _get from "_get";
import importDefaultResult1 from "importDefaultResult1";
import _inherits from "_inherits";
import { NativeEventEmitter } from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY as closure_13 } from "items3";
import ME from "ME";
import WebView from "WebView";
import set from "set";
import tmp6 from "_createForOfIteratorHelperLoose";
import set from "_possibleConstructorReturn";

let closure_14;
let closure_15;
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
  const tmpResult = _get(isNonEmptyString(prototype), arg1, arg2);
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
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = ME);
const webViewProxy = WebView.getWebViewProxy("EMBEDDED_ACTIVITY_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (set.isAndroid()) {
  let prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(require("enforcing"));
}
tmp6 = new tmp6();
let result = set.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default tmp6;
export const EMBEDDED_ACTIVITY_WEB_VIEW_KEY = "EMBEDDED_ACTIVITY_WEB_VIEW_KEY";
