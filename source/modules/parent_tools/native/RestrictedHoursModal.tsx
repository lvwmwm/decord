// Module ID: 16016
// Function ID: 123653
// Name: RestrictedHoursLogoutBlockingLayer
// Dependencies: [57, 31, 27, 1849, 33, 4130, 689, 5584, 1557, 16017, 566, 3991, 4131, 1212, 2198, 7613, 16018, 3842, 4126, 5517, 16019, 5588, 16015, 4540, 11100, 2]
// Exports: default

// Module 16016 (RestrictedHoursLogoutBlockingLayer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_5;
let closure_7;
let closure_8;
let require = arg1;
function RestrictedHoursLogoutBlockingLayer(visible) {
  let tmp2 = null;
  if (visible.visible) {
    let obj = { style: tmp.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite" };
    obj = { size: "large" };
    obj.children = callback2(require(5584) /* ActivityIndicator */.ActivityIndicator, obj);
    tmp2 = callback2(closure_5, obj);
  }
  return tmp2;
}
function RestrictedHoursScreen(visible) {
  let bottom;
  let top;
  const onLogin = visible.onLogin;
  const tmp = _createForOfIteratorHelperLoose();
  ({ top, bottom } = sharedValue(sharedValue1[8])());
  const tmp3 = sharedValue(sharedValue1[9])();
  let obj = onLogin(sharedValue1[10]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_6.getCurrentUser();
    let username;
    if (null != currentUser) {
      username = currentUser.username;
    }
    let str = "";
    if (null != username) {
      str = username;
    }
    return str;
  });
  let obj1 = onLogin(sharedValue1[11]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = onLogin(sharedValue1[11]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = onLogin(sharedValue1[11]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = onLogin(sharedValue1[11]);
  const sharedValue3 = obj4.useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    let obj = onLogin(sharedValue1[12]);
    obj = { duration: 3000 };
    const Easing = onLogin(sharedValue1[11]).Easing;
    obj.easing = Easing.bezier(0.24, 0.27, 0.58, 1);
    const result = sharedValue.set(obj.withTiming(1, obj));
    let obj2 = onLogin(sharedValue1[11]);
    obj = { duration: 1500 };
    const Easing2 = onLogin(sharedValue1[11]).Easing;
    obj.easing = Easing2.bezier(0, 0, 1, 1);
    const result1 = sharedValue1.set(obj2.withDelay(1500, onLogin(sharedValue1[12]).withTiming(1, obj)));
    const obj4 = onLogin(sharedValue1[12]);
    const obj6 = onLogin(sharedValue1[11]);
    const obj1 = { duration: 1000 };
    const Easing3 = onLogin(sharedValue1[11]).Easing;
    obj1.easing = Easing3.bezier(0.1, 0.24, 0.32, 1);
    const result2 = sharedValue2.set(obj6.withDelay(2000, onLogin(sharedValue1[12]).withTiming(1, obj1)));
    const obj7 = onLogin(sharedValue1[12]);
    const obj9 = onLogin(sharedValue1[11]);
    obj2 = { duration: 1000 };
    const Easing4 = onLogin(sharedValue1[11]).Easing;
    obj2.easing = Easing4.bezier(0.1, 0.24, 0.32, 1);
    const result3 = sharedValue3.set(obj9.withDelay(2000, onLogin(sharedValue1[12]).withTiming(1, obj2)));
  }, items1);
  let obj5 = onLogin(sharedValue1[11]);
  class M {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  M.__closure = { backgroundOpacity: sharedValue };
  M.__workletHash = 17073775693336;
  M.__initData = closure_12;
  const animatedStyle = obj5.useAnimatedStyle(M);
  let obj6 = onLogin(sharedValue1[11]);
  class O {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  O.__closure = { gradientOpacity: sharedValue1 };
  O.__workletHash = 16592270370139;
  O.__initData = closure_13;
  const animatedStyle1 = obj6.useAnimatedStyle(O);
  let obj7 = onLogin(sharedValue1[11]);
  const fn = function z() {
    let obj = { opacity: sharedValue2.get() };
    obj = { scale: sharedValue3.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  fn.__workletHash = 15616799997783;
  fn.__initData = closure_14;
  const animatedStyle2 = obj7.useAnimatedStyle(fn);
  if (null != tmp3) {
    const intl2 = onLogin(sharedValue1[13]).intl;
    obj = { endTime: tmp3 };
    let formatResult = intl2.format(sharedValue(sharedValue1[14]).VfqJvY, obj);
  } else {
    const intl = onLogin(sharedValue1[13]).intl;
    formatResult = intl.string(sharedValue(sharedValue1[14]).abikhN);
  }
  obj = { backgroundColor: c9 };
  obj1 = { style: items2 };
  items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj2 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const items3 = [callback2(closure_5, obj2), , , ];
  obj3 = { style: items4, pointerEvents: "none" };
  items4 = [tmp.assetLayers, animatedStyle1];
  obj4 = { source: onLogin(sharedValue1[16]), resizeMode: "cover", style: tmp.sunbeamGradient };
  obj3.children = callback2(sharedValue(sharedValue1[11]).Image, obj4);
  items3[1] = callback2(sharedValue(sharedValue1[11]).View, obj3);
  obj5 = { style: items5 };
  items5 = [tmp.content, animatedStyle2];
  obj6 = { style: tmp.riveContainer, children: callback2(onLogin(sharedValue1[17]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) };
  const items6 = [callback2(closure_5, obj6), ];
  obj7 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult };
  items6[1] = callback2(onLogin(sharedValue1[18]).Text, obj7);
  obj5.children = items6;
  items3[2] = callback3(sharedValue(sharedValue1[11]).View, obj5);
  const obj8 = { style: tmp.footer };
  let obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description };
  const intl3 = onLogin(sharedValue1[13]).intl;
  obj9.children = intl3.format(sharedValue(sharedValue1[14]).iqeKDz, {
    username: stateFromStores,
    loginHook(children) {
      const obj = { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children };
      return outer1_7(onLogin(sharedValue1[18]).Text, obj, arg1);
    }
  });
  obj8.children = callback2(onLogin(sharedValue1[18]).Text, obj9);
  items3[3] = callback2(closure_5, obj8);
  obj1.children = items3;
  const items7 = [callback3(sharedValue(sharedValue1[11]).View, obj1), callback2(RestrictedHoursLogoutBlockingLayer, { visible: visible.logoutRequestInFlight })];
  obj.children = items7;
  return callback3(onLogin(sharedValue1[15]).ModalScreen, obj);
}
({ StyleSheet, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "rgb(0, 3, 40)";
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["zIndex"] = 0;
obj1["backgroundColor"] = "rgb(0, 3, 40)";
_createForOfIteratorHelperLoose.backgroundFill = obj1;
let obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2["zIndex"] = 1;
_createForOfIteratorHelperLoose.assetLayers = obj2;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.sunbeamGradient = {};
_createForOfIteratorHelperLoose.riveContainer = { width: "100%", maxWidth: 523, height: 300 };
let obj4 = { alignItems: "center", width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 2 };
_createForOfIteratorHelperLoose.content = obj4;
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
let obj5 = { position: "absolute", bottom: require("_createForOfIteratorHelperLoose").space.PX_32, alignSelf: "center", zIndex: 2 };
_createForOfIteratorHelperLoose.footer = obj5;
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6["zIndex"] = 10;
obj6["justifyContent"] = "center";
obj6["alignItems"] = "center";
obj6["backgroundColor"] = "rgb(0, 3, 40)";
_createForOfIteratorHelperLoose.logoutBlockingLayer = obj6;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_11 = { MAIN: "main" };
let closure_12 = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
let closure_13 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
let closure_14 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default function RestrictedHoursModal() {
  const tmp = importDefault(16019)();
  const require = tmp;
  importDefault = React.useRef(false);
  const dependencyMap = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_2.current = true;
    return () => {
      outer1_2.current = false;
    };
  }, []);
  const tmp3 = callback(React.useState(false), 2);
  callback = tmp3[1];
  let items = [tmp];
  const effect1 = React.useEffect(() => {
    let current = tmp;
    if (!tmp) {
      current = ref.current;
    }
    if (!current) {
      const result = tmp(16015).closeRestrictedHoursModal();
      const obj = tmp(16015);
    }
  }, items);
  importDefault(4540)(() => true);
  const tmp4 = (function useScreens(result, arg1) {
    let closure_1 = arg1;
    const items = [result, arg1];
    return result(5517).useNavigatorScreens(() => {
      const obj = {
        headerShown: false,
        gestureEnabled: false,
        render() {
          return outer3_7(outer3_16, { onLogin: outer1_0, logoutRequestInFlight: outer1_1 });
        }
      };
      return { [outer2_11.MAIN]: obj };
    }, items);
  })(React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      callback(true);
      const obj = ref(5588);
      ref(5588).logout("restricted_hours").finally(() => {
        if (outer1_2.current) {
          outer1_1.current = false;
          outer1_3(false);
        }
      });
      const logoutResult = ref(5588).logout("restricted_hours");
    }
  }, []), tmp3[0]);
  return callback2(require(11100) /* Modal */.Modal, {
    screens: (function useScreens(result, arg1) {
      let closure_1 = arg1;
      const items = [result, arg1];
      return result(5517).useNavigatorScreens(() => {
        const obj = {
          headerShown: false,
          gestureEnabled: false,
          render() {
            return outer3_7(outer3_16, { onLogin: outer1_0, logoutRequestInFlight: outer1_1 });
          }
        };
        return { [outer2_11.MAIN]: obj };
      }, items);
    })(React.useCallback(() => {
      if (!ref.current) {
        ref.current = true;
        callback(true);
        const obj = ref(5588);
        ref(5588).logout("restricted_hours").finally(() => {
          if (outer1_2.current) {
            outer1_1.current = false;
            outer1_3(false);
          }
        });
        const logoutResult = ref(5588).logout("restricted_hours");
      }
    }, []), tmp3[0]),
    initialRouteName: constants.MAIN
  });
};
