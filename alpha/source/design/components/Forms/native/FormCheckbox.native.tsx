// Module ID: 7130
// Function ID: 7131
// Name: FormCheckbox
// Dependencies: [19, 21, 5141, 575, 1652, 5770, 5155, 7131, 5771, 5772, 2]
// Exports: FormCheckbox

// Module 7130 (FormCheckbox)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import react2 from "react" /* 5155 */;
import IconDefault from "Icon" /* 5770 */;
import spring_spring from "spring/spring" /* 5771 */;
import springPresets from "springPresets" /* 5772 */;
import AssetRegistryDefault from "AssetRegistry" /* 7131 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const module_1652 = _mod1652;
let backgroundColor, borderColor, num, num2, num3, obj1, tmp2;

let obj2;
let size;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { checkbox: size, unselected: obj2, selected: { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT }, checkmark: { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE } };
size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
({ borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT });
({ tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE });
let closure_5 = createStyles(obj);
const Icon = module_1652.createAnimatedComponent(IconDefault);
let closure_7 = { code: "(function FormCheckboxNativeTsx1(){let[withSpring,checked,selected,unselected,SUBTLE_SPRING]=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;})" };
let closure_8 = { code: "(function FormCheckboxNativeTsx2(){let[useReducedMotion,withSpring,checked,SUBTLE_SPRING]=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};})" };
size = size_mod;
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export function FormCheckbox(checked) {
  let items5;
  let selected;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let unselected;
  checked = checked.checked;
  const tmp = closure_5();
  const tmp3 = dependencyMap;
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  ({ selected, unselected } = closure_5());
  const tmp4 = closure_5();
  let tmp5 = _mod1652;
  let items = [closure_7, , , , , ];
  const useAnimatedStyle = tmp5.useAnimatedStyle;
  items[1] = spring_spring.withSpring;
  items[2] = checked;
  items[3] = selected;
  items[4] = unselected;
  items[5] = springPresets.SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class FormCheckboxNativeTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      if (tmp2) {
        tmp4 = closure_2;
        borderColor = closure_2.borderColor;
      } else {
        tmp3 = closure_3;
        borderColor = closure_3.borderColor;
      }
      obj = { borderColor: tmp(borderColor, closure_4, "animate-always"), backgroundColor: null };
      tmp5 = closure_4;
      if (tmp2) {
        tmp7 = closure_2;
        backgroundColor = closure_2.backgroundColor;
      } else {
        tmp6 = closure_3;
        backgroundColor = closure_3.backgroundColor;
      }
      obj.backgroundColor = tmp(backgroundColor, tmp5, "animate-always");
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  FormCheckboxNativeTsx1.__closure = items1;
  FormCheckboxNativeTsx1.__workletHash = 16653690425039;
  FormCheckboxNativeTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(FormCheckboxNativeTsx1);
  const items2 = [closure_8, enabled, , , ];
  const useAnimatedStyle2 = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items2[2] = spring_spring.withSpring;
  items2[3] = checked;
  items2[4] = springPresets.SUBTLE_SPRING;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class FormCheckboxNativeTsx2 {
    constructor() {
      num = 0.5;
      if (closure_0) {
        num = 1;
      }
      tmp = closure_1;
      num2 = 0;
      tmp2 = closure_2;
      if (tmp2) {
        num2 = 1;
      }
      obj = { opacity: tmp(num2, closure_3, "animate-always"), transform: null };
      tmp3 = closure_3;
      num3 = 1;
      if (!tmp2) {
        num3 = num;
      }
      obj1 = { scale: tmp(num3, tmp3) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp15, tmp16, tmp17, tmp18];
  FormCheckboxNativeTsx2.__closure = items3;
  FormCheckboxNativeTsx2.__workletHash = 5917557474474;
  FormCheckboxNativeTsx2.__initData = tmp14;
  const animatedStyle2 = useAnimatedStyle2(FormCheckboxNativeTsx2);
  const items4 = [tmp.checkbox, animatedStyle];
  const obj2 = { source: AssetRegistryDefault, size: IconDefault.Sizes.SMALL_20, style: items5 };
  const View = module_1652.View;
  items5 = [tmp.checkmark, animatedStyle2];
  return <View style={items4}>{null}</View>;
}
