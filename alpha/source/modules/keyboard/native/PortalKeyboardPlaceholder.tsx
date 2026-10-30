// Module ID: 13760
// Function ID: 13761
// Name: PortalKeyboardPlaceholder
// Dependencies: [19, 17, 21, 5009, 1376, 575, 1624, 1626, 7106, 1492, 5605, 9800, 5204, 1892, 2]

// Module 13760 (PortalKeyboardPlaceholder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import KeyboardTypes from "KeyboardTypes" /* 1624 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1892 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5204 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5605 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7106 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9800 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function PortalKeyboardPlaceholderInner(keyboardType) {
  keyboardType = keyboardType.keyboardType;
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  const items = [closure_6(keyboardType, tmp2.width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp).container, ];
  const tmp3 = closure_6(keyboardType, tmp2.width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp);
  const obj = ClientThemesOverrides;
  items[1] = obj.useGradientBottom();
  return <_false style={items} />;
}
({ View: c3, StyleSheet: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  let BORDER_SUBTLE;
  let BORDER_SUBTLE1;
  let hairlineWidth;
  let hairlineWidth1;
  let tmp12;
  let tmp13;
  let absoluteFillObject = null;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    absoluteFillObject = React3.absoluteFillObject;
  }
  const obj2 = { borderTopWidth: React3.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderRightColor: BORDER_SUBTLE, borderRightWidth: hairlineWidth, borderLeftColor: BORDER_SUBTLE1, borderLeftWidth: hairlineWidth1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: tmp12, height: tmp13 };
  const merged = Object.assign(absoluteFillObject);
  BORDER_SUBTLE = undefined;
  if (arg3) {
    BORDER_SUBTLE = tmp7(575).colors.BORDER_SUBTLE;
  }
  hairlineWidth = undefined;
  if (arg3) {
    hairlineWidth = tmp6.hairlineWidth;
  }
  BORDER_SUBTLE1 = undefined;
  if (arg3) {
    BORDER_SUBTLE1 = tmp7(575).colors.BORDER_SUBTLE;
  }
  hairlineWidth1 = undefined;
  if (arg3) {
    hairlineWidth1 = tmp6.hairlineWidth;
  }
  const APP_LAUNCHER = tmp(1624).KeyboardTypes.APP_LAUNCHER;
  const tmpResult = PlatformUtils;
  if (tmpResult.isIOS()) {
    tmp12 = arg1;
  }
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isIOS()) {
    tmp13 = arg2;
  }
  return { container: obj2 };
});
const jsxResult = jsx(function PortalKeyboardPlaceholder() {
  let tmp6;
  const tmp2 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    const obj = PlatformUtils;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    tmp6 = null;
    if (!isAndroidResult) {
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={tmp2} />;
    }
  } else {
    tmp6 = null;
    PlatformUtils;
  }
  return tmp6;
}, {});
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;
