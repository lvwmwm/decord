// Module ID: 7309
// Function ID: 7310
// Name: FormRow
// Dependencies: [19, 17, 21, 5014, 575, 7310, 7059, 6975, 7311, 7312, 6980, 7313, 7315, 7318, 7319, 7320, 2]

// Module 7309 (FormRow)
import nativeDefault from "native" /* 575 */;
import FormLabelDefault from "FormLabel" /* 7311 */;
import FormSubLabelDefault from "FormSubLabel" /* 7312 */;
import FormArrowDefault from "FormArrow" /* 7313 */;
import FormRadioDefault from "FormRadio" /* 7315 */;
import FormCheckboxDefault from "FormCheckbox" /* 7318 */;
import FormCheckmarkDefault from "FormCheckmark" /* 7319 */;
import FormIconDefault from "FormIcon" /* 7320 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let Platform;
let closure_4;
let hasOwnProperty;
let metroRequire;
class FormRow {
  constructor(label) {
    let DEPRECATED_style;
    let accessibilityActions;
    let accessibilityHint;
    let accessibilityLabel;
    let accessibilityRole;
    let accessibilityState;
    let closure_5;
    let closure_6;
    let delayLongPress;
    let items;
    let items1;
    let num2;
    let numberOfLines;
    let onAccessibilityAction;
    let onAccessibilityTap;
    let onLongPress;
    let onPress;
    let start;
    let str;
    let style;
    let subLabel;
    let tmp12;
    let tmp13;
    label = label.label;
    const leading = label.leading;
    ({ onPress, onLongPress, DEPRECATED_style, subLabel } = label);
    const trailing = label.trailing;
    let flag = label.disabled;
    const onPressOut = label.onPressOut;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = label.hasError;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = label.accessible;
    if (flag3 === undefined) {
      flag3 = true;
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = label);
    ({ style, labelStyle: closure_5, trailingWrapperStyle: closure_6, leadingStyle: closure_7, delayLongPress, start } = label);
    if (start === undefined) {
      start = false;
    }
    let flag4 = label.end;
    if (flag4 === undefined) {
      flag4 = false;
    }
    const variant = label.variant;
    const tmp = closure_7();
    let closure_8 = tmp;
    let obj = trailing;
    const isForm = trailing.useContext(label(subLabel[5]).FormContext).isForm;
    if (trailing.useContext(label(subLabel[6]).RedesignCompatContext)) {
      let tmp17;
      if (typeof label === "function") {
        let tmp14 = null;
        if (null != label) {
          let tmp15 = label;
          if (!obj.isValidElement(label)) {
            tmp15 = style(label, {});
          }
          tmp14 = tmp15;
        }
        tmp17 = tmp14;
      } else {
        tmp17 = label;
      }
      if (typeof subLabel !== "function") {
        let tmp18;
        let tmp25;
        let tmp29;
        if (!obj.isValidElement(subLabel)) {
          tmp18 = null;
          if (null != subLabel) {
            tmp18 = subLabel;
          }
        }
        if (typeof leading === "function") {
          let tmp22 = null;
          if (null != leading) {
            let tmp23 = leading;
            if (!obj.isValidElement(leading)) {
              tmp23 = style(leading, {});
            }
            tmp22 = tmp23;
          }
          tmp25 = tmp22;
        } else {
          tmp25 = leading;
        }
        if (typeof trailing === "function") {
          let tmp26 = null;
          if (null != trailing) {
            let tmp27 = trailing;
            if (!obj.isValidElement(trailing)) {
              const tmp28 = style;
              tmp27 = style(trailing, {});
            }
            tmp26 = tmp27;
          }
          tmp29 = tmp26;
        } else {
          tmp29 = trailing;
        }
        let obj2 = { variant, start, end: flag4, label: tmp17, subLabel: tmp18, icon: tmp25, trailing: tmp29, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
        return style(label(subLabel[7]).TableRow, obj2);
      }
      let tmp19 = null;
      if (null != subLabel) {
        let tmp20 = subLabel;
        if (!obj.isValidElement(subLabel)) {
          tmp20 = style(subLabel, {});
        }
        tmp19 = tmp20;
      }
      tmp18 = tmp19;
    } else {
      function renderInnerView() {
        let items;
        let items2;
        let items3;
        if (typeof label !== "function") {
          let tmp7;
          if (!react.isValidElement(label)) {
            const obj = { numberOfLines, text: label, style };
            tmp7 = hasOwnProperty(FormLabelDefault, obj);
          }
          if (typeof subLabel !== "function") {
            let tmp13;
            let tmp27;
            let tmp33;
            if (!react.isValidElement(subLabel)) {
              tmp13 = null;
              if (null != subLabel) {
                const obj2 = { text: subLabel, numberOfLines };
                tmp13 = hasOwnProperty(FormSubLabelDefault, obj2);
              }
            }
            if (typeof leading === "function") {
              let tmp23 = null;
              if (null != leading) {
                let tmp25 = tmp22;
                if (!react.isValidElement(leading)) {
                  tmp25 = hasOwnProperty(tmp22, {});
                }
                tmp23 = tmp25;
              }
              tmp27 = tmp23;
            } else {
              tmp27 = tmp22;
            }
            if (typeof trailing === "function") {
              let tmp29 = null;
              if (null != trailing) {
                let tmp31 = tmp28;
                if (!react.isValidElement(trailing)) {
                  tmp31 = hasOwnProperty(tmp28, {});
                }
                tmp29 = tmp31;
              }
              tmp33 = tmp29;
            } else {
              tmp33 = tmp28;
            }
            let tmp37 = null;
            const Fragment = react.Fragment;
            if (null != leading) {
              const obj3 = { style: items, children: tmp27 };
              items = [closure_8.leading, closure_7];
              tmp37 = hasOwnProperty(React3, obj3);
            }
            const items1 = [tmp37, , ];
            const obj4 = { style: closure_8.label, children: items2 };
            items2 = [tmp7, tmp13];
            items1[1] = metroRequire(React3, obj4);
            let tmp44 = null;
            const tmp42 = React3;
            const tmp43 = closure_8;
            if (null != trailing) {
              const obj5 = { style: items3, children: tmp33 };
              items3 = [tmp43.trailing, closure_6];
              tmp44 = hasOwnProperty(tmp42, obj5);
            }
            const obj6 = { children: items1 };
            items1[2] = tmp44;
            return metroRequire(Fragment, obj6);
          }
          let tmp18 = null;
          if (null != subLabel) {
            let tmp20 = tmp12;
            if (!react.isValidElement(subLabel)) {
              tmp20 = hasOwnProperty(tmp12, {});
            }
            tmp18 = tmp20;
          }
          tmp13 = tmp18;
        }
        let tmp8 = null;
        if (null != label) {
          let tmp10 = tmp;
          if (!react.isValidElement(label)) {
            tmp10 = hasOwnProperty(tmp, {});
          }
          tmp8 = tmp10;
        }
        tmp7 = tmp8;
      }
      let obj3 = { disabled: flag };
      const merged = Object.assign(accessibilityState);
      let tmp7 = null;
      if (null == onPress) {
        let tmp10Result;
        if (null == onLongPress) {
          let obj4 = { ref: label.ref, style: items, accessible: flag3, accessibilityRole, accessibilityState: obj3, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onAccessibilityTap, children: renderInnerView() };
          items = [tmp.container, DEPRECATED_style, style, , ];
          let error = flag2;
          let tmp31 = style;
          const tmp32 = numberOfLines;
          if (flag2) {
            error = tmp.error;
          }
          items[3] = error;
          let disabled = null;
          if (flag) {
            disabled = tmp.disabled;
          }
          items[4] = disabled;
          tmp10Result = tmp31(tmp32, obj4);
        }
        return tmp10Result;
      }
      let tmp10 = style;
      let obj5 = { ref: label.ref, style: items1, disabled: flag, accessible: true, accessibilityRole: str, accessibilityState: obj3, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onAccessibilityTap: tmp12, onPress: tmp13, onLongPress, onPressOut, delayLongPress, unstable_pressDelay: num2, children: renderInnerView() };
      items1 = [tmp.container, DEPRECATED_style, style, , ];
      const PressableHighlight = tmp2(tmp3[10]).PressableHighlight;
      if (flag2) {
        flag2 = tmp.error;
      }
      items1[3] = flag2;
      let disabled1 = null;
      if (flag) {
        disabled1 = tmp.disabled;
      }
      items1[4] = disabled1;
      str = accessibilityRole;
      if (accessibilityRole == null) {
        str = "button";
      }
      tmp12 = undefined;
      if (!flag) {
        tmp12 = onAccessibilityTap;
      }
      tmp13 = undefined;
      if (!flag) {
        tmp13 = onPress;
      }
      num2 = undefined;
      if (isForm) {
        num2 = 130;
      }
      tmp10Result = tmp10(PressableHighlight, obj5);
    }
  }
}
({ Platform, View: closure_4 } = react_native);
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let obj2;
  let obj4;
  const obj = { container: obj2, label: { flexShrink: 1, flexGrow: 1, flexBasis: "30%" }, leading: { flexGrow: 0, marginRight: 16 }, trailing: { marginLeft: "auto", paddingLeft: 16, textAlign: "right", flexShrink: 0 }, disabled: { opacity: 0.5 }, error: obj4 };
  obj2 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" };
  const obj3 = { paddingHorizontal: 16, paddingVertical: 16 };
  const merged = Object.assign(obj3);
  obj4 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
  const obj5 = { paddingHorizontal: 14, paddingVertical: 14 };
  const merged1 = Object.assign(obj5);
  return obj;
});
FormRow.Arrow = FormArrowDefault;
FormRow.Label = FormLabelDefault;
FormRow.SubLabel = FormSubLabelDefault;
FormRow.Radio = FormRadioDefault;
FormRow.Checkbox = FormCheckboxDefault;
FormRow.Checkmark = FormCheckmarkDefault;
FormRow.Icon = FormIconDefault;
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default FormRow;
