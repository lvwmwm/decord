// Module ID: 6882
// Function ID: 6883
// Name: TableSwitchRow
// Dependencies: [32, 109, 19, 17, 21, 5090, 558, 576, 1381, 4780, 5086, 6883, 6184, 2]

// Module 6882 (TableSwitchRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const PlatformUtils = tmp(1381);
const native = tmp(4780);
const Text_Text = tmp(5086);
const TableRow2 = tmp(6184);
const FormSwitch = tmp(6883);
let closure_2 = ["value", "onValueChange", "label", "subLabel", "trailing", "disabled", "accessibilityHint", "variant"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TableSwitchRow(value) {
  let accessibilityHint;
  let closure_129_2;
  let disabled;
  let items1;
  let label;
  let subLabel;
  let tmp10;
  let tmp12;
  let tmp26;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let trailing;
  let variant;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(47);
  if (cResult[0] !== value) {
    value = value.value;
    let closure_1 = value;
    const onValueChange = value.onValueChange;
    let closure_0 = onValueChange;
    ({ label, subLabel, trailing, disabled, accessibilityHint, variant } = value);
    const tmp15 = _objectWithoutProperties(value, closure_2);
    cResult[0] = value;
    cResult[1] = accessibilityHint;
    cResult[2] = label;
    cResult[3] = onValueChange;
    cResult[4] = tmp15;
    cResult[5] = subLabel;
    cResult[6] = disabled;
    cResult[7] = trailing;
    cResult[8] = value;
    cResult[9] = variant;
    tmp12 = variant;
    tmp10 = trailing;
    tmp9 = disabled;
    tmp8 = subLabel;
    tmp7 = tmp15;
    tmp5 = label;
    tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    closure_0 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    closure_1 = cResult[8];
    tmp12 = cResult[9];
  }
  const tmp17 = closure_9();
  let tmpResult = PlatformUtils;
  if (cResult[10] === tmp6) {
    let tmp20;
    let tmp21;
    let str;
    let tmp28;
    let tmp27;
    if (cResult[11] === tmp11) {
      tmp20 = cResult[12];
    }
    if (cResult[13] !== tmp5) {
      const tmpResult3 = native;
      const nodeText = tmpResult3.getNodeText(tmp5);
      cResult[13] = tmp5;
      cResult[14] = nodeText;
      tmp21 = nodeText;
    } else {
      tmp21 = cResult[14];
    }
    if (cResult[15] !== tmp8) {
      const tmpResult4 = native;
      const nodeText1 = tmpResult4.getNodeText(tmp8);
      cResult[15] = tmp8;
      cResult[16] = nodeText1;
      str = nodeText1;
    } else {
      str = cResult[16];
    }
    [tmp26, closure_129_2] = react.useState(tmp11);
    _slicedToArray(react.useState(tmp11), 2);
    if (cResult[17] !== tmp11) {
      const fn = function k() {
        closure_1_2(closure_1);
      };
      const items = [tmp11];
      cResult[17] = tmp11;
      cResult[18] = fn;
      cResult[19] = items;
      tmp28 = items;
      tmp27 = fn;
    } else {
      tmp27 = cResult[18];
      tmp28 = cResult[19];
    }
    const effect = obj4.useEffect(tmp27, tmp28);
    if (cResult[20] === tmp6) {
      let tmp30;
      if (cResult[21] === tmp11) {
        tmp30 = cResult[22];
      }
      if (cResult[23] === tmp5) {
        if (cResult[24] === tmp17) {
          if (cResult[25] === tmp10) {
            let tmp31;
            if (cResult[26] === tmp12) {
              tmp31 = cResult[27];
            }
            if (cResult[28] === tmp26) {
              let tmp36;
              if (cResult[29] === (undefined !== tmp9 && tmp9)) {
                tmp36 = cResult[30];
              }
              if (str == null) {
                str = "";
              }
              const _HermesInternal = HermesInternal;
              const combined = "" + tmp21 + ", " + str;
              if (cResult[31] === (undefined !== tmp9 && tmp9)) {
                if (cResult[32] === tmp20) {
                  let tmp41;
                  if (cResult[33] === tmp11) {
                    tmp41 = cResult[34];
                  }
                  if (cResult[35] === tmp4) {
                    if (cResult[36] === (undefined !== tmp9 && tmp9)) {
                      if (cResult[37] === tmp30) {
                        if (cResult[38] === tmp7) {
                          if (cResult[39] === tmp8) {
                            if (cResult[40] === combined) {
                              if (cResult[41] === tmp40) {
                                if (cResult[42] === tmp41) {
                                  if (cResult[43] === tmp31) {
                                    if (cResult[44] === tmp36) {
                                      let tmp44;
                                      if (cResult[45] === tmp12) {
                                        tmp44 = cResult[46];
                                      }
                                      return tmp44;
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
                  const obj2 = { variant: tmp12, arrow: false, label: tmp31, subLabel: tmp8, disabled: undefined !== tmp9 && tmp9, accessibilityState: tmp36, accessible: true, accessibilityRole: "switch", accessibilityLabel: combined, accessibilityHint: tmp4, onPress: tmp40, onAccessibilityTap: tmp30, trailing: tmp41 };
                  const TableRow = TableRow2.TableRow;
                  const merged = Object.assign(tmp7);
                  const tmp49 = metroImportDefault(TableRow, obj2);
                  cResult[35] = tmp4;
                  cResult[36] = undefined !== tmp9 && tmp9;
                  cResult[37] = tmp30;
                  cResult[38] = tmp7;
                  cResult[39] = tmp8;
                  cResult[40] = combined;
                  cResult[41] = tmp40;
                  cResult[42] = tmp41;
                  cResult[43] = tmp31;
                  cResult[44] = tmp36;
                  cResult[45] = tmp12;
                  cResult[46] = tmp49;
                  tmp44 = tmp49;
                }
              }
              const obj3 = { "aria-hidden": true, value: tmp11, onValueChange: tmp20, disabled: undefined !== tmp9 && tmp9 };
              const tmp43 = metroImportDefault(FormSwitch.FormSwitch, obj3);
              cResult[31] = undefined !== tmp9 && tmp9;
              cResult[32] = tmp20;
              cResult[33] = tmp11;
              cResult[34] = tmp43;
              tmp41 = tmp43;
            }
            const obj5 = { disabled: undefined !== tmp9 && tmp9, checked: tmp26 };
            cResult[28] = tmp26;
            cResult[29] = undefined !== tmp9 && tmp9;
            cResult[30] = obj5;
            tmp36 = obj5;
          }
        }
      }
      let tmp50Result = tmp5;
      if (null != tmp10) {
        let tmp34Result = tmp5;
        const obj6 = { style: tmp17.labelWithTrailing, children: items1 };
        const tmp50 = metroImportAll;
        const tmp51 = View;
        if (!react.isValidElement(tmp5)) {
          let str2 = "mobile-text-heading-primary";
          const Text = Text_Text.Text;
          const tmp34 = metroImportDefault;
          if ("danger" === tmp12) {
            str2 = "text-feedback-critical";
          }
          const obj7 = { variant: "text-md/semibold", color: str2, includeFontPadding: true, children: tmp5 };
          tmp34Result = tmp34(Text, obj7);
        }
        items1 = [tmp34Result, tmp10];
        tmp50Result = tmp50(tmp51, obj6);
      }
      cResult[23] = tmp5;
      cResult[24] = tmp17;
      cResult[25] = tmp10;
      cResult[26] = tmp12;
      cResult[27] = tmp50Result;
      tmp31 = tmp50Result;
    }
    function handleAccessibilityTap() {
      const tmp = closure_1_2(!closure_1);
      const timerId = setTimeout(() => {
        if (closure_1_0 != null) {
          tmp(!closure_1_1);
        }
      });
    }
    cResult[20] = tmp6;
    cResult[21] = tmp11;
    cResult[22] = handleAccessibilityTap;
    tmp30 = handleAccessibilityTap;
  }
  function handleOnPress() {
    let tmpResult;
    if (closure_0 != null) {
      tmpResult = tmp(!closure_1);
    }
    return tmpResult;
  }
  cResult[10] = tmp6;
  cResult[11] = tmp11;
  cResult[12] = handleOnPress;
  tmp20 = handleOnPress;
}) : (function TableSwitchRow(value) {
  let closure_129_1;
  let disabled;
  let first;
  let handleOnPress;
  let items1;
  let label;
  let str3;
  let subLabel;
  let tmp15;
  let tmp16Result;
  let trailing;
  value = value.value;
  ({ onValueChange: closure_129_1, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  const accessibilityHint = value.accessibilityHint;
  const merged = Object.assign(value, Object.assign({ value: 0, onValueChange: 0, label: 0, subLabel: 0, trailing: 0, disabled: 0, accessibilityHint: 0, variant: 0 }));
  closure_2 = undefined;
  const tmp2 = closure_9();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  const obj2 = native;
  const nodeText = obj2.getNodeText(label);
  const obj3 = native;
  const nodeText1 = obj3.getNodeText(subLabel);
  [first, closure_2] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_2(value);
  }, items);
  const obj5 = {
    variant,
    arrow: false,
    label: tmp16Result,
    subLabel,
    disabled,
    accessibilityState: { disabled, checked: first },
    accessible: true,
    accessibilityRole: "switch",
    accessibilityLabel: "" + nodeText + ", " + str3,
    accessibilityHint,
    onPress: tmp15,
    onAccessibilityTap: function handleAccessibilityTap() {
      const tmp = closure_2(!value);
      const timerId = setTimeout(() => {
        if (closure_1_1 != null) {
          tmp(!closure_1_0);
        }
      });
    },
    trailing: metroImportDefault(FormSwitch.FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })
  };
  const TableRow = TableRow2.TableRow;
  const merged1 = Object.assign(merged);
  tmp16Result = label;
  const obj4 = react;
  if (null != trailing) {
    let tmp11Result = label;
    const obj6 = { style: tmp2.labelWithTrailing, children: items1 };
    const tmp16 = metroImportAll;
    const tmp17 = View;
    if (!obj4.isValidElement(label)) {
      let str = "mobile-text-heading-primary";
      const Text = tmp3(5086).Text;
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      const obj7 = { variant: "text-md/semibold", color: str, includeFontPadding: true, children: label };
      tmp11Result = tmp11(Text, obj7);
    }
    items1 = [tmp11Result, trailing];
    tmp16Result = tmp16(tmp17, obj6);
  }
  str3 = nodeText1;
  if (nodeText1 == null) {
    str3 = "";
  }
  handleOnPress = function handleOnPress() {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  };
  tmp15 = undefined;
  if (isAndroidResult) {
    tmp15 = handleOnPress;
  }
  return metroImportDefault(TableRow, obj5);
});
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = tmp3;
