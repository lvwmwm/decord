// Module ID: 5929
// Function ID: 5930
// Name: FormCheckbox
// Dependencies: [19, 21, 4836, 576, 4566, 5283, 4550, 5930, 5280, 5284, 2]
// Exports: FormCheckbox

// Module 5929 (FormCheckbox)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import IconDefault from "Icon" /* 5283 */;
import springPresets from "springPresets" /* 5284 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let size;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { checkbox: size, unselected: obj2, selected: obj3, checkmark: obj4 };
size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj3 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj4 = { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const __initData = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
const __initData2 = { code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
size = size_mod;
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  let items1;
  let unselected;
  checked = checked.checked;
  const tmp = closure_5();
  const enabled = react.useContext(checked(unselected[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp2 = closure_5();
  const selected = tmp2.selected;
  unselected = tmp2.unselected;
  let obj = checked(unselected[4]);
  const fn = function _() {
    let backgroundColor;
    let borderColor;
    let withSpring2;
    const withSpring = spring.withSpring;
    spring;
    if (checked) {
      borderColor = selected.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    const obj = { borderColor: withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"), backgroundColor: withSpring2(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always") };
    withSpring2 = spring.withSpring;
    spring;
    if (checked) {
      backgroundColor = selected.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    return obj;
  };
  const obj2 = { withSpring: checked(unselected[8]).withSpring, checked, selected, unselected, SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 11278373524374;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const fn2 = function c() {
    let items;
    let num = 0.5;
    if (enabled) {
      num = 1;
    }
    let num2 = 0;
    const withSpring = checked(unselected[8]).withSpring;
    checked(unselected[8]);
    if (checked) {
      num2 = 1;
    }
    let num3 = 1;
    const obj = { opacity: withSpring(num2, checked(unselected[9]).SUBTLE_SPRING, "animate-always"), transform: items };
    const withSpring2 = checked(unselected[8]).withSpring;
    checked(unselected[8]);
    if (!checked) {
      num3 = num;
    }
    items = [{ scale: withSpring2(num3, checked(unselected[9]).SUBTLE_SPRING) }];
    ({ scale: withSpring2(num3, checked(unselected[9]).SUBTLE_SPRING) });
    return obj;
  };
  const obj3 = checked(unselected[4]);
  fn2.__closure = { useReducedMotion: enabled, withSpring: checked(unselected[8]).withSpring, checked, SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING };
  fn2.__workletHash = 13939484082835;
  fn2.__initData = __initData2;
  ({ useReducedMotion: enabled, withSpring: checked(unselected[8]).withSpring, checked, SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING });
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  let items = [tmp.checkbox, animatedStyle];
  ({ source: selected(unselected[7]), size: selected(unselected[5]).Sizes.SMALL_20, style: items1 });
  const View = selected(unselected[4]).View;
  items1 = [tmp.checkmark, animatedStyle1];
  return <View style={items}>{null}</View>;
};
