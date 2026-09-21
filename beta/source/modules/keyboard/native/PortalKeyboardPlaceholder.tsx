// Module ID: 12399
// Function ID: 12400
// Name: PortalKeyboardPlaceholder
// Dependencies: [19, 17, 21, 4758, 1368, 580, 1614, 558, 568, 1616, 7186, 1482, 7227, 8121, 4627, 1882, 2]

// Module 12399 (PortalKeyboardPlaceholder)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import KeyboardTypes from "KeyboardTypes" /* 1614 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1882 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7186 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 7227 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 8121 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_6 = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  let absoluteFillObject = null;
  if (obj.isIOS()) {
    absoluteFillObject = React4.absoluteFillObject;
  }
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject);
  obj2.borderTopWidth = React4.hairlineWidth;
  obj2.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = tmp7(580).colors.BORDER_SUBTLE;
  }
  obj2.borderRightColor = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = tmp6.hairlineWidth;
  }
  obj2.borderRightWidth = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = tmp7(580).colors.BORDER_SUBTLE;
  }
  obj2.borderLeftColor = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = tmp6.hairlineWidth;
  }
  obj2.borderLeftWidth = hairlineWidth1;
  const APP_LAUNCHER = tmp(1614).KeyboardTypes.APP_LAUNCHER;
  obj2.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj = PlatformUtils;
  if (tmpResult.isIOS()) {
    const tmp12 = arg1;
  }
  obj2.width = tmp12;
  tmpResult = PlatformUtils;
  if (tmpResult2.isIOS()) {
    const tmp13 = arg2;
  }
  obj2.height = tmp13;
  return { container: obj2 };
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((keyboardType) => {
  const cResult = c.c(3);
  const rect = useSafeAreaInsetsDefault();
  const tmp2 = useIsWindowLargeDefault();
  const tmp4 = closure_6(keyboardType.keyboardType, useWindowDimensionsDefault().width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp2);
  const tmp3 = useWindowDimensionsDefault();
  const gradientBottom = ClientThemesOverrides.useGradientBottom();
  if (cResult[0] === tmp4.container) {
    if (cResult[1] === gradientBottom) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const obj3 = { style: null };
  const items = [tmp4.container, gradientBottom];
  obj3.style = items;
  const tmp7 = <React3 style={null} />;
  cResult[0] = tmp4.container;
  cResult[1] = gradientBottom;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((keyboardType) => {
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  const tmp3 = closure_6(keyboardType.keyboardType, useWindowDimensionsDefault().width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp);
  const obj2 = { style: null };
  const items = [tmp3.container, ClientThemesOverrides.useGradientBottom()];
  obj2.style = items;
  return <React3 style={null} />;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsx(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = useKeyboardTypeDefault();
  let num = 0;
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    isAndroidResult = tmp(1368).isAndroid();
    const tmpResult = tmp(1368);
  }
  if (tmp4 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      if (cResult[0] !== tmp4) {
        const obj2 = { keyboardType: tmp4 };
        const tmp10 = <closure_7 keyboardType={tmp4} />;
        cResult[num] = tmp4;
        num = 1;
        cResult[1] = tmp10;
      }
    }
  } else {
    tmp6 = null;
    const tmpResult2 = tmp(1368);
  }
  return tmp6;
}) : (() => {
  const tmp2 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      const obj2 = { keyboardType: tmp2 };
      tmp6 = <closure_7 keyboardType={tmp2} />;
    }
  } else {
    tmp6 = null;
    const tmp5Result = PlatformUtils;
  }
  return tmp6;
}), {});
