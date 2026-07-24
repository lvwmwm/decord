// Module ID: 7655
// Function ID: 60863
// Name: FormRadio
// Dependencies: [31, 33, 4130, 689, 3849, 3991, 4542, 4546, 2]
// Exports: FormRadio

// Module 7655 (FormRadio)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = importDefault(689).modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = importDefault(689).modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  let obj = {};
  obj = { width: CONTROL_RADIO_ICON_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: importDefault(689).radii.round, borderWidth: importDefault(689).modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH, borderColor: importDefault(689).colors.RADIO_BORDER_DEFAULT };
  obj.radio = obj;
  obj = { backgroundColor: "transparent", borderColor: importDefault(689).colors.RADIO_BORDER_DEFAULT };
  obj.unselected = obj;
  obj.selected = { borderColor: importDefault(689).colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: importDefault(689).colors.REDESIGN_INPUT_CONTROL_SELECTED };
  const obj1 = { borderColor: importDefault(689).colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: importDefault(689).colors.REDESIGN_INPUT_CONTROL_SELECTED };
  obj.dot = { width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, backgroundColor: importDefault(689).colors.WHITE, borderRadius: importDefault(689).radii.round };
  return obj;
});
let closure_6 = { code: "function FormRadioNativeTsx1(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');}" };
let closure_7 = { code: "function FormRadioNativeTsx2(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');}" };
let closure_8 = { code: "function FormRadioNativeTsx3(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}" };
let closure_9 = { code: "function FormRadioNativeTsx4(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = function FormRadio(selected) {
  selected = selected.selected;
  let tmp = callback();
  const tmp2 = (function useRadioStyles(selected) {
    let closure_0 = selected;
    const tmp = outer1_5();
    selected = tmp.selected;
    const unselected = tmp.unselected;
    let obj = outer1_0(outer1_2[5]);
    const sharedValue = obj.useSharedValue(selected);
    const items = [selected, sharedValue];
    const effect = outer1_3.useEffect(() => {
      const result = sharedValue.set(closure_0);
    }, items);
    class T {
      constructor() {
        obj = outer2_0(outer2_2[6]);
        if (result.get()) {
          tmp2 = selected;
          borderColor = selected.borderColor;
        } else {
          tmp = unselected;
          borderColor = unselected.borderColor;
        }
        return obj.withSpring(borderColor, outer2_0(outer2_2[7]).SUBTLE_SPRING, "animate-always");
      }
    }
    obj = { withSpring: outer1_0(outer1_2[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected, unselectedStyles: unselected, SUBTLE_SPRING: outer1_0(outer1_2[7]).SUBTLE_SPRING };
    T.__closure = obj;
    T.__workletHash = 12275577765341;
    T.__initData = outer1_6;
    const derivedValue = outer1_0(outer1_2[5]).useDerivedValue(T);
    const obj2 = outer1_0(outer1_2[5]);
    class C {
      constructor() {
        obj = outer2_0(outer2_2[6]);
        if (result.get()) {
          tmp2 = selected;
          backgroundColor = selected.backgroundColor;
        } else {
          tmp = unselected;
          backgroundColor = unselected.backgroundColor;
        }
        return obj.withSpring(backgroundColor, outer2_0(outer2_2[7]).SUBTLE_SPRING, "animate-always");
      }
    }
    obj = { withSpring: outer1_0(outer1_2[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected, unselectedStyles: unselected, SUBTLE_SPRING: outer1_0(outer1_2[7]).SUBTLE_SPRING };
    C.__closure = obj;
    C.__workletHash = 7732795836606;
    C.__initData = outer1_7;
    const derivedValue1 = outer1_0(outer1_2[5]).useDerivedValue(C);
    const obj4 = outer1_0(outer1_2[5]);
    const fn = function b() {
      return { borderColor: derivedValue.get(), backgroundColor: derivedValue1.get() };
    };
    fn.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
    fn.__workletHash = 5670342272321;
    fn.__initData = outer1_8;
    return outer1_0(outer1_2[5]).useAnimatedStyle(fn);
  })(selected);
  let obj = { style: items };
  items = [tmp.radio, tmp2];
  const items1 = [
    tmp.dot,
    (function useRadioDotStyles(enabled, selected) {
      let closure_0 = enabled;
      let closure_1 = selected;
      let obj = outer1_0(outer1_2[5]);
      const fn = function s() {
        let num = 0.5;
        if (closure_0) {
          num = 1;
        }
        let obj = {};
        let num2 = 0;
        if (closure_1) {
          num2 = 1;
        }
        obj.opacity = outer2_0(outer2_2[6]).withSpring(num2, outer2_0(outer2_2[7]).SUBTLE_SPRING, "animate-always");
        obj = {};
        const obj2 = outer2_0(outer2_2[6]);
        let num3 = 1;
        if (!closure_1) {
          num3 = num;
        }
        obj.scale = outer2_0(outer2_2[6]).withSpring(num3, outer2_0(outer2_2[7]).SUBTLE_SPRING);
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { useReducedMotion: enabled, withSpring: outer1_0(outer1_2[6]).withSpring, selected, SUBTLE_SPRING: outer1_0(outer1_2[7]).SUBTLE_SPRING };
      fn.__closure = obj;
      fn.__workletHash = 15209729079449;
      fn.__initData = outer1_9;
      return obj.useAnimatedStyle(fn);
    })(React.useContext(require(3849) /* context */.AccessibilityPreferencesContext).reducedMotion.enabled, selected)
  ];
  obj.children = jsx(importDefault(3991).View, { style: items1 });
  return jsx(importDefault(3991).View, { style: items });
};
