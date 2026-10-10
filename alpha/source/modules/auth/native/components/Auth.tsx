// Module ID: 16345
// Function ID: 16346
// Name: Auth
// Dependencies: [32, 19, 17, 12125, 1085, 21, 16346, 16347, 6200, 16356, 6689, 6632, 5092, 587, 558, 576, 16399, 6625, 1645, 6656, 16400, 6654, 6687, 1383, 1126, 16401, 7196, 16408, 2]

// Module 16345 (Auth)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6625 */;
import MFAUtils from "MFAUtils" /* 6632 */;
import BackgroundImageDefault from "BackgroundImage" /* 6656 */;
import _mod6689 from "module_6689" /* 6689 */;
import RegistrationHandoff from "RegistrationHandoff" /* 16346 */;
import RegistrationUtils from "RegistrationUtils" /* 16356 */;
import useIsHCaptchaModalOpenTracking from "useIsHCaptchaModalOpenTracking" /* 16399 */;
import AuthManagerDefault from "AuthManager" /* 16401 */;
import useOrientationLockDefault from "useOrientationLock" /* 16408 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MultiAccountStore from "MultiAccountStore" /* 12125 */;
import Fragment from "Fragment" /* 21 */;
import RegistrationStepsUtils_mod from "RegistrationStepsUtils" /* 16347 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const intl2 = tmp(1126);
const utils_PlatformUtils = tmp(1383);
const KeyboardChatScrollView = tmp(1645);
const react3 = tmp(6654);
const Navigator3 = tmp(6687);
const AssetRegistry = tmp(16400);
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
    tmp8 = { cardStyleInterpolator: _mod6689.CardStyleInterpolators.forFadeFromCenter };
    const obj4 = { cardStyleInterpolator: _mod6689.CardStyleInterpolators.forFadeFromCenter };
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
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigatorWithCaptchaHook() {
  let Navigator2;
  let closure_1;
  let intl;
  let obj11;
  let obj12;
  let obj13;
  let obj8;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp28Result;
  let transparent;
  let tmp = require;
  obj = react2;
  const cResult = obj.c(18);
  const obj2 = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj2.useIsHCaptchaModalOpenTracking();
  const tmp6 = useWideAuthViewDefault();
  const tmp7 = closure_16();
  const first = _slicedToArray(react.useState(getInitialAuthRouteStack), 1)[0];
  [tmp10, require] = react.useState(first[first.length - 1].name);
  _slicedToArray(react.useState(first[first.length - 1].name), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      obj = RegistrationHandoff;
      const result = obj.clearRegistrationHandoff();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp11 = fn;
    tmp12 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const effect = obj3.useEffect(tmp11, tmp12);
  [tmp15, tmp16] = _slicedToArray(react.useState(false), 2);
  importDefault = tmp16;
  _slicedToArray(react.useState(false), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(height) {
      return height.height;
    };
    cResult[2] = fn2;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[2];
  }
  const tmpResult = KeyboardChatScrollView;
  const keyboardState = tmpResult.useKeyboardState(tmp17);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function x(arg0) {
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
      tmp16(false);
    };
    cResult[3] = fn3;
    tmp20 = fn3;
  } else {
    tmp20 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { backgroundImageSource: AssetRegistry, backgroundImageCover: true };
    const tmp5Result = BackgroundImageDefault;
    const tmp24 = closure_9(tmp5Result, obj4);
    cResult[4] = tmp24;
    tmp21 = tmp24;
  } else {
    tmp21 = cResult[4];
  }
  if (cResult[5] === keyboardState > 200) {
    if (cResult[6] === tmp10) {
      if (cResult[7] === first) {
        if (cResult[8] === tmp15) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === keyboardState) {
              if (cResult[11] === tmp7.cardContainer) {
                if (cResult[12] === tmp7.transparent) {
                  if (cResult[13] === tmp7.wideCard) {
                    if (cResult[14] === tmp7.wideHeader) {
                      if (cResult[15] === tmp7.wideHeaderFlat) {
                        let tmp25;
                        if (cResult[16] === tmp7.wideOuterContainer) {
                          tmp25 = cResult[17];
                        }
                        return tmp25;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const items1 = [tmp21, ];
  const tmp26 = closure_11;
  const tmp27 = closure_10;
  if (tmp6) {
    const items2 = [tmp7.wideOuterContainer, ];
    let tmp34 = null;
    const obj5 = { value: tmp16, children: closure_9(closure_6, obj8) };
    const Provider = react3.WideAuthScrollContext.Provider;
    if (keyboardState > 200) {
      tmp34 = { paddingBottom: keyboardState };
      const obj7 = { paddingBottom: keyboardState };
    }
    items2[1] = tmp34;
    const items3 = [tmp7.wideCard, , ];
    let tmp35 = null;
    obj8 = { style: items2, children: closure_9(closure_6, obj11) };
    if (null != tmp10) {
      let num4 = obj[tmp10];
      if (num4 == null) {
        num4 = 520;
      }
      tmp35 = { height: num4 };
      const obj9 = { height: num4 };
    }
    items3[1] = tmp35;
    let obj10 = null;
    if (keyboardState > 200) {
      obj10 = { maxHeight: "100%", height: "100%", marginTop: 32, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    }
    items3[2] = obj10;
    obj11 = { style: items3, children: closure_9(Navigator2, obj12) };
    obj12 = { screens, containerStyle: tmp7.cardContainer, viewStyle: transparent, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false, initialRouteStack: first, onWillFocus: closure_5.dismiss, onStateChange: tmp20, headerStyle: tmp15 ? tmp7.wideHeader : tmp7.wideHeaderFlat, headerLeftContainerStyle: obj13, disableHeaderAnimation: true };
    transparent = null;
    Navigator2 = Navigator3.Navigator;
    if (tmp10 === AuthStates.WELCOME) {
      transparent = tmp7.transparent;
    }
    let num5 = 20;
    const tmpResult2 = utils_PlatformUtils;
    if (tmpResult2.isAndroid()) {
      num5 = tmp5(587).space.PX_12;
    }
    obj13 = { paddingLeft: num5, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
    tmp28Result = tmp28(Provider, obj5);
  } else {
    ({ transparent: obj6.viewStyle, transparent: obj6.containerStyle } = tmp7);
    const obj14 = { screens: RegistrationStepsUtils, viewStyle: null, containerStyle: null, headerBackTitle: intl.string(intl2.t["13/7kX"]), initialRouteStack: first, onWillFocus: closure_5.dismiss, headerStyle: { borderBottomWidth: 0 } };
    const Navigator = Navigator3.Navigator;
    intl = intl2.intl;
    tmp28Result = tmp28(Navigator, obj14);
  }
  items1[1] = tmp28Result;
  const tmp26Result = tmp26(tmp27, { children: items1 });
  cResult[5] = keyboardState > 200;
  cResult[6] = tmp10;
  cResult[7] = first;
  cResult[8] = tmp15;
  cResult[9] = tmp6;
  cResult[10] = keyboardState;
  cResult[11] = tmp7.cardContainer;
  cResult[12] = tmp7.transparent;
  cResult[13] = tmp7.wideCard;
  cResult[14] = tmp7.wideHeader;
  cResult[15] = tmp7.wideHeaderFlat;
  cResult[16] = tmp7.wideOuterContainer;
  cResult[17] = tmp26Result;
  tmp25 = tmp26Result;
}) : (function NavigatorWithCaptchaHook() {
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
    const Provider = react3.WideAuthScrollContext.Provider;
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
      num2 = tmp4(587).space.PX_12;
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
});
const context = react.createContext(() => {

});
const memoResult = react.memo(function Auth() {
  const effect = react.useEffect(() => {
    obj = AuthManagerDefault;
    obj.initialize();
    return () => {
      obj = closure_1_1(closure_1_2[25]);
      return obj.terminate();
    };
  }, []);
  const layoutEffect = react.useLayoutEffect(() => {
    obj = closure_0(dependencyMap[26]);
    return obj.trackAppUIViewed();
  }, []);
  useOrientationLockDefault();
  let closure_0 = react.useRef(undefined);
  obj = {
    value: react.useCallback(() => {
      obj = RegistrationUtils;
      return obj.getTrackRegTransition(closure_0);
    }, [])(),
    children: closure_9(closure_17, {})
  };
  return closure_9(context.Provider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;
