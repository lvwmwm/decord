// Module ID: 17074
// Function ID: 17075
// Name: RestrictedHoursModal
// Dependencies: [32, 19, 17, 1372, 21, 4836, 576, 5889, 1613, 17075, 504, 4566, 4837, 1115, 2487, 7870, 17076, 4646, 4832, 6421, 17077, 6010, 17073, 5276, 10769, 2]
// Exports: default

// Module 17074 (RestrictedHoursModal)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5276 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5889 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators" /* 17073 */;
import useIsInRestrictedHoursDefault from "useIsInRestrictedHours" /* 17077 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let Image;
  let Text;
  let bottom;
  let formatResult;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj19;
  let obj20;
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
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const result = set(withTiming(1, obj));
    set2 = sharedValue1.set;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = { duration: 1500, easing: Easing2.bezier(0, 0, 1, 1) };
    const withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    set2(withDelay(1500, withTiming2(1, obj2)));
    set3 = sharedValue2.set;
    const withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj3 = { duration: 1000, easing: Easing3.bezier(0.1, 0.24, 0.32, 1) };
    const withTiming3 = timing.withTiming;
    timing;
    Easing3 = ReanimatedRexport.Easing;
    set3(withDelay2(2000, withTiming3(1, obj3)));
    const set4 = sharedValue3.set;
    const withDelay3 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj4 = { duration: 1000, easing: Easing4.bezier(0.1, 0.24, 0.32, 1) };
    const withTiming4 = timing.withTiming;
    timing;
    Easing4 = ReanimatedRexport.Easing;
    set4(withDelay3(2000, withTiming4(1, obj4)));
  }, items1);
  const obj6 = onLogin(sharedValue1[11]);
  class M {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  M.__closure = { backgroundOpacity: sharedValue };
  M.__workletHash = 17073775693336;
  M.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(M);
  const obj7 = onLogin(sharedValue1[11]);
  class O {
    constructor() {
      const obj = { opacity: sharedValue1.get() };
      return obj;
    }
  }
  O.__closure = { gradientOpacity: sharedValue1 };
  O.__workletHash = 16592270370139;
  O.__initData = __initData2;
  const animatedStyle1 = obj7.useAnimatedStyle(O);
  const fn = function z() {
    let items;
    const obj = { opacity: sharedValue2.get(), transform: items };
    items = [{ scale: sharedValue3.get() }];
    ({ scale: sharedValue3.get() });
    return obj;
  };
  fn.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  fn.__workletHash = 15616799997783;
  fn.__initData = __initData3;
  const obj8 = onLogin(sharedValue1[11]);
  const animatedStyle2 = obj8.useAnimatedStyle(fn);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[13]).intl;
    const obj9 = { endTime: tmp5 };
    formatResult = intl2.format(tmp2(tmp3[14]).VfqJvY, obj9);
  } else {
    const intl = tmp6(tmp3[13]).intl;
    formatResult = intl.string(tmp2(tmp3[14]).abikhN);
  }
  const obj10 = { backgroundColor, children: items7 };
  const ModalScreen = tmp6(tmp3[15]).ModalScreen;
  const obj11 = { style: items2, children: items3 };
  items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  const obj12 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const View = tmp2(tmp3[11]).View;
  items3 = [closure_7(closure_5, obj12), , , ];
  const obj13 = { style: items4, pointerEvents: "none", children: closure_7(Image, obj14) };
  items4 = [tmp.assetLayers, animatedStyle1];
  const View2 = tmp2(tmp3[11]).View;
  obj14 = { source: tmp6(tmp3[16]), resizeMode: "cover", style: tmp.sunbeamGradient };
  Image = tmp2(tmp3[11]).Image;
  items3[1] = closure_7(View2, obj13);
  const obj15 = { style: items5, children: items6 };
  items5 = [tmp.content, animatedStyle2];
  const obj16 = { style: tmp.riveContainer, children: closure_7(tmp6(tmp3[17]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) };
  const View3 = tmp2(tmp3[11]).View;
  items6 = [closure_7(closure_5, obj16), ];
  const obj17 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult };
  items6[1] = closure_7(tmp6(tmp3[18]).Text, obj17);
  items3[2] = closure_8(View3, obj15);
  const obj18 = { style: tmp.footer, children: closure_7(Text, obj19) };
  obj19 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: intl3.format(sharedValue(tmp3[14]).iqeKDz, obj20) };
  Text = tmp6(tmp3[18]).Text;
  intl3 = tmp6(tmp3[13]).intl;
  obj20 = {
    username: stateFromStores,
    loginHook(children, arg1) {
      const obj = { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children };
      return metroImportDefault(Text_Text.Text, obj, arg1);
    }
  };
  items3[3] = closure_7(closure_5, obj18);
  items7 = [closure_8(View, obj11), closure_7(RestrictedHoursLogoutBlockingLayer, { visible: logoutRequestInFlight })];
  return closure_8(ModalScreen, obj10);
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
const __initData = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
const __initData2 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
const __initData3 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
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
