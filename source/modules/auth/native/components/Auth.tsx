// Module ID: 14729
// Function ID: 112303
// Name: getInitialAuthScreen
// Dependencies: [57, 31, 27, 653, 33, 14730, 5087, 14739, 5521, 9203, 4130, 689, 14780, 9197, 1571, 9222, 14781, 9220, 5519, 478, 1212, 14782, 6707, 14786, 2]

// Module 14729 (getInitialAuthScreen)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { AuthStates } from "ME";
import jsxProd from "jsxProd";
import getRegistrationSteps from "getRegistrationSteps";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function getInitialAuthScreen() {
  return AuthStates.WELCOME;
}
function NavigatorWithCaptchaHook() {
  let obj = _require(14780);
  const isHCaptchaModalOpenTracking = obj.useIsHCaptchaModalOpenTracking();
  const tmp3 = callback3();
  let tmp4 = callback(importAllResult.useState(getInitialAuthScreen()), 2);
  const first = tmp4[0];
  _require = tmp4[1];
  const tmp6 = callback(importAllResult.useState(false), 2);
  const importDefault = tmp7;
  let obj1 = _require(1571);
  const keyboardState = obj1.useKeyboardState((height) => height.height);
  obj = {};
  callback = importAllResult.useCallback((arg0) => {
    let name;
    if (null != arg0) {
      if (null != arg0.routes[arg0.index]) {
        name = tmp3.name;
      }
    }
    let tmp4 = null;
    if (null != name) {
      tmp4 = name;
    }
    closure_0(tmp4);
    tmp7(false);
  }, []);
  obj = {};
  const tmp11 = closure_10;
  const tmp12 = closure_9;
  const tmp2 = importDefault(9197)();
  obj.backgroundImageSource = _require(14781);
  obj.backgroundImageCover = true;
  const items = [callback2(importDefault(9222), obj), ];
  if (tmp2) {
    obj1 = { value: tmp7 };
    const obj2 = {};
    const items1 = [tmp3.wideOuterContainer, ];
    let tmp24 = null;
    if (tmp9) {
      const obj3 = { paddingBottom: keyboardState };
      tmp24 = obj3;
    }
    items1[1] = tmp24;
    obj2.style = items1;
    const obj4 = {};
    const items2 = [tmp3.wideCard, , ];
    let tmp27 = null;
    if (null != first) {
      const obj5 = {};
      let num4 = 520;
      if (null != obj[first]) {
        num4 = tmp29;
      }
      obj5.height = num4;
      tmp27 = obj5;
    }
    items2[1] = tmp27;
    let obj6 = null;
    if (tmp9) {
      obj6 = { maxHeight: "100%", height: "100%", marginTop: 32, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    }
    items2[2] = obj6;
    obj4.style = items2;
    const obj7 = { screens: closure_12, containerStyle: tmp3.cardContainer, viewStyle: null, headerStatusBarHeight: 0, cardOverlayEnabled: false, cardShadowEnabled: false };
    let transparent = null;
    if (first === AuthStates.WELCOME) {
      transparent = tmp3.transparent;
    }
    obj7.viewStyle = transparent;
    obj7.initialRouteName = getInitialAuthScreen();
    obj7.onWillFocus = closure_5.dismiss;
    obj7.onStateChange = callback;
    obj7.headerStyle = tmp6[0] ? tmp3.wideHeader : tmp3.wideHeaderFlat;
    const obj8 = {};
    let num7 = 20;
    if (obj15.isAndroid()) {
      num7 = importDefault(689).space.PX_12;
    }
    obj8.paddingLeft = num7;
    obj8.paddingTop = importDefault(689).space.PX_24;
    obj8.paddingBottom = importDefault(689).space.PX_16;
    obj7.headerLeftContainerStyle = obj8;
    obj7.disableHeaderAnimation = true;
    obj4.children = callback2(_require(5519).Navigator, obj7);
    obj2.children = callback2(closure_6, obj4);
    obj1.children = callback2(closure_6, obj2);
    let tmp14Result = tmp14(tmp15(9220).WideAuthScrollContext.Provider, obj1);
    obj15 = _require(478);
    const tmp21 = callback2;
    const tmp22 = closure_6;
    const tmp25 = callback2;
    const tmp26 = closure_6;
    const tmp30 = callback2;
  } else {
    const obj9 = { screens: getRegistrationSteps };
    ({ transparent: obj5.viewStyle, transparent: obj5.containerStyle } = tmp3);
    const intl = tmp15(1212).intl;
    obj9.headerBackTitle = intl.string(tmp15(1212).t["13/7kX"]);
    obj9.initialRouteName = getInitialAuthScreen();
    obj9.onWillFocus = closure_5.dismiss;
    const obj10 = { borderBottomWidth: 0 };
    obj9.headerStyle = obj10;
    tmp14Result = tmp14(tmp15(5519).Navigator, obj9);
  }
  items[1] = tmp14Result;
  obj.children = items;
  return tmp11(tmp12, obj);
}
({ Keyboard: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
getRegistrationSteps = getRegistrationSteps.getAllAuthScreens();
getRegistrationSteps = Object.entries(getRegistrationSteps);
let closure_12 = Object.fromEntries(getRegistrationSteps.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  const items = [tmp, ];
  let obj = {};
  let merged = Object.assign(tmp2);
  obj = null;
  if (tmp2.fullscreen) {
    obj = { fullscreen: false, headerTransparent: false };
  }
  let merged1 = Object.assign(obj);
  let tmp5 = null;
  if (tmp !== AuthStates.MFA) {
    tmp5 = null;
    if (tmp !== AuthStates.WELCOME) {
      obj = {
        headerLeft(arg0) {
              function backImage() {
                return outer2_8(outer2_0(outer2_2[6]).HeaderBackImage, {});
              }
              if (null != closure_0.headerLeft) {
                let obj = {};
                const merged = Object.assign(arg0);
                obj["backImage"] = backImage;
                let headerLeftResult = closure_0.headerLeft(obj);
              } else {
                obj = {};
                const merged1 = Object.assign(arg0);
                obj["backImage"] = backImage;
                headerLeftResult = outer1_8(outer1_0(outer1_2[7]).BackButtonWithTracking, obj);
              }
              return headerLeftResult;
            }
      };
      tmp5 = obj;
    }
  }
  const merged2 = Object.assign(tmp5);
  const items1 = [AuthStates.REGISTER_IDENTITY, AuthStates.LOGIN, AuthStates.AGE_GATE_UNDERAGE];
  let tmp8 = null;
  if (set.has(tmp)) {
    const obj1 = { cardStyleInterpolator: require(5521) /* createStackNavigator */.CardStyleInterpolators.forFadeFromCenter };
    tmp8 = obj1;
  }
  const merged3 = Object.assign(tmp8);
  items[1] = obj;
  return items;
}));
let obj = {};
let num = 540;
if (require("encodeTotpSecret").hasWebAuthn) {
  num = 600;
}
obj[AuthStates.LOGIN] = num;
obj[AuthStates.MFA] = 600;
obj = { transparent: { backgroundColor: "transparent" }, cardContainer: { flex: 1, position: "relative", backgroundColor: "transparent" }, wideOuterContainer: { flex: 1, justifyContent: "center" } };
getRegistrationSteps = { backgroundColor: "transparent", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, maxWidth: 480, alignSelf: "center", width: "100%", maxHeight: "90%", overflow: "hidden", height: 520 };
obj.wideCard = getRegistrationSteps;
obj.wideHeaderFlat = { borderBottomWidth: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose = { borderBottomWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.wideHeader = _createForOfIteratorHelperLoose;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const context = importAllResult.createContext(() => {

});
let obj2 = { borderBottomWidth: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo(function Auth() {
  const effect = importAllResult.useEffect(() => {
    outer1_1(outer1_2[21]).initialize();
    return () => outer2_1(outer2_2[21]).terminate();
  }, []);
  const layoutEffect = importAllResult.useLayoutEffect(() => callback(outer1_2[22]).trackAppUIViewed(), []);
  importDefault(14786)();
  let closure_0 = importAllResult.useRef(undefined);
  return callback2(context.Provider, { value: importAllResult.useCallback(() => callback(outer1_2[7]).getTrackRegTransition(callback), [])(), children: callback2(NavigatorWithCaptchaHook, {}) });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/auth/native/components/Auth.tsx");

export default memoResult;
export const TrackRegistrationContext = context;
