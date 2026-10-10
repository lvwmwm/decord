// Module ID: 6827
// Function ID: 6828
// Name: FormRow
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 6828, 6263, 6179, 6829, 6830, 6184, 6831, 6833, 6826, 6836, 6837, 2]

// Module 6827 (FormRow)
import nativeDefault from "native" /* 587 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 6826 */;
import FormLabelDefault from "FormLabel" /* 6829 */;
import FormSubLabelDefault from "FormSubLabel" /* 6830 */;
import FormArrowDefault from "FormArrow" /* 6831 */;
import Form_FormRadioDefault from "Form/FormRadio" /* 6833 */;
import FormCheckmarkDefault from "FormCheckmark" /* 6836 */;
import FormIconDefault from "FormIcon" /* 6837 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormRow(label) {
  let DEPRECATED_style;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let delayLongPress;
  let disabled;
  let end;
  let hasError;
  let items;
  let items1;
  let labelStyle;
  let num16;
  let numberOfLines;
  let onAccessibilityAction;
  let onAccessibilityTap;
  let onLongPress;
  let onPress;
  let onPressOut;
  let ref;
  let start;
  let str;
  let style;
  let subLabel;
  let tmp23;
  let tmp24;
  let variant;
  const tmp = label;
  let obj = label(subLabel[6]);
  const cResult = obj.c(68);
  label = label.label;
  const leading = label.leading;
  ({ onPress, onLongPress, onPressOut, DEPRECATED_style, subLabel } = label);
  const trailing = label.trailing;
  ({ disabled, hasError, accessible, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, numberOfLines } = label);
  ({ style, labelStyle } = label);
  const trailingWrapperStyle = label.trailingWrapperStyle;
  const leadingStyle = label.leadingStyle;
  ({ delayLongPress, start, end, variant, ref } = label);
  let tmp7 = undefined !== start && start;
  let tmp8 = undefined !== end && end;
  const tmp9 = leadingStyle();
  let closure_8 = tmp9;
  let obj2 = trailing;
  const isForm = trailing.useContext(tmp(tmp2[7]).FormContext).isForm;
  if (trailing.useContext(tmp(subLabel[8]).RedesignCompatContext)) {
    let tmp25;
    let tmp30;
    let tmp35;
    let tmp40;
    if (cResult[0] !== label) {
      let tmp29;
      if (typeof label === "function") {
        let tmp26 = null;
        if (null != label) {
          let tmp27 = label;
          if (!obj2.isValidElement(label)) {
            const tmp28 = labelStyle;
            tmp27 = labelStyle(label, {});
          }
          tmp26 = tmp27;
        }
        tmp29 = tmp26;
      } else {
        tmp29 = label;
      }
      cResult[0] = label;
      cResult[1] = tmp29;
      tmp25 = tmp29;
    } else {
      tmp25 = cResult[1];
    }
    if (cResult[2] !== subLabel) {
      if (typeof subLabel !== "function") {
        let tmp31;
        if (!obj2.isValidElement(subLabel)) {
          tmp31 = null;
          if (null != subLabel) {
            tmp31 = subLabel;
          }
        }
        cResult[2] = subLabel;
        cResult[3] = tmp31;
        tmp30 = tmp31;
      }
      let tmp32 = null;
      if (null != subLabel) {
        let tmp33 = subLabel;
        if (!obj2.isValidElement(subLabel)) {
          tmp33 = labelStyle(subLabel, {});
        }
        tmp32 = tmp33;
      }
      tmp31 = tmp32;
    } else {
      tmp30 = cResult[3];
    }
    if (cResult[4] !== leading) {
      let tmp39;
      if (typeof leading === "function") {
        let tmp36 = null;
        if (null != leading) {
          let tmp37 = leading;
          if (!obj2.isValidElement(leading)) {
            tmp37 = labelStyle(leading, {});
          }
          tmp36 = tmp37;
        }
        tmp39 = tmp36;
      } else {
        tmp39 = leading;
      }
      cResult[4] = leading;
      cResult[5] = tmp39;
      tmp35 = tmp39;
    } else {
      tmp35 = cResult[5];
    }
    if (cResult[6] !== trailing) {
      let tmp44;
      if (typeof trailing === "function") {
        let tmp41 = null;
        if (null != trailing) {
          let tmp42 = trailing;
          if (!obj2.isValidElement(trailing)) {
            let tmp43 = labelStyle;
            tmp42 = labelStyle(trailing, {});
          }
          tmp41 = tmp42;
        }
        tmp44 = tmp41;
      } else {
        tmp44 = trailing;
      }
      cResult[6] = trailing;
      cResult[7] = tmp44;
      tmp40 = tmp44;
    } else {
      tmp40 = cResult[7];
    }
    if (cResult[8] === accessibilityActions) {
      if (cResult[9] === accessibilityHint) {
        if (cResult[10] === accessibilityLabel) {
          if (cResult[11] === accessibilityRole) {
            if (cResult[12] === accessibilityState) {
              if (cResult[13] === (undefined === accessible || accessible)) {
                if (cResult[14] === delayLongPress) {
                  if (cResult[15] === (undefined !== disabled && disabled)) {
                    if (cResult[16] === tmp8) {
                      if (cResult[17] === numberOfLines) {
                        if (cResult[18] === onAccessibilityAction) {
                          if (cResult[19] === onAccessibilityTap) {
                            if (cResult[20] === onLongPress) {
                              if (cResult[21] === onPress) {
                                if (cResult[22] === tmp25) {
                                  if (cResult[23] === tmp35) {
                                    if (cResult[24] === tmp30) {
                                      if (cResult[25] === tmp40) {
                                        if (cResult[26] === tmp7) {
                                          let tmp45;
                                          if (cResult[27] === variant) {
                                            tmp45 = cResult[28];
                                          }
                                          return tmp45;
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
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let obj3 = { variant, start: tmp7, end: tmp8, label: tmp25, subLabel: tmp30, icon: tmp35, trailing: tmp40, disabled: tmp4, accessible: tmp6, accessibilityLabel, accessibilityHint, accessibilityRole, accessibilityState, accessibilityActions, onAccessibilityAction, onAccessibilityTap, labelLineClamp: numberOfLines, delayLongPress, onPress, onLongPress };
    const tmp47 = labelStyle(tmp(subLabel[9]).TableRow, obj3);
    cResult[8] = accessibilityActions;
    cResult[9] = accessibilityHint;
    cResult[10] = accessibilityLabel;
    cResult[11] = accessibilityRole;
    cResult[12] = accessibilityState;
    cResult[13] = undefined === accessible || accessible;
    cResult[14] = delayLongPress;
    cResult[15] = undefined !== disabled && disabled;
    cResult[16] = tmp8;
    cResult[17] = numberOfLines;
    cResult[18] = onAccessibilityAction;
    cResult[19] = onAccessibilityTap;
    cResult[20] = onLongPress;
    cResult[21] = onPress;
    cResult[22] = tmp25;
    cResult[23] = tmp35;
    cResult[24] = tmp30;
    cResult[25] = tmp40;
    cResult[26] = tmp7;
    cResult[27] = variant;
    cResult[28] = tmp47;
    tmp45 = tmp47;
  } else {
    if (cResult[29] === accessibilityState) {
      let tmp10;
      if (cResult[30] === (undefined !== disabled && disabled)) {
        tmp10 = cResult[31];
      }
      if (cResult[32] === label) {
        if (cResult[33] === labelStyle) {
          if (cResult[34] === leading) {
            if (cResult[35] === leadingStyle) {
              if (cResult[36] === numberOfLines) {
                if (cResult[37] === tmp9.label) {
                  if (cResult[38] === tmp9.leading) {
                    if (cResult[39] === tmp9.trailing) {
                      if (cResult[40] === subLabel) {
                        if (cResult[41] === trailing) {
                          let tmp16;
                          let tmp18Result;
                          if (cResult[42] === trailingWrapperStyle) {
                            tmp16 = cResult[43];
                          }
                          if (cResult[44] === DEPRECATED_style) {
                            if (cResult[45] === accessibilityActions) {
                              if (cResult[46] === accessibilityHint) {
                                if (cResult[47] === accessibilityLabel) {
                                  if (cResult[48] === accessibilityRole) {
                                    if (cResult[49] === tmp10) {
                                      if (cResult[50] === (undefined === accessible || accessible)) {
                                        if (cResult[51] === delayLongPress) {
                                          if (cResult[52] === (undefined !== disabled && disabled)) {
                                            if (cResult[53] === (undefined !== hasError && hasError)) {
                                              if (cResult[54] === isForm) {
                                                if (cResult[55] === (null != onPress || null != onLongPress)) {
                                                  if (cResult[56] === onAccessibilityAction) {
                                                    if (cResult[57] === onAccessibilityTap) {
                                                      if (cResult[58] === onLongPress) {
                                                        if (cResult[59] === onPress) {
                                                          if (cResult[60] === onPressOut) {
                                                            if (cResult[61] === ref) {
                                                              if (cResult[62] === tmp16) {
                                                                if (cResult[63] === style) {
                                                                  if (cResult[64] === tmp9.container) {
                                                                    if (cResult[65] === tmp9.disabled) {
                                                                      let tmp17;
                                                                      if (cResult[66] === tmp9.error) {
                                                                        tmp17 = cResult[67];
                                                                      }
                                                                      return tmp17;
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
                            }
                          }
                          let tmp18 = labelStyle;
                          if (null != onPress || null != onLongPress) {
                            let obj4 = { ref, style: items, disabled: tmp4, accessible: true, accessibilityRole: str, accessibilityState: tmp10, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onAccessibilityTap: tmp23, onPress: tmp24, onLongPress, onPressOut, delayLongPress, unstable_pressDelay: num16, children: tmp16() };
                            items = [tmp9.container, DEPRECATED_style, style, , ];
                            let error2 = tmp5;
                            const PressableHighlight = tmp(tmp2[12]).PressableHighlight;
                            if (undefined !== hasError && hasError) {
                              error2 = tmp9.error;
                            }
                            items[3] = error2;
                            let disabled1 = null;
                            if (undefined !== disabled && disabled) {
                              disabled1 = tmp9.disabled;
                            }
                            items[4] = disabled1;
                            str = accessibilityRole;
                            if (accessibilityRole == null) {
                              str = "button";
                            }
                            tmp23 = undefined;
                            if (!(undefined !== disabled && disabled)) {
                              tmp23 = onAccessibilityTap;
                            }
                            tmp24 = undefined;
                            if (!(undefined !== disabled && disabled)) {
                              tmp24 = onPress;
                            }
                            num16 = undefined;
                            if (isForm) {
                              num16 = 130;
                            }
                            tmp18Result = tmp18(PressableHighlight, obj4);
                          } else {
                            let obj5 = { ref, style: items1, accessible: tmp6, accessibilityRole, accessibilityState: tmp10, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onAccessibilityTap, children: tmp16() };
                            items1 = [tmp9.container, DEPRECATED_style, style, , ];
                            let error = tmp5;
                            const tmp19 = numberOfLines;
                            if (undefined !== hasError && hasError) {
                              error = tmp9.error;
                            }
                            items1[3] = error;
                            let disabled2 = null;
                            if (undefined !== disabled && disabled) {
                              disabled2 = tmp9.disabled;
                            }
                            items1[4] = disabled2;
                            tmp18Result = tmp18(tmp19, obj5);
                          }
                          cResult[44] = DEPRECATED_style;
                          cResult[45] = accessibilityActions;
                          cResult[46] = accessibilityHint;
                          cResult[47] = accessibilityLabel;
                          cResult[48] = accessibilityRole;
                          cResult[49] = tmp10;
                          cResult[50] = undefined === accessible || accessible;
                          cResult[51] = delayLongPress;
                          cResult[52] = undefined !== disabled && disabled;
                          cResult[53] = undefined !== hasError && hasError;
                          cResult[54] = isForm;
                          cResult[55] = null != onPress || null != onLongPress;
                          cResult[56] = onAccessibilityAction;
                          cResult[57] = onAccessibilityTap;
                          cResult[58] = onLongPress;
                          cResult[59] = onPress;
                          cResult[60] = onPressOut;
                          cResult[61] = ref;
                          cResult[62] = tmp16;
                          cResult[63] = style;
                          cResult[64] = tmp9.container;
                          cResult[65] = tmp9.disabled;
                          cResult[66] = tmp9.error;
                          cResult[67] = tmp18Result;
                          tmp17 = tmp18Result;
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
      function renderInnerView() {
        let items;
        let items2;
        let items3;
        if (typeof label !== "function") {
          let tmp7;
          if (!react.isValidElement(label)) {
            const obj = { numberOfLines, text: label, style: labelStyle };
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
              items = [closure_8.leading, leadingStyle];
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
              items3 = [tmp43.trailing, trailingWrapperStyle];
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
      cResult[32] = label;
      cResult[33] = labelStyle;
      cResult[34] = leading;
      cResult[35] = leadingStyle;
      cResult[36] = numberOfLines;
      cResult[37] = tmp9.label;
      cResult[38] = tmp9.leading;
      cResult[39] = tmp9.trailing;
      cResult[40] = subLabel;
      cResult[41] = trailing;
      cResult[42] = trailingWrapperStyle;
      cResult[43] = renderInnerView;
      tmp16 = renderInnerView;
    }
    let obj6 = { disabled: tmp4 };
    const tmp12 = accessibilityState;
    const merged = Object.assign(accessibilityState);
    cResult[29] = accessibilityState;
    cResult[30] = undefined !== disabled && disabled;
    cResult[31] = obj6;
    tmp10 = obj6;
  }
}) : (function FormRow(label) {
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
  const isForm = trailing.useContext(label(subLabel[7]).FormContext).isForm;
  if (trailing.useContext(label(subLabel[8]).RedesignCompatContext)) {
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
      return style(label(subLabel[9]).TableRow, obj2);
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
    const PressableHighlight = tmp2(tmp3[12]).PressableHighlight;
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
});
tmp4.Arrow = FormArrowDefault;
tmp4.Label = FormLabelDefault;
tmp4.SubLabel = FormSubLabelDefault;
tmp4.Radio = Form_FormRadioDefault;
tmp4.Checkbox = Form_FormCheckboxDefault;
tmp4.Checkmark = FormCheckmarkDefault;
tmp4.Icon = FormIconDefault;
const result = size.fileFinishedImporting("design/void/Form/native/FormRow.tsx");

export default tmp4;
