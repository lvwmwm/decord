// Module ID: 7638
// Function ID: 60779
// Name: FormCheckbox
// Dependencies: [31, 33, 4130, 689, 3991, 4545, 1324, 3849, 5504, 4542, 4546, 2]
// Exports: FormCheckbox

// Module 7638 (FormCheckbox)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import getIconSize from "getIconSize";
import importDefaultResult from "module_3991";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BORDER_DEFAULT };
_createForOfIteratorHelperLoose.checkbox = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.unselected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BORDER_DEFAULT };
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BORDER_DEFAULT };
_createForOfIteratorHelperLoose.selected = { borderColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
_createForOfIteratorHelperLoose.checkmark = { tintColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_ICON_ACTIVE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.CHECKBOX_ICON_ACTIVE };
let closure_7 = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
let closure_8 = { code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp2 = _createForOfIteratorHelperLoose();
  let tmp = importDefault(1324)("FormCheckbox");
  const tmp3 = (function useCheckboxStyles(checked) {
    let closure_0 = checked;
    const tmp = outer1_5();
    const selected = tmp.selected;
    const unselected = tmp.unselected;
    let obj = outer1_0(outer1_2[4]);
    const fn = function _() {
      const obj = {};
      if (closure_0) {
        let borderColor = selected.borderColor;
      } else {
        borderColor = unselected.borderColor;
      }
      obj.borderColor = outer2_0(outer2_2[9]).withSpring(borderColor, outer2_0(outer2_2[10]).SUBTLE_SPRING, "animate-always");
      const obj2 = outer2_0(outer2_2[9]);
      if (closure_0) {
        let backgroundColor = selected.backgroundColor;
      } else {
        backgroundColor = unselected.backgroundColor;
      }
      obj.backgroundColor = outer2_0(outer2_2[9]).withSpring(backgroundColor, outer2_0(outer2_2[10]).SUBTLE_SPRING, "animate-always");
      return obj;
    };
    obj = { withSpring: outer1_0(outer1_2[9]).withSpring, checked, selected, unselected, SUBTLE_SPRING: outer1_0(outer1_2[10]).SUBTLE_SPRING };
    fn.__closure = obj;
    fn.__workletHash = 11278373524374;
    fn.__initData = outer1_7;
    return obj.useAnimatedStyle(fn);
  })(checked);
  let obj = { style: items };
  items = [tmp2.checkbox, tmp3];
  obj = { source: importDefault(5504) };
  const Sizes = importDefault(4545).Sizes;
  obj.size = tmp ? Sizes.SMALL_20 : Sizes.SMALL;
  const items1 = [
    tmp2.checkmark,
    (function useCheckmarkStyles(enabled, checked) {
      let closure_0 = enabled;
      let closure_1 = checked;
      let obj = outer1_0(outer1_2[4]);
      const fn = function c() {
        let num = 0.5;
        if (closure_0) {
          num = 1;
        }
        let obj = {};
        let num2 = 0;
        if (closure_1) {
          num2 = 1;
        }
        obj.opacity = outer2_0(outer2_2[9]).withSpring(num2, outer2_0(outer2_2[10]).SUBTLE_SPRING, "animate-always");
        obj = {};
        const obj2 = outer2_0(outer2_2[9]);
        let num3 = 1;
        if (!closure_1) {
          num3 = num;
        }
        obj.scale = outer2_0(outer2_2[9]).withSpring(num3, outer2_0(outer2_2[10]).SUBTLE_SPRING);
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { useReducedMotion: enabled, withSpring: outer1_0(outer1_2[9]).withSpring, checked, SUBTLE_SPRING: outer1_0(outer1_2[10]).SUBTLE_SPRING };
      fn.__closure = obj;
      fn.__workletHash = 13939484082835;
      fn.__initData = outer1_8;
      return obj.useAnimatedStyle(fn);
    })(React.useContext(require(3849) /* context */.AccessibilityPreferencesContext).reducedMotion.enabled, checked)
  ];
  obj.style = items1;
  obj.children = <getIconSize source={importDefault(5504)} />;
  return jsx(importDefault(3991).View, { source: importDefault(5504) });
};
