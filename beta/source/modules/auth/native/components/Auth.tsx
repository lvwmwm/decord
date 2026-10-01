// Module ID: 15567
// Function ID: 15568
// Name: Auth
// Dependencies: [32, 19, 17, 11906, 1074, 21, 15568, 15569, 5936, 15578, 6423, 6370, 4836, 576, 15620, 6363, 1627, 6394, 15621, 6392, 6421, 1365, 1115, 15622, 6895, 15626, 2]

// Module 15567 (Auth)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1627 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6363 */;
import MFAUtils from "MFAUtils" /* 6370 */;
import BackgroundImageDefault from "BackgroundImage" /* 6394 */;
import _mod6423 from "module_6423" /* 6423 */;
import RegistrationHandoff from "RegistrationHandoff" /* 15568 */;
import RegistrationUtils from "RegistrationUtils" /* 15578 */;
import useIsHCaptchaModalOpenTracking from "useIsHCaptchaModalOpenTracking" /* 15620 */;
import AssetRegistry from "AssetRegistry" /* 15621 */;
import AuthManagerDefault from "AuthManager" /* 15622 */;
import useOrientationLockDefault from "useOrientationLock" /* 15626 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import Fragment from "Fragment" /* 21 */;
import RegistrationStepsUtils_mod from "RegistrationStepsUtils" /* 15569 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let importDefault, set;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj3;
let obj4;
let size;
let tmp;
let unpackModuleId;
const intl2 = tmp(1115);
const utils_PlatformUtils = tmp(1365);
const react2 = tmp(6392);
const Navigator3 = tmp(6421);
function getInitialAuthRouteStack() {
  let items1;
  obj = RegistrationHandoff;
  if (!obj.hasRegistrationHandoff()) {
    const items = [{ name: AuthStates.WELCOME }];
    items1 = items;
    const obj3 = { name: AuthStates.WELCOME };
  } else {
    items1 = [{ name: AuthStates.WELCOME }, ];
    const obj4 = { name: AuthStates.WELCOME };
    const obj5 = { name: AuthStates.LOGIN };
    items1[1] = obj5;
  }
  return items1;
}
function NavigatorWithCaptchaHook() {
  let Navigator2;
  let closure_1;
  let intl;
  let obj10;
  let obj11;
  let obj12;
  let obj7;
  let tmp18Result;
  let tmp8;
  let transparent;
  let tmp = require;
  obj = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp5 = useWideAuthViewDefault();
  const tmp6 = closure_16();
  const first = _slicedToArray(react.useState(getInitialAuthRouteStack), 1)[0];
  [tmp8, require] = react.useState(first[first.length - 1].name);
  _slicedToArray(react.useState(first[first.length - 1].name), 2);
  const effect = react.useEffect(() => {
    obj = RegistrationHandoff;
    const result = obj.clearRegistrationHandoff();
  }, []);
  const tmp10 = _slicedToArray(react.useState(false), 2);
  importDefault = tmp12;
  const first1 = tmp10[0];
  const obj2 = KeyboardChatScrollView;
  const keyboardState = obj2.useKeyboardState((height) => height.height);
  const callback = react.useCallback((arg0) => {
    let name;
    const tmp = require;
    if (arg0 != null) {
      if (arg0.routes[arg0.index] != null) {
        name = tmp3.name;
      }
    }
    if (name == null) {
      name = null;
    }
    tmp(name);
    closure_1(false);
  }, []);
  const obj3 = { backgroundImageSource: AssetRegistry, backgroundImageCover: true };
  const tmp19 = BackgroundImageDefault;
  const children = [closure_9(tmp19, obj3), ];
  const tmp16 = closure_11;
  const tmp17 = closure_10;
  if (tmp5) {
    const items1 = [tmp6.wideOuterContainer, ];
    let tmp25 = null;
    const obj5 = { value: tmp10[1], children: closure_9(closure_6, obj7) };
    const Provider = react2.WideAuthScrollContext.Provider;
    if (keyboardState > 200) {
      tmp25 = { paddingBottom: keyboardState };
      const obj6 = { paddingBottom: keyboardState };
    }
    items1[1] = tmp25;
    const items2 = [tmp6.wideCard, , ];
    let tmp26 = null;
    obj7 = { style: items1, children: closure_9(closure_6, obj10) };
    if (null != tmp8) {
      let num = obj[tmp8];
      if (num == null) {
        num = 520;
      }
      tmp26 = { height: num };
      const obj8 = { height: num };
    }
    items2[1] = tmp26;
    let obj9 = null;
    if (keyboardState > 200) {
      obj9 = { maxHeight: "100%", height: "100%", marginTop: 32, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    }
    items2[2] = obj9;
    obj10 = { style: items2, children: closure_9(Navigator2, obj11) };
    obj11 = { screens, containerStyle: tmp6.cardContainer, viewStyle: transparent, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false, initialRouteStack: first, onWillFocus: closure_5.dismiss, onStateChange: callback, headerStyle: first1 ? tmp6.wideHeader : tmp6.wideHeaderFlat, headerLeftContainerStyle: obj12, disableHeaderAnimation: true };
    transparent = null;
    Navigator2 = Navigator3.Navigator;
    if (tmp8 === AuthStates.WELCOME) {
      transparent = tmp6.transparent;
    }
    let num2 = 20;
    const tmpResult = utils_PlatformUtils;
    if (tmpResult.isAndroid()) {
      num2 = tmp4(576).space.PX_12;
    }
    obj12 = { paddingLeft: num2, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
    tmp18Result = tmp18(Provider, obj5);
  } else {
    ({ transparent: obj4.viewStyle, transparent: obj4.containerStyle } = tmp6);
    const obj13 = { screens: RegistrationStepsUtils, viewStyle: null, containerStyle: null, headerBackTitle: intl.string(intl2.t["13/7kX"]), initialRouteStack: first, onWillFocus: closure_5.dismiss, headerStyle: { borderBottomWidth: 0 } };
    const Navigator = Navigator3.Navigator;
    intl = intl2.intl;
    tmp18Result = tmp18(Navigator, obj13);
  }
  children[1] = tmp18Result;
  return tmp16(tmp17, { children });
}
({ Keyboard: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const AuthStates = Constants.AuthStates;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let RegistrationStepsUtils = RegistrationStepsUtils_mod;
RegistrationStepsUtils = RegistrationStepsUtils.getAllAuthScreens();
RegistrationStepsUtils = Object.entries(RegistrationStepsUtils);
const screens = fromEntries(RegistrationStepsUtils.map((item) => {
  let tmp;
  let tmp2;
  const headerLeft2 = function headerLeft(arg0) {
    let headerLeftResult;
    function backImage() {
      return closure_1_9(headerLeft(closure_1_2[8]).HeaderBackImage, {});
    }
    const tmp = headerLeft;
    if (null != headerLeft.headerLeft) {
      headerLeft = tmp.headerLeft;
      const obj2 = { backImage };
      const merged = Object.assign(arg0);
      headerLeftResult = headerLeft(obj2);
    } else {
      obj = { backImage };
      const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
      const merged1 = Object.assign(arg0);
      headerLeftResult = React4(BackButtonWithTracking, obj);
    }
    return headerLeftResult;
  };
  [tmp, tmp2] = item;
  const items = [tmp, ];
  obj = { headerMode: "screen" };
  let merged = Object.assign(tmp2);
  let obj2 = null;
  if (tmp2.fullscreen) {
    obj2 = { fullscreen: false, headerTransparent: false };
  }
  let merged1 = Object.assign(obj2);
  let tmp6 = null;
  if (tmp !== AuthStates.MFA) {
    tmp6 = null;
    if (tmp !== AuthStates.WELCOME) {
      tmp6 = { headerLeft: headerLeft2 };
      const obj3 = { headerLeft: headerLeft2 };
    }
  }
  const merged2 = Object.assign(tmp6);
  const items1 = [, , ];
  ({ REGISTER_IDENTITY: arr2[0], LOGIN: arr2[1], AGE_GATE_UNDERAGE: arr2[2] } = AuthStates);
  let tmp8 = null;
  set = new Set(items1);
  if (set.has(tmp)) {
    tmp8 = { cardStyleInterpolator: _mod6423.CardStyleInterpolators.forFadeFromCenter };
    const obj4 = { cardStyleInterpolator: _mod6423.CardStyleInterpolators.forFadeFromCenter };
  }
  const merged3 = Object.assign(tmp8);
  items[1] = obj;
  return items;
}));
const LOGIN = AuthStates.LOGIN;
let num = 540;
if (MFAUtils.hasWebAuthn) {
  num = 600;
}
let obj = {};
obj[LOGIN] = num;
obj[AuthStates.MFA] = 600;
let createStyles = createStyles_mod;
let obj2 = { transparent: { backgroundColor: "transparent" }, cardContainer: { flex: 1, position: "relative", backgroundColor: "transparent" }, wideOuterContainer: { flex: 1, justifyContent: "center" }, wideCard: size, wideHeaderFlat: obj3, wideHeader: obj4 };
size = { backgroundColor: "transparent", borderRadius: nativeDefault.radii.lg, maxWidth: 600, alignSelf: "center", width: "100%", maxHeight: "90%", overflow: "hidden", height: 520 };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles(obj2);
const context = react.createContext(() => {

});
const memoResult = react.memo(function Auth() {
  const effect = react.useEffect(() => {
    obj = AuthManagerDefault;
    obj.initialize();
    return () => {
      obj = closure_1_1(closure_1_2[23]);
      return obj.terminate();
    };
  }, []);
  const layoutEffect = react.useLayoutEffect(() => {
    obj = closure_0(dependencyMap[24]);
    return obj.trackAppUIViewed();
  }, []);
  useOrientationLockDefault();
  let closure_0 = react.useRef(undefined);
  obj = {
    value: react.useCallback(() => {
      obj = RegistrationUtils;
      return obj.getTrackRegTransition(closure_0);
    }, [])(),
    children: closure_9(NavigatorWithCaptchaHook, {})
  };
  return closure_9(context.Provider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;
