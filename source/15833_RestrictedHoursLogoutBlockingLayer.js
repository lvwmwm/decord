// Module ID: 15833
// Function ID: 121047
// Name: RestrictedHoursLogoutBlockingLayer
// Dependencies: [1039597568, 1039663104, 1039925248, 1039990784, 1040056320, 1040187392, 752222208, 766246912, 1040515072, 1040580608, 1040646144, 1040973824, 1041039360, 447676416, 1041104896, 1041170432, 1042284544, 625934336, 459079680, 686292992, 1042350080, 1042415616, 1042546688, 1042677760, 1042743296, 1042808832]
// Exports: default

// Module 15833 (RestrictedHoursLogoutBlockingLayer)
let StyleSheet;
function RestrictedHoursLogoutBlockingLayer(visible) {
  let tmp2 = null;
  if (visible.visible) {
    let obj = { style: tmp.logoutBlockingLayer };
    obj = { size: "large" };
    obj.children = callback2(arg1(dependencyMap[7]).ActivityIndicator, obj);
    tmp2 = callback2(closure_5, obj);
  }
  return tmp2;
}
function RestrictedHoursScreen(visible) {
  let bottom;
  let top;
  const arg1 = visible.onLogin;
  const tmp = callback4();
  ({ top, bottom } = importDefault(dependencyMap[8])());
  const tmp3 = importDefault(dependencyMap[9])();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
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
  let obj1 = arg1(dependencyMap[11]);
  const sharedValue = obj1.useSharedValue(0);
  const importDefault = sharedValue;
  let obj2 = arg1(dependencyMap[11]);
  const sharedValue1 = obj2.useSharedValue(0);
  const dependencyMap = sharedValue1;
  let obj3 = arg1(dependencyMap[11]);
  const sharedValue2 = obj3.useSharedValue(0);
  let closure_3 = sharedValue2;
  let obj4 = arg1(dependencyMap[11]);
  const sharedValue3 = obj4.useSharedValue(0.9);
  const React = sharedValue3;
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = React.useEffect(() => {
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
  let obj5 = arg1(dependencyMap[11]);
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
  let obj6 = arg1(dependencyMap[11]);
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
  let obj7 = arg1(dependencyMap[11]);
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
    const intl2 = arg1(dependencyMap[13]).intl;
    obj = { endTime: tmp3 };
    let formatResult = intl2.format(importDefault(dependencyMap[14]).VfqJvY, obj);
  } else {
    const intl = arg1(dependencyMap[13]).intl;
    formatResult = intl.string(importDefault(dependencyMap[14]).abikhN);
  }
  obj = { backgroundColor: closure_9 };
  obj1 = { style: items2 };
  const items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj2 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const items3 = [callback2(closure_5, obj2), , , ];
  obj3 = { style: items4, pointerEvents: "none" };
  const items4 = [tmp.assetLayers, animatedStyle1];
  obj4 = { source: arg1(dependencyMap[16]), resizeMode: "cover", style: tmp.sunbeamGradient };
  obj3.children = callback2(importDefault(dependencyMap[11]).Image, obj4);
  items3[1] = callback2(importDefault(dependencyMap[11]).View, obj3);
  obj5 = { style: items5 };
  const items5 = [tmp.content, animatedStyle2];
  obj6 = { style: tmp.riveContainer, children: callback2(arg1(dependencyMap[17]).TeenScreenTimeRive, { "Null": true, "Null": true }) };
  const items6 = [callback2(closure_5, obj6), ];
  obj7 = { style: tmp.description, children: formatResult };
  items6[1] = callback2(arg1(dependencyMap[18]).Text, obj7);
  obj5.children = items6;
  items3[2] = callback3(importDefault(dependencyMap[11]).View, obj5);
  const obj8 = { style: tmp.footer };
  const obj9 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.description };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj9.children = intl3.format(importDefault(dependencyMap[14]).iqeKDz, {
    username: stateFromStores,
    loginHook(children) {
      const obj = { INTEGRATION_CREATE: "<string:2151743489>", ConstraintReasonCode: "<string:1912603161>", onPress: onLogin, children };
      return callback(onLogin(sharedValue1[18]).Text, obj, arg1);
    }
  });
  obj8.children = callback2(arg1(dependencyMap[18]).Text, obj9);
  items3[3] = callback2(closure_5, obj8);
  obj1.children = items3;
  const items7 = [callback3(importDefault(dependencyMap[11]).View, obj1), callback2(RestrictedHoursLogoutBlockingLayer, { visible: visible.logoutRequestInFlight })];
  obj.children = items7;
  return callback3(arg1(dependencyMap[15]).ModalScreen, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = "rgb(0, 3, 40)";
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_24 };
obj.container = obj;
const obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["zIndex"] = 0;
obj1["backgroundColor"] = "rgb(0, 3, 40)";
obj.backgroundFill = obj1;
const obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2["zIndex"] = 1;
obj.assetLayers = obj2;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj.sunbeamGradient = {};
obj.riveContainer = { resizeMode: false, preventsDisplaySleepDuringVideoPlayback: false, gameImage: false };
const obj3 = {};
const tmp3 = arg1(dependencyMap[4]);
obj.content = { gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.description = { textAlign: "center" };
const obj4 = { gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.footer = { bottom: importDefault(dependencyMap[6]).space.PX_32 };
const obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6["zIndex"] = 10;
obj6["justifyContent"] = "center";
obj6["alignItems"] = "center";
obj6["backgroundColor"] = "rgb(0, 3, 40)";
obj.logoutBlockingLayer = obj6;
let closure_10 = obj.createStyles(obj);
let closure_11 = { MAIN: "main" };
let closure_12 = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
let closure_13 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
let closure_14 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
const obj5 = { bottom: importDefault(dependencyMap[6]).space.PX_32 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default function RestrictedHoursModal() {
  const tmp = importDefault(closure_2[20])();
  const arg1 = tmp;
  const importDefault = React.useRef(false);
  closure_2 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_2.current = false;
    };
  }, []);
  const tmp3 = callback(React.useState(false), 2);
  const callback = tmp3[1];
  const items = [tmp];
  const effect1 = React.useEffect(() => {
    let current = tmp;
    if (!tmp) {
      current = ref.current;
    }
    if (!current) {
      const result = tmp(closure_2[22]).closeRestrictedHoursModal();
      const obj = tmp(closure_2[22]);
    }
  }, items);
  importDefault(closure_2[23])(() => true);
  const tmp4 = function useScreens(closure_4, arg1) {
    let closure_1 = arg1;
    const items = [closure_4, arg1];
    return closure_4(closure_2[19]).useNavigatorScreens(() => ({
      [closure_11.MAIN]: {
        render() {
          return callback(closure_16, { onLogin: closure_0, logoutRequestInFlight: closure_1 });
        }
      }
    }), items);
  }(React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      callback(true);
      const obj = ref(closure_2[21]);
      ref(closure_2[21]).logout("restricted_hours").finally(() => {
        if (ref.current) {
          closure_1.current = false;
          callback(false);
        }
      });
      const logoutResult = ref(closure_2[21]).logout("restricted_hours");
    }
  }, []), tmp3[0]);
  return callback2(arg1(closure_2[24]).Modal, {
    screens: function useScreens(closure_4, arg1) {
      let closure_1 = arg1;
      const items = [closure_4, arg1];
      return closure_4(closure_2[19]).useNavigatorScreens(() => ({
        [closure_11.MAIN]: {
          render() {
            return callback(closure_16, { onLogin: closure_0, logoutRequestInFlight: closure_1 });
          }
        }
      }), items);
    }(React.useCallback(() => {
      if (!ref.current) {
        ref.current = true;
        callback(true);
        const obj = ref(closure_2[21]);
        ref(closure_2[21]).logout("restricted_hours").finally(() => {
          if (ref.current) {
            closure_1.current = false;
            callback(false);
          }
        });
        const logoutResult = ref(closure_2[21]).logout("restricted_hours");
      }
    }, []), tmp3[0]),
    initialRouteName: constants.MAIN
  });
};
