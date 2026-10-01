// Module ID: 6001
// Function ID: 6002
// Name: FormRadio
// Dependencies: [19, 21, 4836, 576, 4550, 4566, 5280, 5284, 2]
// Exports: FormRadio

// Module 6001 (FormRadio)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const springPresets = tmp(5284);
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  let size1;
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  const obj = { radio: size, unselected: { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT }, selected: { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED }, dot: size1 };
  size = { width: CONTROL_RADIO_ICON_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: nativeDefault.modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH, borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  ({ backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT });
  ({ borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED });
  size1 = { width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
  return obj;
});
const __initData = { code: "function FormRadioNativeTsx1(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');}" };
const __initData2 = { code: "function FormRadioNativeTsx2(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');}" };
const __initData3 = { code: "function FormRadioNativeTsx3(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}" };
const __initData4 = { code: "function FormRadioNativeTsx4(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = function FormRadio(selected) {
  let derivedValue1;
  let items1;
  let items2;
  let obj10;
  let sharedValue;
  let unselected;
  selected = selected.selected;
  let tmp = derivedValue1();
  const enabled = sharedValue.useContext(selected(unselected[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let derivedValue;
  derivedValue1 = undefined;
  const tmp2 = derivedValue1();
  const selected2 = tmp2.selected;
  unselected = tmp2.unselected;
  let obj = selected(unselected[5]);
  sharedValue = obj.useSharedValue(selected);
  let items = [selected, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(selected);
  }, items);
  const obj2 = selected(unselected[5]);
  class T {
    constructor() {
      let borderColor;
      const withSpring = spring.withSpring;
      spring;
      if (sharedValue.get()) {
        borderColor = selected2.borderColor;
      } else {
        borderColor = unselected.borderColor;
      }
      return withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always");
    }
  }
  T.__closure = { withSpring: selected(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected2, unselectedStyles: unselected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING };
  T.__workletHash = 12275577765341;
  T.__initData = __initData;
  ({ withSpring: selected(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected2, unselectedStyles: unselected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING });
  derivedValue = obj2.useDerivedValue(T);
  const obj4 = selected(unselected[5]);
  class C {
    constructor() {
      let backgroundColor;
      const withSpring = spring.withSpring;
      spring;
      if (sharedValue.get()) {
        backgroundColor = selected2.backgroundColor;
      } else {
        backgroundColor = unselected.backgroundColor;
      }
      return withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
    }
  }
  C.__closure = { withSpring: selected(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected2, unselectedStyles: unselected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING };
  C.__workletHash = 7732795836606;
  C.__initData = __initData2;
  ({ withSpring: selected(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected2, unselectedStyles: unselected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING });
  derivedValue1 = obj4.useDerivedValue(C);
  const fn = function b() {
    const obj = { borderColor: derivedValue.get(), backgroundColor: derivedValue1.get() };
    return obj;
  };
  fn.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
  fn.__workletHash = 5670342272321;
  fn.__initData = __initData3;
  const obj6 = selected(unselected[5]);
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const fn2 = function s() {
    let items;
    let num = 0.5;
    if (enabled) {
      num = 1;
    }
    let num2 = 0;
    const withSpring = selected(unselected[6]).withSpring;
    selected(unselected[6]);
    if (selected) {
      num2 = 1;
    }
    let num3 = 1;
    const obj = { opacity: withSpring(num2, selected(unselected[7]).SUBTLE_SPRING, "animate-always"), transform: items };
    const withSpring2 = selected(unselected[6]).withSpring;
    selected(unselected[6]);
    if (!selected) {
      num3 = num;
    }
    items = [{ scale: withSpring2(num3, selected(unselected[7]).SUBTLE_SPRING) }];
    ({ scale: withSpring2(num3, selected(unselected[7]).SUBTLE_SPRING) });
    return obj;
  };
  const obj7 = selected(unselected[5]);
  fn2.__closure = { useReducedMotion: enabled, withSpring: selected(unselected[6]).withSpring, selected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING };
  fn2.__workletHash = 15209729079449;
  fn2.__initData = __initData4;
  ({ useReducedMotion: enabled, withSpring: selected(unselected[6]).withSpring, selected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING });
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const obj9 = { style: items1, children: derivedValue(selected2(unselected[5]).View, obj10) };
  items1 = [tmp.radio, animatedStyle];
  const View = selected2(unselected[5]).View;
  obj10 = { style: items2 };
  items2 = [tmp.dot, animatedStyle1];
  return derivedValue(View, obj9);
};
