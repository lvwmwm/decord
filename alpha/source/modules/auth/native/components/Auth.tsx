// Module ID: 18349
// Function ID: 18350
// Name: Auth
// Dependencies: [32, 19, 17, 14237, 1072, 21, 18350, 18351, 7067, 18361, 7237, 7192, 5142, 575, 18404, 7185, 18356, 1641, 7013, 18405, 7011, 7210, 7234, 1357, 1113, 18406, 7733, 18415, 2]

// Module 18349 (Auth)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import BackgroundImageDefault from "BackgroundImage" /* 7013 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7185 */;
import MFAUtils from "MFAUtils" /* 7192 */;
import _mod7237 from "module_7237" /* 7237 */;
import RegistrationHandoff from "RegistrationHandoff" /* 18350 */;
import useShouldShowChooseAccountDefault from "useShouldShowChooseAccount" /* 18356 */;
import RegistrationUtils from "RegistrationUtils" /* 18361 */;
import useIsHCaptchaModalOpenTracking from "useIsHCaptchaModalOpenTracking" /* 18404 */;
import AssetRegistry from "AssetRegistry" /* 18405 */;
import AuthManagerDefault from "AuthManager" /* 18406 */;
import useOrientationLockDefault from "useOrientationLock" /* 18415 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MultiAccountStore from "MultiAccountStore" /* 14237 */;
import Fragment from "Fragment" /* 21 */;
import RegistrationStepsUtils_mod from "RegistrationStepsUtils" /* 18351 */;
import createStyles_mod from "createStyles" /* 5142 */;
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
const intl2 = tmp(1113);
const utils_PlatformUtils = tmp(1357);
const react2 = tmp(7210);
const Navigator3 = tmp(7234);
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
  let tmp19Result2;
  let tmp9;
  let transparent;
  let tmp = require;
  obj = useIsHCaptchaModalOpenTracking;
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp5 = useWideAuthViewDefault();
  const tmp6 = closure_16();
  const tmp7 = useShouldShowChooseAccountDefault();
  const first = _slicedToArray(react.useState(getInitialAuthRouteStack), 1)[0];
  [tmp9, require] = react.useState(first[first.length - 1].name);
  _slicedToArray(react.useState(first[first.length - 1].name), 2);
  const effect = react.useEffect(() => {
    obj = RegistrationHandoff;
    const result = obj.clearRegistrationHandoff();
  }, []);
  const tmp11 = _slicedToArray(react.useState(false), 2);
  importDefault = tmp13;
  const first1 = tmp11[0];
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
  const tmp20 = BackgroundImageDefault;
  const children = [closure_9(tmp20, obj3), , ];
  let tmp19Result = null;
  const tmp17 = closure_11;
  const tmp18 = closure_10;
  if (tmp5) {
    tmp19Result = null;
    if (tmp9 === AuthStates.WELCOME) {
      tmp19Result = null;
      if (tmp7) {
        tmp19Result = tmp19(tmp4(7011), {});
      }
    }
  }
  children[1] = tmp19Result;
  if (tmp5) {
    const items1 = [tmp6.wideOuterContainer, ];
    let tmp27 = null;
    const obj5 = { value: tmp11[1], children: closure_9(closure_6, obj7) };
    const Provider = react2.WideAuthScrollContext.Provider;
    if (keyboardState > 200) {
      tmp27 = { paddingBottom: keyboardState };
      const obj6 = { paddingBottom: keyboardState };
    }
    items1[1] = tmp27;
    const items2 = [tmp6.wideCard, , ];
    let tmp28 = null;
    obj7 = { style: items1, children: closure_9(closure_6, obj10) };
    if (null != tmp9) {
      let num = obj[tmp9];
      if (num == null) {
        num = 520;
      }
      tmp28 = { height: num };
      const obj8 = { height: num };
    }
    items2[1] = tmp28;
    let obj9 = null;
    if (keyboardState > 200) {
      obj9 = { maxHeight: "100%", height: "100%", marginTop: 32, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    }
    items2[2] = obj9;
    obj10 = { style: items2, children: closure_9(Navigator2, obj11) };
    obj11 = { screens, containerStyle: tmp6.cardContainer, viewStyle: transparent, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false, initialRouteStack: first, onWillFocus: closure_5.dismiss, onStateChange: callback, headerStyle: first1 ? tmp6.wideHeader : tmp6.wideHeaderFlat, headerLeftContainerStyle: obj12, disableHeaderAnimation: true };
    transparent = null;
    Navigator2 = Navigator3.Navigator;
    if (tmp9 === AuthStates.WELCOME) {
      transparent = tmp6.transparent;
    }
    let num2 = 20;
    const tmpResult = utils_PlatformUtils;
    if (tmpResult.isAndroid()) {
      num2 = tmp4(575).space.PX_12;
    }
    obj12 = { paddingLeft: num2, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
    tmp19Result2 = tmp19(Provider, obj5);
  } else {
    ({ transparent: obj4.viewStyle, transparent: obj4.containerStyle } = tmp6);
    const obj13 = { screens: RegistrationStepsUtils, viewStyle: null, containerStyle: null, headerBackTitle: intl.string(intl2.t["13/7kX"]), initialRouteStack: first, onWillFocus: closure_5.dismiss, headerStyle: { borderBottomWidth: 0 } };
    const Navigator = Navigator3.Navigator;
    intl = intl2.intl;
    tmp19Result2 = tmp19(Navigator, obj13);
  }
  children[2] = tmp19Result2;
  return tmp17(tmp18, { children });
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
    tmp8 = { cardStyleInterpolator: _mod7237.CardStyleInterpolators.forFadeFromCenter };
    const obj4 = { cardStyleInterpolator: _mod7237.CardStyleInterpolators.forFadeFromCenter };
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
    value: react.useMemo(() => {
      obj = RegistrationUtils;
      return obj.getTrackRegTransition(closure_0);
    }, []),
    children: closure_9(NavigatorWithCaptchaHook, {})
  };
  return closure_9(context.Provider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;
