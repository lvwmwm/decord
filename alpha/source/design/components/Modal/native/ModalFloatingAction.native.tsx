// Module ID: 15048
// Function ID: 15049
// Name: ModalFloatingAction
// Dependencies: [19, 17, 21, 5243, 1652, 5257, 1627, 5876, 5877, 5830, 671, 15049, 2]
// Exports: ModalFloatingAction, ModalFloatingActionSpacer

// Module 15048 (ModalFloatingAction)
import spring_spring from "spring/spring" /* 5876 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp2;
const springPresets = tmp2(5877);
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
let closure_9 = { code: "(function ModalFloatingActionNativeTsx1(){let[interpolate,sharedValue,floatingBackgroundColor,useReducedMotion]=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};})" };
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export function ModalFloatingAction(isVisible) {
  let items3;
  let items4;
  let items5;
  let str;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  let sharedValue;
  let tmp2 = closure_8();
  let num = 0;
  const useSharedValue = isVisible(1652).useSharedValue;
  isVisible(1652);
  if (isVisible) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const enabled = react.useContext(tmp3(5257).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp8 = sharedValue(1627)();
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (isVisible) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  let items1 = [closure_9, , , , ];
  const useAnimatedStyle = tmp3(1652).useAnimatedStyle;
  isVisible(1652);
  items1[1] = isVisible(1652).interpolate;
  items1[2] = sharedValue;
  items1[3] = floatingBackgroundColor;
  items1[4] = enabled;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items1;
  class ModalFloatingActionNativeTsx1 {
    constructor() {
      let items;
      let items1;
      let num = 0;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0, 1]), borderBottomColor, borderBottomWidth: 16, transform: items1 };
      const value = _undefined2.get();
      const tmp = _undefined;
      if (c3) {
        num = 0.999999;
      }
      const obj2 = { translateY: tmp(value, items, [32, 0]) };
      items = [num, 1];
      items1 = [obj2];
      return obj;
    }
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15];
  ModalFloatingActionNativeTsx1.__closure = items2;
  ModalFloatingActionNativeTsx1.__workletHash = 5863322493848;
  ModalFloatingActionNativeTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(ModalFloatingActionNativeTsx1);
  let obj = { style: items3, pointerEvents: str, children: items5 };
  items3 = [animatedStyle, tmp2.floating, { paddingBottom: tmp8.bottom }];
  str = "none";
  const View = tmp7(1652).View;
  const tmp17 = closure_7;
  if (isVisible) {
    str = "auto";
  }
  let obj2 = { colors: items4, locations: [0, 0.5], style: absoluteFill.absoluteFill };
  const tmp7Result = sharedValue(5830);
  items4 = [, ];
  const obj3 = sharedValue(671)(floatingBackgroundColor);
  const alphaResult = obj3.alpha(0);
  items4[0] = alphaResult.hex();
  items4[1] = floatingBackgroundColor;
  items5 = [closure_6(tmp7Result, obj2), ];
  const obj4 = { variant: "primary" };
  const ModalActionButton = tmp3(15049).ModalActionButton;
  const merged1 = Object.assign(merged);
  items5[1] = closure_6(ModalActionButton, obj4);
  return tmp17(View, obj);
}
export function ModalFloatingActionSpacer() {
  const obj = { style: closure_8().spacer };
  return metroRequire(hasOwnProperty, obj);
}
