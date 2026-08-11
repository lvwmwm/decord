// Module ID: 11626
// Function ID: 11627
// Name: PortalKeyboardPlaceholderInner
// Dependencies: [19, 17, 21, 4303, 500, 712, 1626, 1628, 7643, 1493, 5372, 8397, 4168, 1894, 2]

// Module 11626 (PortalKeyboardPlaceholderInner)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = importDefault(1628)();
  const tmp = importDefault(7643)();
  const tmp2 = importDefault(1493)();
  let obj = require(8397) /* useGradientBottom */;
  obj = { style: null };
  const items = [callback(keyboardType.keyboardType, importDefault(1493)().width - rect.left - rect.right, importDefault(5372)(), tmp).container, obj.useGradientBottom()];
  obj[0] = items;
  return <closure_3 style={null} />;
}
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  let container = require(500) /* set */;
  let absoluteFillObject = null;
  if (container.isIOS()) {
    absoluteFillObject = closure_4.absoluteFillObject;
  }
  container = {};
  const merged = Object.assign(absoluteFillObject);
  container.borderTopWidth = closure_4.hairlineWidth;
  container.borderTopColor = importDefault(712).colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = tmp7(712).colors.BORDER_SUBTLE;
  }
  container.borderRightColor = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = tmp6.hairlineWidth;
  }
  container.borderRightWidth = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = tmp7(712).colors.BORDER_SUBTLE;
  }
  container.borderLeftColor = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = tmp6.hairlineWidth;
  }
  container.borderLeftWidth = hairlineWidth1;
  const APP_LAUNCHER = tmp(1626).KeyboardTypes.APP_LAUNCHER;
  container.backgroundColor = importDefault(712).colors.BACKGROUND_BASE_LOW;
  let tmpResult = tmp(500);
  if (tmpResult.isIOS()) {
    const tmp12 = arg1;
  }
  container.width = tmp12;
  tmpResult = tmp(500);
  if (tmpResult.isIOS()) {
    const tmp13 = arg2;
  }
  container.height = tmp13;
  return { container };
});
const jsxResult = jsx(function PortalKeyboardPlaceholder() {
  const tmp2 = importDefault(4168)();
  let isAndroidResult = importDefault(1894)() > 0;
  if (isAndroidResult) {
    let obj = require(500) /* set */;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== require(1626) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: null };
      obj[0] = tmp2;
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={null} />;
    }
  } else {
    tmp6 = null;
    const tmp5Result = require(500) /* set */;
  }
  return tmp6;
}, {});
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;
