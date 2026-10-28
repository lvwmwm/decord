// Module ID: 19526
// Function ID: 19527
// Name: EligibilityChecklist
// Dependencies: [19, 17, 21, 5004, 558, 576, 7303, 587, 7054, 5270, 5280, 16845, 2]

// Module 19526 (EligibilityChecklist)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import FormSeparatorDefault from "FormSeparator" /* 16845 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 }, lastRowSpacer: { height: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function EligibilityChecklistRow(arg0) {
  let isLast;
  let item;
  let items;
  let items1;
  let items2;
  let obj10;
  let tmp6Result;
  const obj = react2;
  const cResult = obj.c(31);
  ({ isLast, item } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === item.checked) {
    let tmp5;
    if (cResult[1] === tmp4.rowStatusIcon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.rowTextColumn) {
      let tmp11;
      if (cResult[4] === (item.checked && tmp4.eligibleRow)) {
        tmp11 = cResult[5];
      }
      const tmp12 = item.checked ? item.checkedLabel : item.uncheckedLabel;
      if (cResult[6] === tmp4.rowLabel) {
        let tmp13;
        let tmp16;
        if (cResult[7] === tmp12) {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== item.description) {
          const obj2 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
          const tmp18 = React3(Text_Text.Text, obj2);
          cResult[9] = item.description;
          cResult[10] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] === item.actionHandler) {
          if (cResult[12] === item.actionLabel) {
            let tmp19;
            if (cResult[13] === tmp4.actionButtonWrapper) {
              tmp19 = cResult[14];
            }
            if (cResult[15] === tmp11) {
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp16) {
                  let tmp24;
                  if (cResult[18] === tmp19) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === tmp4.row) {
                    if (cResult[21] === tmp5) {
                      let tmp28;
                      let tmp33Result;
                      if (cResult[22] === tmp24) {
                        tmp28 = cResult[23];
                      }
                      if (cResult[24] === isLast) {
                        if (cResult[25] === tmp4.divider) {
                          let tmp32;
                          if (cResult[26] === tmp4.lastRowSpacer) {
                            tmp32 = cResult[27];
                          }
                          if (cResult[28] === tmp32) {
                            let tmp37;
                            if (cResult[29] === tmp28) {
                              tmp37 = cResult[30];
                            }
                            return tmp37;
                          }
                          const obj3 = { children: items };
                          items = [tmp28, tmp32];
                          const tmp40 = hasOwnProperty(metroRequire, obj3);
                          cResult[28] = tmp32;
                          cResult[29] = tmp28;
                          cResult[30] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                      if (isLast) {
                        const obj4 = { style: tmp4.lastRowSpacer };
                        tmp33Result = tmp33(View, obj4);
                      } else {
                        const obj5 = { style: tmp4.divider };
                        tmp33Result = tmp33(FormSeparatorDefault, obj5);
                      }
                      cResult[24] = isLast;
                      cResult[25] = tmp4.divider;
                      cResult[26] = tmp4.lastRowSpacer;
                      cResult[27] = tmp33Result;
                      tmp32 = tmp33Result;
                    }
                  }
                  const obj6 = { style: tmp4.row, children: items1 };
                  items1 = [tmp5, tmp24];
                  const tmp31 = hasOwnProperty(View, obj6);
                  cResult[20] = tmp4.row;
                  cResult[21] = tmp5;
                  cResult[22] = tmp24;
                  cResult[23] = tmp31;
                  tmp28 = tmp31;
                }
              }
            }
            const obj8 = { style: tmp11, children: items2 };
            items2 = [tmp13, tmp16, tmp19];
            const tmp27 = hasOwnProperty(View, obj8);
            cResult[15] = tmp11;
            cResult[16] = tmp13;
            cResult[17] = tmp16;
            cResult[18] = tmp19;
            cResult[19] = tmp27;
            tmp24 = tmp27;
          }
        }
        let tmp21 = null != item.actionHandler && null != item.actionLabel;
        if (tmp21) {
          const obj9 = { style: tmp4.actionButtonWrapper, children: React3(components_Button_Button.Button, obj10) };
          obj10 = { text: null, onPress: null, grow: true };
          ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
          tmp21 = React3(View, obj9);
        }
        cResult[11] = item.actionHandler;
        cResult[12] = item.actionLabel;
        cResult[13] = tmp4.actionButtonWrapper;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
      const obj11 = { style: tmp4.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp12 };
      const tmp15 = React3(Text_Text.Text, obj11);
      cResult[6] = tmp4.rowLabel;
      cResult[7] = tmp12;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    }
    const items3 = [tmp4.rowTextColumn, item.checked && tmp4.eligibleRow];
    cResult[3] = tmp4.rowTextColumn;
    cResult[4] = item.checked && tmp4.eligibleRow;
    cResult[5] = items3;
    tmp11 = items3;
  }
  if (item.checked) {
    const obj12 = { style: tmp4.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    const CircleCheckIcon = tmp(7303).CircleCheckIcon;
    tmp6Result = tmp6(CircleCheckIcon, obj12);
  } else {
    const obj23 = { style: tmp4.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    const CircleXIcon = tmp(7054).CircleXIcon;
    tmp6Result = tmp6(CircleXIcon, obj23);
  }
  cResult[0] = item.checked;
  cResult[1] = tmp4.rowStatusIcon;
  cResult[2] = tmp6Result;
  tmp5 = tmp6Result;
}) : (function EligibilityChecklistRow(item) {
  let items;
  let items2;
  let obj9;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp13Result2;
  let tmp5Result;
  item = item.item;
  const isLast = item.isLast;
  const tmp = closure_7();
  const obj = { style: tmp.row, children: items };
  const tmp3 = metroRequire;
  if (item.checked) {
    const obj2 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    const CircleCheckIcon = tmp6(7303).CircleCheckIcon;
    tmp5Result = tmp5(CircleCheckIcon, obj2);
    tmp10 = tmp6;
    tmp12 = importDefault;
    tmp13 = tmp5;
  } else {
    const obj3 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    const CircleXIcon = tmp6(7054).CircleXIcon;
    tmp5Result = tmp5(CircleXIcon, obj3);
    tmp10 = tmp6;
    tmp12 = importDefault;
    tmp13 = tmp5;
  }
  items = [tmp5Result, ];
  const items1 = [tmp.rowTextColumn, ];
  const obj4 = { style: items1, children: items2 };
  const tmp15 = item.checked && tmp.eligibleRow;
  items1[1] = tmp15;
  items2 = [, , ];
  const obj5 = { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel };
  items2[0] = tmp13(tmp10(5270).Text, obj5);
  const obj6 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
  items2[1] = tmp13(tmp10(5270).Text, obj6);
  let tmp13Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp13Result) {
    const obj7 = { style: tmp.actionButtonWrapper, children: tmp13(tmp10(5280).Button, obj9) };
    obj9 = { text: null, onPress: null, grow: true };
    ({ actionLabel: obj8.text, actionHandler: obj8.onPress } = item);
    tmp13Result = tmp13(tmp4, obj7);
  }
  items2[2] = tmp13Result;
  items[1] = hasOwnProperty(View, obj4);
  const children = [hasOwnProperty(View, obj), ];
  const obj17 = { style: null };
  if (isLast) {
    obj17.style = tmp.lastRowSpacer;
    tmp13Result2 = tmp13(tmp4, obj17);
  } else {
    obj17.style = tmp.divider;
    tmp13Result2 = tmp13(tmp12(16845), obj17);
  }
  children[1] = tmp13Result2;
  return hasOwnProperty(tmp3, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EligibilityChecklist(style) {
  let items;
  let obj = items(576);
  const cResult = obj.c(7);
  items = style.items;
  style = style.style;
  if (0 === items.length) {
    return null;
  } else {
    let tmp2;
    if (cResult[0] !== items) {
      let tmp3;
      if (cResult[2] !== items.length) {
        const fn = function c(item, arg1) {
          const obj = { item, isLast: arg1 === items.length - 1 };
          return React3(closure_8, obj, item.checkedLabel);
        };
        cResult[2] = items.length;
        cResult[3] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[3];
      }
      const mapped = items.map(tmp3);
      cResult[0] = items;
      cResult[1] = mapped;
      tmp2 = mapped;
    } else {
      tmp2 = cResult[1];
    }
    if (cResult[4] === tmp2) {
      let tmp5;
      if (cResult[5] === style) {
        tmp5 = cResult[6];
      }
      return tmp5;
    }
    const obj2 = { style, children: tmp2 };
    const tmp8 = closure_4(View, obj2);
    cResult[4] = tmp2;
    cResult[5] = style;
    cResult[6] = tmp8;
    tmp5 = tmp8;
  }
}) : (function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    let obj = {
      style: tmp,
      children: items.map((item, index) => {
          const obj = { item, isLast: index === items.length - 1 };
          return React3(closure_8, obj, item.checkedLabel);
        })
    };
    return closure_4(View, obj);
  }
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default tmp4;
