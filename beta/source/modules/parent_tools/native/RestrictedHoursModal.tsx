// Module ID: 19818
// Function ID: 19819
// Name: RestrictedHoursModal
// Dependencies: [32, 19, 17, 1385, 21, 5170, 575, 7048, 1627, 19819, 504, 1652, 5402, 1113, 2664, 8074, 5874, 19820, 5329, 5783, 7264, 19821, 6827, 19817, 6186, 11659, 2]
// Exports: default

// Module 19818 (RestrictedHoursModal)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import Text_Text from "Text/Text" /* 5783 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 6186 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6827 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7048 */;
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators" /* 19817 */;
import useIsInRestrictedHoursDefault from "useIsInRestrictedHours" /* 19821 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, importDefault, set, set2, set3;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function RestrictedHoursLogoutBlockingLayer(visible) {
  let tmp2 = null;
  if (visible.visible) {
    const obj = { style: tmp.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" }) };
    tmp2 = metroImportDefault(hasOwnProperty, obj);
  }
  return tmp2;
}
function RestrictedHoursScreen(onLogin) {
  let Text;
  let bottom;
  let formatResult;
  let intl3;
  let items10;
  let items11;
  let items12;
  let items13;
  let items8;
  let items9;
  let obj12;
  let obj17;
  let obj18;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp2Result;
  let top;
  onLogin = onLogin.onLogin;
  let sharedValue;
  let sharedValue1;
  const logoutRequestInFlight = onLogin.logoutRequestInFlight;
  const tmp = closure_10();
  const tmp3 = sharedValue1;
  const tmp4 = sharedValue(sharedValue1[8])();
  ({ top, bottom } = tmp4);
  const tmp5 = sharedValue(sharedValue1[9])();
  const tmp6 = onLogin;
  let obj = onLogin(sharedValue1[10]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj2 = onLogin(sharedValue1[11]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = onLogin(sharedValue1[11]);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = onLogin(sharedValue1[11]);
  const sharedValue2 = obj4.useSharedValue(0);
  const obj5 = onLogin(sharedValue1[11]);
  const sharedValue3 = obj5.useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    let Easing;
    let Easing2;
    let Easing3;
    let Easing4;
    set = sharedValue.set;
    const obj = { duration: 3000, easing: Easing.bezier(0.24, 0.27, 0.58, 1) };
    const withTiming = timing_timing.withTiming;
    timing_timing;
    Easing = _mod1652.Easing;
    const result = set(withTiming(1, obj));
    set2 = sharedValue1.set;
    const withDelay = _mod1652.withDelay;
    _mod1652;
    const obj2 = { duration: 1500, easing: Easing2.bezier(0, 0, 1, 1) };
    const withTiming2 = timing_timing.withTiming;
    timing_timing;
    Easing2 = _mod1652.Easing;
    set2(withDelay(1500, withTiming2(1, obj2)));
    set3 = sharedValue2.set;
    const withDelay2 = _mod1652.withDelay;
    _mod1652;
    const obj3 = { duration: 1000, easing: Easing3.bezier(0.1, 0.24, 0.32, 1) };
    const withTiming3 = timing_timing.withTiming;
    timing_timing;
    Easing3 = _mod1652.Easing;
    set3(withDelay2(2000, withTiming3(1, obj3)));
    const set4 = sharedValue3.set;
    const withDelay3 = _mod1652.withDelay;
    _mod1652;
    const obj4 = { duration: 1000, easing: Easing4.bezier(0.1, 0.24, 0.32, 1) };
    const withTiming4 = timing_timing.withTiming;
    timing_timing;
    Easing4 = _mod1652.Easing;
    set4(withDelay3(2000, withTiming4(1, obj4)));
  }, items1);
  const items2 = [closure_13, sharedValue];
  let c0;
  [tmp13, tmp14] = items2;
  const obj6 = onLogin(sharedValue1[11]);
  class RestrictedHoursModalTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp14];
  RestrictedHoursModalTsx1.__closure = items3;
  RestrictedHoursModalTsx1.__workletHash = 11776278729345;
  RestrictedHoursModalTsx1.__initData = tmp13;
  const animatedStyle = obj6.useAnimatedStyle(RestrictedHoursModalTsx1);
  const items4 = [closure_14, sharedValue1];
  c0 = undefined;
  [tmp16, tmp17] = items4;
  const tmp6Result = tmp6(tmp3[11]);
  class RestrictedHoursModalTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items5 = [tmp17];
  RestrictedHoursModalTsx2.__closure = items5;
  RestrictedHoursModalTsx2.__workletHash = 10964689956002;
  RestrictedHoursModalTsx2.__initData = tmp16;
  const animatedStyle1 = tmp6Result.useAnimatedStyle(RestrictedHoursModalTsx2);
  const items6 = [closure_15, sharedValue2, sharedValue3];
  c0 = undefined;
  let c1;
  [tmp19, tmp20, tmp21] = items6;
  const tmp6Result2 = tmp6(tmp3[11]);
  class RestrictedHoursModalTsx3 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ scale: _undefined2.get() }];
      ({ scale: _undefined2.get() });
      return obj;
    }
  }
  const items7 = [tmp20, tmp21];
  RestrictedHoursModalTsx3.__closure = items7;
  RestrictedHoursModalTsx3.__workletHash = 4184569865582;
  RestrictedHoursModalTsx3.__initData = tmp19;
  const animatedStyle2 = tmp6Result2.useAnimatedStyle(RestrictedHoursModalTsx3);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[13]).intl;
    const obj7 = { endTime: tmp5 };
    formatResult = intl2.format(tmp2(tmp3[14]).VfqJvY, obj7);
  } else {
    const intl = tmp6(tmp3[13]).intl;
    formatResult = intl.string(tmp2(tmp3[14]).abikhN);
  }
  const obj8 = { backgroundColor, children: items13 };
  const ModalScreen = tmp6(tmp3[15]).ModalScreen;
  const obj9 = { style: items8, children: items9 };
  items8 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  const obj10 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const View = tmp2(tmp3[11]).View;
  items9 = [closure_7(closure_5, obj10), , , ];
  const obj11 = { style: items10, pointerEvents: "none", children: closure_7(tmp2Result, obj12) };
  items10 = [tmp.assetLayers, animatedStyle1];
  const View2 = tmp2(tmp3[11]).View;
  obj12 = { source: tmp6(tmp3[17]), resizeMode: "cover", style: tmp.sunbeamGradient };
  tmp2Result = sharedValue(tmp3[16]);
  items9[1] = closure_7(View2, obj11);
  const obj13 = { style: items11, children: items12 };
  items11 = [tmp.content, animatedStyle2];
  const obj14 = { style: tmp.riveContainer, children: closure_7(tmp6(tmp3[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) };
  const View3 = tmp2(tmp3[11]).View;
  items12 = [closure_7(closure_5, obj14), ];
  const obj15 = { variant: "body-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult };
  items12[1] = closure_7(tmp6(tmp3[19]).Text, obj15);
  items9[2] = closure_8(View3, obj13);
  const obj16 = { style: tmp.footer, children: closure_7(Text, obj17) };
  obj17 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.description, children: intl3.format(sharedValue(tmp3[14]).iqeKDz, obj18) };
  Text = tmp6(tmp3[19]).Text;
  intl3 = tmp6(tmp3[13]).intl;
  obj18 = {
    username: stateFromStores,
    loginHook(children, arg1) {
      const obj = { variant: "body-sm/normal", color: "text-link", onPress: onLogin, children };
      return metroImportDefault(Text_Text.Text, obj, arg1);
    }
  };
  items9[3] = closure_7(closure_5, obj16);
  items13 = [closure_8(View, obj9), closure_7(RestrictedHoursLogoutBlockingLayer, { visible: logoutRequestInFlight })];
  return closure_8(ModalScreen, obj8);
}
({ StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = "rgb(0, 3, 40)";
let createStyles = createStyles_mod;
let obj = { container: obj2, backgroundFill: obj3, assetLayers: obj4, sunbeamGradient: obj5, riveContainer: { width: "100%", maxWidth: 523, height: 300 }, content: obj6, description: { textAlign: "center" }, footer: obj7, logoutBlockingLayer: obj8 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { zIndex: 0, backgroundColor: "rgb(0, 3, 40)" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { zIndex: 1 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
obj7 = { position: "absolute", bottom: nativeDefault.space.PX_32, alignSelf: "center", zIndex: 2 };
obj8 = { zIndex: 10, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(0, 3, 40)" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const constants = { MAIN: "main" };
let closure_13 = { code: "(function RestrictedHoursModalTsx1(){let[backgroundOpacity]=this.__closure;return{opacity:backgroundOpacity.get()};})" };
let closure_14 = { code: "(function RestrictedHoursModalTsx2(){let[gradientOpacity]=this.__closure;return{opacity:gradientOpacity.get()};})" };
let closure_15 = { code: "(function RestrictedHoursModalTsx3(){let[contentOpacity,contentScale]=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};})" };
let result = size.fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default function RestrictedHoursModal() {
  let closure_0;
  let closure_2;
  let ref;
  let tmp4;
  const tmp = useIsInRestrictedHoursDefault();
  _require = tmp;
  react.useRef(false);
  dependencyMap = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_1_2.current = false;
    };
  }, []);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, _slicedToArray] = tmp3;
  const callback = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      _slicedToArray(true);
      const obj = AuthenticationActionCreatorsDefault;
      const logoutResult = obj.logout("restricted_hours");
      logoutResult.finally(() => {
        if (ref.current) {
          closure_1_1.current = false;
          closure_1_3(false);
        }
      });
    }
  }, []);
  importDefault = tmp4;
  let obj = require("Navigator");
  const items = [callback, tmp4];
  const items1 = [tmp];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let logoutRequestInFlight;
    let onLogin;
    let obj = {
      headerShown: false,
      gestureEnabled: false,
      render() {
        const obj = { onLogin, logoutRequestInFlight };
        return closure_2_7(closure_2_16, obj);
      }
    };
    return { [closure_2_11.MAIN]: obj };
  }, items);
  const effect1 = react.useEffect(() => {
    const current = closure_0 || ref.current;
    if (!current) {
      const obj = RestrictedHoursActionCreators;
      const result = obj.closeRestrictedHoursModal();
    }
  }, items1);
  useBackPressHandlerDefault(() => true);
  const obj2 = { screens: navigatorScreens, initialRouteName: constants.MAIN };
  return closure_7(require("Modal").Modal, obj2);
};
