// Module ID: 305
// Function ID: 4607
// Name: _isNativeReflectConstruct
// Dependencies: [65, 77, 29, 6, 7, 15, 17, 18, 31, 27, 33, 306, 307, 44, 79, 308, 309, 310, 311, 304, 312, 313, 314, 48, 315, 316]

// Module 305 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";
import _objectWithoutProperties from "_objectWithoutProperties";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import infoLog from "infoLog";
import _isViewable from "_isViewable";
import horizontalOrDefault from "horizontalOrDefault";
import closure_13 from "result";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import tmp5 from "_isNativeReflectConstruct";

let Platform;
let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getScrollingThreshold(arg0, arg1) {
  return arg0 * arg1 / 2;
}
let closure_4 = ["onContentSizeChange"];
({ cloneElement: closure_14, isValidElement: closure_15 } = result);
({ I18nManager: closure_16, Platform, RefreshControl: closure_17, ScrollView: closure_18, StyleSheet } = get_ActivityIndicator);
({ View: closure_20, findNodeHandle: closure_21 } = get_ActivityIndicator);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
let c24 = false;
let c25 = "";
tmp5.contextType = require("context").VirtualizedListContext;
let items = [{ scale: -1 }];
let items1 = [{ scaleX: -1 }];
const styles = StyleSheet.create({ verticallyInverted: { transform: items }, horizontallyInverted: { transform: items1 }, debug: { flex: 1 }, debugOverlayBase: { position: "absolute", top: 0, right: 0 }, debugOverlay: { bottom: 0, width: 20, borderColor: "blue", borderWidth: 1 }, debugOverlayFrame: { left: 0, backgroundColor: "orange" }, debugOverlayFrameLast: { left: 0, borderColor: "green", borderWidth: 2 }, debugOverlayFrameVis: { left: 0, borderColor: "red", borderWidth: 2 } });

export default tmp5;
