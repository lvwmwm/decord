// Module ID: 6558
// Function ID: 6559
// Name: FormRow
// Dependencies: [19, 17, 21, 4836, 576, 6559, 5998, 5917, 6560, 6561, 5435, 6562, 6564, 6567, 6568, 6569, 2]

// Module 6558 (FormRow)
import nativeDefault from "native" /* 576 */;
import FormLabelDefault from "FormLabel" /* 6560 */;
import FormSubLabelDefault from "FormSubLabel" /* 6561 */;
import FormArrowDefault from "FormArrow" /* 6562 */;
import FormRadioDefault from "FormRadio" /* 6564 */;
import FormCheckboxDefault from "FormCheckbox" /* 6567 */;
import FormCheckmarkDefault from "FormCheckmark" /* 6568 */;
import FormIconDefault from "FormIcon" /* 6569 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let label;

let Platform;
let closure_4;
let hasOwnProperty;
let metroRequire;
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
let obj = { Arrow: FormArrowDefault, Label: FormLabelDefault, SubLabel: FormSubLabelDefault, Radio: FormRadioDefault, Checkbox: FormCheckboxDefault, Checkmark: FormCheckmarkDefault, Icon: FormIconDefault };
const forwardRefResult = react.forwardRef((label, ref) => {
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
  let tmp13;
  let tmp14;
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
    let tmp18;
    if (typeof label === "function") {
      let tmp15 = null;
      if (null != label) {
        let tmp16 = label;
        if (!obj.isValidElement(label)) {
          tmp16 = style(label, {});
        }
        tmp15 = tmp16;
      }
      tmp18 = tmp15;
    } else {
      tmp18 = label;
    }
    if (typeof subLabel !== "function") {
      let tmp19;
      let tmp26;
      let tmp30;
      if (!obj.isValidElement(subLabel)) {
        tmp19 = null;
        if (null != subLabel) {
          tmp19 = subLabel;
        }
      }
      if (typeof leading === "function") {
        let tmp23 = null;
        if (null != leading) {
          let tmp24 = leading;
          if (!obj.isValidElement(leading)) {
            let tmp25 = style;
            tmp24 = style(leading, {});
          }
          tmp23 = tmp24;
        }
        tmp26 = tmp23;
      } else {
        tmp26 = leading;
      }
      if (typeof trailing === "function") {
        let tmp27 = null;
        if (null != trailing) {
          let tmp28 = trailing;
          if (!obj.isValidElement(trailing)) {
            let tmp29 = style;
            tmp28 = style(trailing, {});
          }
          tmp27 = tmp28;
        }
        tmp30 = tmp27;
      } else {
        tmp30 = trailing;
      }
      let tmp31 = style;
      let obj2 = { variant, start, end: flag4, label: tmp18, subLabel: tmp19, icon: tmp26, trailing: tmp30, disabled: flag, accessible: flag3, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
      return style(label(subLabel[7]).TableRow, obj2);
    }
    let tmp20 = null;
    if (null != subLabel) {
      let tmp21 = subLabel;
      if (!obj.isValidElement(subLabel)) {
        const tmp22 = style;
        tmp21 = style(subLabel, {});
      }
      tmp20 = tmp21;
    }
    tmp19 = tmp20;
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
    let tmp8 = null;
    if (null == onPress) {
      let tmp11Result;
      if (null == onLongPress) {
        let obj4 = { ref, style: items, accessible: flag3, accessibilityRole, accessibilityState: obj3, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onAccessibilityTap, children: renderInnerView() };
        items = [tmp.container, DEPRECATED_style, style, , ];
        let error = flag2;
        let tmp33 = numberOfLines;
        const tmp32 = style;
        if (flag2) {
          error = tmp.error;
        }
        items[3] = error;
        let disabled = null;
        if (flag) {
          disabled = tmp.disabled;
        }
        items[4] = disabled;
        tmp11Result = tmp32(tmp33, obj4);
      }
      return tmp11Result;
    }
    let obj5 = { ref, style: items1, disabled: flag, accessible: true, accessibilityRole: str, accessibilityState: obj3, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onAccessibilityTap: tmp13, onPress: tmp14, onLongPress, onPressOut, delayLongPress, unstable_pressDelay: num2, children: renderInnerView() };
    items1 = [tmp.container, DEPRECATED_style, style, , ];
    const PressableHighlight = tmp2(tmp3[10]).PressableHighlight;
    const tmp11 = style;
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
    tmp13 = undefined;
    if (!flag) {
      tmp13 = onAccessibilityTap;
    }
    tmp14 = undefined;
    if (!flag) {
      tmp14 = onPress;
    }
    num2 = undefined;
    if (isForm) {
      num2 = 130;
    }
    tmp11Result = tmp11(PressableHighlight, obj5);
  }
});
let obj2 = assign({}, forwardRefResult, obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default obj2;
