// Module ID: 11358
// Function ID: 88282
// Name: PortalKeyboardPlaceholderInner
// Dependencies: [31, 27, 33, 4130, 477, 689, 1555, 1557, 8133, 1450, 5163, 8829, 3996, 1823, 2]

// Module 11358 (PortalKeyboardPlaceholderInner)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = importDefault(1557)();
  const tmp = importDefault(8133)();
  const tmp2 = importDefault(1450)();
  let obj = require(8829) /* useGradientBottom */;
  obj = {};
  const items = [callback(keyboardType.keyboardType, importDefault(1450)().width - rect.left - rect.right, importDefault(5163)(), tmp).container, obj.useGradientBottom()];
  obj.style = items;
  return <closure_3 />;
}
({ View: closure_3, StyleSheet: closure_4 } = get_ActivityIndicator);
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2, arg3) => {
  let obj = {};
  obj = {};
  let absoluteFillObject = null;
  if (obj3.isIOS()) {
    absoluteFillObject = closure_4.absoluteFillObject;
  }
  const merged = Object.assign(absoluteFillObject);
  obj["borderTopWidth"] = closure_4.hairlineWidth;
  obj["borderTopColor"] = importDefault(689).colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = importDefault(689).colors.BORDER_SUBTLE;
  }
  obj["borderRightColor"] = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = closure_4.hairlineWidth;
  }
  obj["borderRightWidth"] = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = importDefault(689).colors.BORDER_SUBTLE;
  }
  obj["borderLeftColor"] = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = closure_4.hairlineWidth;
  }
  obj["borderLeftWidth"] = hairlineWidth1;
  const APP_LAUNCHER = require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER;
  obj["backgroundColor"] = importDefault(689).colors.BACKGROUND_BASE_LOW;
  obj3 = require(477) /* set */;
  if (obj4.isIOS()) {
    const tmp16 = arg1;
  }
  obj["width"] = tmp16;
  obj4 = require(477) /* set */;
  if (obj5.isIOS()) {
    const tmp19 = arg2;
  }
  obj["height"] = tmp19;
  obj.container = obj;
  return obj;
});
const jsxResult = jsx(function PortalKeyboardPlaceholder() {
  const tmp = importDefault(3996)();
  let isAndroidResult = importDefault(1823)() > 0;
  if (isAndroidResult) {
    let obj = require(477) /* set */;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    let tmp7 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: tmp };
      tmp7 = <PortalKeyboardPlaceholderInner keyboardType={tmp} />;
    }
  } else {
    tmp7 = null;
    const obj2 = require(477) /* set */;
  }
  return tmp7;
}, {});
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;
