// Module ID: 10458
// Function ID: 10459
// Name: ModalFloatingAction
// Dependencies: [19, 17, 21, 4836, 4566, 4550, 1613, 5280, 5284, 5293, 672, 10459, 2]
// Exports: ModalFloatingAction, ModalFloatingActionSpacer

// Module 10458 (ModalFloatingAction)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp2;
const springPresets = tmp2(5284);
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
const __initData = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
let result = size.fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = function ModalFloatingAction(isVisible) {
  let items1;
  let items2;
  let items3;
  let str;
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.assign({ isVisible: 0, floatingBackgroundColor: 0 }));
  let sharedValue;
  let enabled;
  const tmp4 = sharedValue;
  let tmp2 = closure_8();
  let num = 0;
  const useSharedValue = isVisible(sharedValue[4]).useSharedValue;
  isVisible(sharedValue[4]);
  if (isVisible) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  enabled = enabled.useContext(tmp3(tmp4[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp8 = floatingBackgroundColor(tmp4[6])();
  const effect = enabled.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (isVisible) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const fn = function y() {
    let items;
    let items1;
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor: floatingBackgroundColor, borderBottomWidth: 16, transform: items1 };
    obj2 = ReanimatedRexport;
    const interpolate = ReanimatedRexport.interpolate;
    let num = 0;
    ReanimatedRexport;
    const value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    const obj3 = { translateY: interpolate(value, items, [32, 0]) };
    items = [num, 1];
    items1 = [obj3];
    return obj;
  };
  const tmp3Result = isVisible(tmp4[4]);
  let obj = { interpolate: tmp3(tmp4[4]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 1679390676673;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  let obj2 = { style: items1, pointerEvents: str, children: items3 };
  items1 = [animatedStyle, tmp2.floating, { paddingBottom: tmp8.bottom }];
  str = "none";
  const View = floatingBackgroundColor(tmp4[4]).View;
  const tmp11 = closure_7;
  if (isVisible) {
    str = "auto";
  }
  let obj3 = { colors: items2, locations: [0, 0.5], style: absoluteFill.absoluteFill };
  const tmp7Result = floatingBackgroundColor(tmp4[9]);
  items2 = [, ];
  const obj5 = floatingBackgroundColor(tmp4[10])(floatingBackgroundColor);
  const alphaResult = obj5.alpha(0);
  items2[0] = alphaResult.hex();
  items2[1] = floatingBackgroundColor;
  items3 = [closure_6(tmp7Result, obj3), ];
  const obj4 = { variant: "primary" };
  const ModalActionButton = tmp3(tmp4[11]).ModalActionButton;
  const merged1 = Object.assign(merged);
  items3[1] = closure_6(ModalActionButton, obj4);
  return tmp11(View, obj2);
};
export const ModalFloatingActionSpacer = function ModalFloatingActionSpacer() {
  const obj = { style: closure_8().spacer };
  return metroRequire(hasOwnProperty, obj);
};
