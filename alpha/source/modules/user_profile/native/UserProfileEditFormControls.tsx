// Module ID: 16136
// Function ID: 16137
// Name: UserProfileEditFormControls
// Dependencies: [32, 19, 17, 21, 5004, 587, 558, 576, 5270, 9456, 1199, 1125, 6948, 6944, 7045, 1381, 7332, 2]

// Module 16136 (UserProfileEditFormControls)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import Pressables from "Pressables" /* 6944 */;
import Input2 from "Input" /* 7045 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9456 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const PlatformUtils = tmp(1381);
const Text_Text = tmp(5270);
const FormSwitch = tmp(7332);
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonDisabled: { opacity: 0.5 }, buttonGroup: obj3, buttonInGroup: { borderWidth: 0 }, buttonTextContainer: { flexGrow: 1, flexShrink: 1, flexDirection: "column" }, formControlText: { marginRight: "auto", flexShrink: 1 }, labelTrailing: obj4, newBadge: { paddingTop: 0 } };
obj2 = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexShrink: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj4 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormControlText(text) {
  const obj = react2;
  const cResult = obj.c(3);
  text = text.text;
  const tmp4 = closure_8();
  if (cResult[0] === tmp4.formControlText) {
    let tmp5;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp4.formControlText, children: text };
  const tmp6 = metroRequire(Text_Text.Text, obj2);
  cResult[0] = tmp4.formControlText;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FormControlText(text) {
  text = text.text;
  const obj = { variant: "text-sm/medium", color: "text-default", style: closure_8().formControlText, children: text };
  return metroRequire(Text_Text.Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormControlSubtext(text) {
  const obj = react2;
  const cResult = obj.c(3);
  text = text.text;
  const tmp4 = closure_8();
  let tmp5 = null;
  if (null != text) {
    if (cResult[0] === tmp4.formControlText) {
      let tmp6;
      if (cResult[1] === text) {
        tmp6 = cResult[2];
      }
      tmp5 = tmp6;
    }
    const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.formControlText, children: text };
    const tmp8 = metroRequire(Text_Text.Text, obj2);
    cResult[0] = tmp4.formControlText;
    cResult[1] = text;
    cResult[2] = tmp8;
    tmp6 = tmp8;
  }
  return tmp5;
}) : (function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.formControlText, children: text };
    tmp2 = metroRequire(Text_Text.Text, obj);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormLabelBadges(arg0) {
  let intl;
  let items;
  let showNewBadge;
  let showPremiumIcon;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(9);
  ({ showPremiumIcon, showNewBadge } = arg0);
  const tmp6 = closure_8();
  if (undefined !== showPremiumIcon && showPremiumIcon) {
    let tmp8;
    if (cResult[0] !== (undefined !== showPremiumIcon && showPremiumIcon)) {
      let tmp9 = null;
      if (undefined !== showPremiumIcon && showPremiumIcon) {
        tmp9 = metroRequire(tmp(9456).NitroWheelIcon, { size: "xs" });
      }
      cResult[0] = undefined !== showPremiumIcon && showPremiumIcon;
      cResult[1] = tmp9;
      tmp8 = tmp9;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === (undefined !== showNewBadge && showNewBadge)) {
      let tmp11;
      if (cResult[3] === tmp6.newBadge) {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp6.labelTrailing) {
        if (cResult[6] === tmp8) {
          let tmp14;
          if (cResult[7] === tmp11) {
            tmp14 = cResult[8];
          }
          tmp7 = tmp14;
        }
      }
      const obj2 = { style: tmp6.labelTrailing, "aria-hidden": true, children: items };
      items = [tmp8, tmp11];
      const tmp17 = metroImportDefault(hasOwnProperty, obj2);
      cResult[5] = tmp6.labelTrailing;
      cResult[6] = tmp8;
      cResult[7] = tmp11;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
    let tmp12 = null;
    if (undefined !== showNewBadge && showNewBadge) {
      const obj3 = { text: intl.string(intl2.t.y2b7CA), style: tmp6.newBadge };
      const TextBadge = tmp(1199).TextBadge;
      intl = tmp(1125).intl;
      tmp12 = metroRequire(TextBadge, obj3);
    }
    cResult[2] = undefined !== showNewBadge && showNewBadge;
    cResult[3] = tmp6.newBadge;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp7 = null;
  }
  return tmp7;
}) : (function UserProfileEditFormLabelBadges(showPremiumIcon) {
  let intl;
  let items;
  let tmp3Result;
  let flag = showPremiumIcon.showPremiumIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showPremiumIcon.showNewBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_8();
  if (flag) {
    let tmp5 = null;
    const obj = { style: tmp.labelTrailing, "aria-hidden": true, children: items };
    const tmp3 = metroImportDefault;
    const tmp4 = hasOwnProperty;
    if (flag) {
      tmp5 = metroRequire(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
    }
    items = [tmp5, ];
    let tmp9 = null;
    if (flag2) {
      const obj2 = { text: intl.string(intl2.t.y2b7CA), style: tmp.newBadge };
      const TextBadge = native.TextBadge;
      intl = intl2.intl;
      tmp9 = metroRequire(TextBadge, obj2);
    }
    items[1] = tmp9;
    tmp3Result = tmp3(tmp4, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormButton(arg0) {
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let content;
  let disabled;
  let footer;
  let hideArrow;
  let items;
  let items1;
  let items2;
  let label;
  let labelTrailing;
  let leading;
  let loading;
  let onPress;
  let trailing;
  const obj = react2;
  const cResult = obj.c(36);
  ({ label, labelTrailing, buttonText, buttonSubtext, content, onPress, leading, trailing, accessibilityValue, disabled, loading, hideArrow, footer } = arg0);
  const tmp7 = closure_8();
  if (cResult[0] === tmp7.button) {
    if (cResult[1] === (null != footer && tmp7.buttonInGroup)) {
      let tmp10;
      let tmp11;
      if (cResult[2] === (undefined !== disabled && disabled && tmp7.buttonDisabled)) {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== (undefined !== disabled && disabled)) {
        let stringResult;
        if (!(undefined !== disabled && disabled)) {
          const intl = tmp(1125).intl;
          stringResult = intl.string(tmp(1125).t["4lAcxv"]);
        }
        cResult[4] = undefined !== disabled && disabled;
        cResult[5] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === (undefined !== disabled && disabled)) {
        let tmp13;
        if (cResult[7] === (undefined !== loading && loading)) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === buttonSubtext) {
          if (cResult[10] === buttonText) {
            if (cResult[11] === content) {
              let tmp14;
              let tmp23;
              if (cResult[12] === tmp7.buttonTextContainer) {
                tmp14 = cResult[13];
              }
              if (cResult[14] !== (undefined !== hideArrow && hideArrow)) {
                const tmp24 = !tmp6 && metroRequire(tmp(6948).TableRowArrow, {});
                cResult[14] = undefined !== hideArrow && hideArrow;
                cResult[15] = tmp24;
                tmp23 = tmp24;
              } else {
                tmp23 = cResult[15];
              }
              if (cResult[16] === accessibilityValue) {
                if (cResult[17] === (undefined !== disabled && disabled)) {
                  if (cResult[18] === label) {
                    if (cResult[19] === leading) {
                      if (cResult[20] === onPress) {
                        if (cResult[21] === tmp23) {
                          if (cResult[22] === tmp10) {
                            if (cResult[23] === tmp11) {
                              if (cResult[24] === tmp13) {
                                if (cResult[25] === tmp14) {
                                  let tmp26;
                                  if (cResult[26] === trailing) {
                                    tmp26 = cResult[27];
                                  }
                                  if (cResult[28] === tmp26) {
                                    if (cResult[29] === footer) {
                                      let tmp29;
                                      if (cResult[30] === tmp7.buttonGroup) {
                                        tmp29 = cResult[31];
                                      }
                                      if (cResult[32] === label) {
                                        if (cResult[33] === labelTrailing) {
                                          let tmp33;
                                          if (cResult[34] === tmp29) {
                                            tmp33 = cResult[35];
                                          }
                                          return tmp33;
                                        }
                                      }
                                      const obj2 = { label, labelTrailing, children: tmp29 };
                                      const tmp35 = metroRequire(Input2.Input, obj2);
                                      cResult[32] = label;
                                      cResult[33] = labelTrailing;
                                      cResult[34] = tmp29;
                                      cResult[35] = tmp35;
                                      tmp33 = tmp35;
                                    }
                                  }
                                  let tmp30 = tmp26;
                                  if (null != footer) {
                                    const obj3 = { style: tmp7.buttonGroup, children: items };
                                    items = [tmp26, footer];
                                    tmp30 = metroImportDefault(hasOwnProperty, obj3);
                                  }
                                  cResult[28] = tmp26;
                                  cResult[29] = footer;
                                  cResult[30] = tmp7.buttonGroup;
                                  cResult[31] = tmp30;
                                  tmp29 = tmp30;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj4 = { onPress, style: tmp10, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: tmp11, accessibilityState: tmp13, disabled: undefined !== disabled && disabled, children: items1 };
              items1 = [leading, tmp14, trailing, tmp23];
              const tmp28 = metroImportDefault(Pressables.PressableHighlight, obj4);
              cResult[16] = accessibilityValue;
              cResult[17] = undefined !== disabled && disabled;
              cResult[18] = label;
              cResult[19] = leading;
              cResult[20] = onPress;
              cResult[21] = tmp23;
              cResult[22] = tmp10;
              cResult[23] = tmp11;
              cResult[24] = tmp13;
              cResult[25] = tmp14;
              cResult[26] = trailing;
              cResult[27] = tmp28;
              tmp26 = tmp28;
            }
          }
        }
        let tmp16Result = content;
        if (content == null) {
          let tmp18 = null != buttonText;
          const obj5 = { style: tmp7.buttonTextContainer, children: items2 };
          const tmp16 = metroImportDefault;
          const tmp17 = hasOwnProperty;
          if (tmp18) {
            const obj6 = { text: buttonText };
            tmp18 = metroRequire(closure_9, obj6);
          }
          items2 = [tmp18, ];
          const obj7 = { text: buttonSubtext };
          items2[1] = metroRequire(closure_10, obj7);
          tmp16Result = tmp16(tmp17, obj5);
        }
        cResult[9] = buttonSubtext;
        cResult[10] = buttonText;
        cResult[11] = content;
        cResult[12] = tmp7.buttonTextContainer;
        cResult[13] = tmp16Result;
        tmp14 = tmp16Result;
      }
      const obj8 = { disabled: undefined !== disabled && disabled, busy: undefined !== loading && loading };
      cResult[6] = undefined !== disabled && disabled;
      cResult[7] = undefined !== loading && loading;
      cResult[8] = obj8;
      tmp13 = obj8;
    }
  }
  const items3 = [tmp7.button, null != footer && tmp7.buttonInGroup, undefined !== disabled && disabled && tmp7.buttonDisabled];
  cResult[0] = tmp7.button;
  cResult[1] = null != footer && tmp7.buttonInGroup;
  cResult[2] = undefined !== disabled && disabled && tmp7.buttonDisabled;
  cResult[3] = items3;
  tmp10 = items3;
}) : (function UserProfileEditFormButton(loading) {
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let content;
  let disabled;
  let items;
  let items1;
  let items2;
  let items3;
  let label;
  let labelTrailing;
  let leading;
  let onPress;
  let stringResult;
  let tmp2Result2;
  let trailing;
  ({ label, buttonText, content, disabled } = loading);
  ({ labelTrailing, buttonSubtext, onPress, leading, trailing, accessibilityValue } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hideArrow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const footer = loading.footer;
  const tmp = closure_8();
  const obj = { onPress, style: items, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: stringResult, accessibilityState: { disabled, busy: flag }, disabled, children: items1 };
  items = [tmp.button, , ];
  let buttonInGroup = null != footer;
  const PressableHighlight = Pressables.PressableHighlight;
  if (buttonInGroup) {
    buttonInGroup = tmp.buttonInGroup;
  }
  items[1] = buttonInGroup;
  items[2] = disabled && tmp.buttonDisabled;
  stringResult = undefined;
  if (!disabled) {
    const intl = tmp3(1125).intl;
    stringResult = intl.string(tmp3(1125).t["4lAcxv"]);
  }
  items1 = [leading, , , ];
  if (content == null) {
    let tmp7 = null != buttonText;
    const obj2 = { style: tmp.buttonTextContainer, children: items2 };
    const tmp6 = hasOwnProperty;
    if (tmp7) {
      const obj3 = { text: buttonText };
      tmp7 = metroRequire(closure_9, obj3);
    }
    items2 = [tmp7, ];
    const obj4 = { text: buttonSubtext };
    items2[1] = metroRequire(closure_10, obj4);
    content = tmp2(tmp6, obj2);
  }
  items1[1] = content;
  items1[2] = trailing;
  items1[3] = !flag2 && metroRequire(tmp3(6948).TableRowArrow, {});
  const tmp12 = !flag2 && metroRequire(tmp3(6948).TableRowArrow, {});
  const tmp2Result = metroImportDefault(PressableHighlight, obj);
  const obj5 = { label, labelTrailing, children: tmp2Result2 };
  tmp2Result2 = tmp2Result;
  const Input = tmp3(7045).Input;
  const tmp15 = metroRequire;
  if (null != footer) {
    const obj6 = { style: tmp.buttonGroup, children: items3 };
    items3 = [tmp2Result, footer];
    tmp2Result2 = tmp2(hasOwnProperty, obj6);
  }
  return tmp15(Input, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormSwitch(onValueChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let closure_129_2;
  let disabled;
  let label;
  let subLabel;
  let tmp8;
  let value;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(31);
  ({ label, subLabel, value } = onValueChange);
  onValueChange = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, disabled } = onValueChange);
  closure_8();
  let tmpResult = PlatformUtils;
  const isAndroidResult = tmpResult.isAndroid();
  [tmp8, closure_129_2] = react.useState(value);
  _slicedToArray(react.useState(value), 2);
  const obj3 = react;
  if (cResult[0] === onValueChange) {
    let tmp9;
    let tmp11;
    let tmp10;
    if (cResult[1] === value) {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== value) {
      class I {
        constructor() {
          closure_1_2(value);
        }
      }
      const items = [value];
      cResult[3] = value;
      cResult[4] = I;
      cResult[5] = items;
      tmp11 = items;
      tmp10 = I;
    } else {
      class I {
        constructor() {
          closure_1_2(value);
        }
      }
      tmp11 = cResult[5];
    }
    const effect = obj3.useEffect(tmp10, tmp11);
    if (cResult[6] === onValueChange) {
      class I {
        constructor() {
          closure_1_2(value);
        }
      }
      if (isAndroidResult) {
        class I {
          constructor() {
            closure_1_2(value);
          }
        }
      } else {
        class I {
          constructor() {
            closure_1_2(value);
          }
        }
      }
      if (isAndroidResult) {
        class I {
          constructor() {
            closure_1_2(value);
          }
        }
      }
      if (accessibilityLabel == null) {
        class I {
          constructor() {
            closure_1_2(value);
          }
        }
      }
      if (cResult[9] === tmp8) {
        class I {
          constructor() {
            closure_1_2(value);
          }
        }
        if (cResult[12] !== subLabel) {
          class I {
            constructor() {
              closure_1_2(value);
            }
          }
          const obj2 = { text: subLabel };
          cResult[12] = subLabel;
          cResult[13] = metroRequire(closure_9, obj2);
          const tmp18 = metroRequire(closure_9, obj2);
        } else {
          class I {
            constructor() {
              closure_1_2(value);
            }
          }
        }
        if (cResult[14] === (undefined !== disabled && disabled)) {
          class I {
            constructor() {
              closure_1_2(value);
            }
          }
        }
        const obj4 = { "aria-hidden": true, value, onValueChange: tmp9, disabled: undefined !== disabled && disabled };
        cResult[14] = undefined !== disabled && disabled;
        cResult[15] = tmp9;
        cResult[16] = value;
        cResult[17] = metroRequire(FormSwitch.FormSwitch, obj4);
        const tmp21 = metroRequire(FormSwitch.FormSwitch, obj4);
      }
      const obj5 = { disabled: undefined !== disabled && disabled, checked: tmp8 };
      cResult[9] = tmp8;
      cResult[10] = undefined !== disabled && disabled;
      cResult[11] = obj5;
    }
    function handleAccessibilityTap() {
      const tmp = closure_1_2(!value);
      const timerId = setTimeout(() => {
        if (onValueChange != null) {
          tmp(!closure_1_0);
        }
      });
    }
    cResult[6] = onValueChange;
    cResult[7] = value;
    cResult[8] = handleAccessibilityTap;
  }
  function handleOnPress() {
    let tmpResult;
    if (onValueChange != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  cResult[0] = onValueChange;
  cResult[1] = value;
  cResult[2] = handleOnPress;
  tmp9 = handleOnPress;
}) : (function UserProfileEditFormSwitch(arg0) {
  let PressableHighlight;
  let accessibilityHint;
  let accessibilityLabel;
  let closure_129_1;
  let closure_2;
  let disabled;
  let first;
  let items1;
  let label;
  let obj3;
  let subLabel;
  let tmp9;
  let value;
  ({ subLabel, value } = arg0);
  ({ onValueChange: closure_129_1, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  closure_2 = undefined;
  let tmp = closure_8();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  [first, closure_2] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_2(value);
  }, items);
  if (isAndroidResult) {
    PressableHighlight = tmp2(6944).PressableHighlight;
  } else {
    PressableHighlight = React3;
  }
  function handleOnPress() {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  let tmp10;
  const obj2 = { label, children: tmp9(PressableHighlight, obj3) };
  const Input = tmp2(7045).Input;
  tmp9 = metroImportDefault;
  if (isAndroidResult) {
    tmp10 = handleOnPress;
  }
  obj3 = {
    onPress: tmp10,
    onAccessibilityTap: function handleAccessibilityTap() {
      const tmp = closure_2(!value);
      const timerId = setTimeout(() => {
        if (closure_1_1 != null) {
          tmp(!closure_1_0);
        }
      });
    },
    style: tmp.button,
    accessibilityRole: "switch",
    accessibilityLabel,
    accessibilityHint,
    accessibilityState: { disabled, checked: first },
    disabled,
    children: items1
  };
  if (accessibilityLabel == null) {
    accessibilityLabel = subLabel;
  }
  items1 = [metroRequire(closure_9, { text: subLabel }), metroRequire(tmp2(7332).FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })];
  return metroRequire(Input, obj2);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormLabelBadges = tmp5;
export const UserProfileEditFormButton = tmp6;
export const UserProfileEditFormSwitch = tmp7;
