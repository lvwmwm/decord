// Module ID: 8591
// Function ID: 8592
// Name: FormSwitchRow
// Dependencies: [32, 109, 19, 17, 21, 5092, 558, 576, 1382, 6829, 8589, 6827, 6263, 6895, 2]

// Module 8591 (FormSwitchRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import RedesignCompat from "RedesignCompat" /* 6263 */;
import FormRowDefault from "FormRow" /* 6827 */;
import FormLabelDefault from "FormLabel" /* 6829 */;
import Form_FormSwitchDefault from "Form/FormSwitch" /* 8589 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let tmp;
const PlatformUtils = tmp(1382);
const TableSwitchRow2 = tmp(6895);
let closure_3 = ["onValueChange", "value", "disabled", "label", "subLabel", "accessibilityHint", "trailing", "numberOfLines", "switchProps"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormSwitchRow(onValueChange) {
  let accessibilityHint;
  let disabled;
  let first;
  let items1;
  let label;
  let numberOfLines;
  let subLabel;
  let switchProps;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let trailing;
  let tmp2 = dependencyMap;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(48);
  if (cResult[0] !== onValueChange) {
    onValueChange = onValueChange.onValueChange;
    let closure_0 = onValueChange;
    const value = onValueChange.value;
    let closure_1 = value;
    ({ disabled, label, subLabel, accessibilityHint, trailing, numberOfLines, switchProps } = onValueChange);
    const tmp16 = _objectWithoutProperties(onValueChange, closure_3);
    cResult[0] = onValueChange;
    cResult[1] = accessibilityHint;
    cResult[2] = label;
    cResult[3] = numberOfLines;
    cResult[4] = onValueChange;
    cResult[5] = tmp16;
    cResult[6] = subLabel;
    cResult[7] = disabled;
    cResult[8] = switchProps;
    cResult[9] = trailing;
    cResult[10] = value;
    tmp12 = trailing;
    tmp11 = switchProps;
    tmp10 = disabled;
    tmp9 = subLabel;
    tmp8 = tmp16;
    tmp6 = numberOfLines;
    tmp5 = label;
    tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_0 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    closure_1 = cResult[10];
  }
  if (cResult[11] !== tmp11) {
    let obj2 = tmp11;
    if (undefined === tmp11) {
      obj2 = {};
    }
    cResult[11] = tmp11;
    cResult[12] = obj2;
    tmp18 = obj2;
  } else {
    tmp18 = cResult[12];
  }
  const tmp19 = closure_10();
  PlatformUtils;
  if (cResult[13] === tmp7) {
    let tmp27;
    let tmp26;
    [first, closure_3] = react.useState(tmp13);
    const obj3 = react;
    if (cResult[16] !== tmp13) {
      const fn = function _() {
        closure_3(closure_1);
      };
      const items = [tmp13];
      cResult[16] = tmp13;
      cResult[17] = fn;
      cResult[18] = items;
      tmp27 = items;
      tmp26 = fn;
    } else {
      tmp26 = cResult[17];
      tmp27 = cResult[18];
    }
    const effect = obj3.useEffect(tmp26, tmp27);
    if (cResult[19] === first) {
      let tmp29;
      if (cResult[20] === tmp7) {
        tmp29 = cResult[21];
      }
      let tmp30;
      if (typeof tmp5 === "string") {
        tmp30 = tmp5;
      }
      let sum = tmp30;
      const tmp32 = null != tmp30 && typeof tmp9 === "string";
      if (tmp32) {
        const _HermesInternal = HermesInternal;
        sum = tmp30 + " " + tmp9;
      }
      if (cResult[22] === tmp5) {
        let tmp35;
        if (cResult[23] === tmp6) {
          tmp35 = cResult[24];
        }
        if (cResult[25] === tmp19.trailing) {
          if (cResult[26] === tmp35) {
            let tmp40;
            if (cResult[27] === (null != tmp12 && tmp12)) {
              tmp40 = cResult[28];
            }
            if (cResult[29] === first) {
              let tmp45;
              if (cResult[30] === (undefined !== tmp10 && tmp10)) {
                tmp45 = cResult[31];
              }
              if (cResult[32] === (undefined !== tmp10 && tmp10)) {
                if (cResult[33] === tmp7) {
                  if (cResult[34] === tmp18) {
                    let tmp46;
                    if (cResult[35] === tmp13) {
                      tmp46 = cResult[36];
                    }
                    if (cResult[37] === tmp4) {
                      if (cResult[38] === sum) {
                        if (cResult[39] === (undefined !== tmp10 && tmp10)) {
                          if (cResult[40] === tmp29) {
                            if (cResult[41] === tmp8) {
                              if (cResult[42] === tmp9) {
                                if (cResult[43] === tmp40) {
                                  if (cResult[44] === tmp44) {
                                    if (cResult[45] === tmp45) {
                                      let tmp54;
                                      if (cResult[46] === tmp46) {
                                        tmp54 = cResult[47];
                                      }
                                      return tmp54;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj4 = { label: tmp40, subLabel: tmp9, disabled: undefined !== tmp10 && tmp10, onPress: tmp44, accessible: true, onAccessibilityTap: tmp29, accessibilityRole: "switch", accessibilityLabel: sum, accessibilityState: tmp45, accessibilityHint: tmp4, trailing: tmp46 };
                    const tmp57 = FormRowDefault;
                    const merged = Object.assign(tmp8);
                    const tmp61 = metroImportAll(tmp57, obj4);
                    cResult[37] = tmp4;
                    cResult[38] = sum;
                    cResult[39] = undefined !== tmp10 && tmp10;
                    cResult[40] = tmp29;
                    cResult[41] = tmp8;
                    cResult[42] = tmp9;
                    cResult[43] = tmp40;
                    cResult[44] = tmp44;
                    cResult[45] = tmp45;
                    cResult[46] = tmp46;
                    cResult[47] = tmp61;
                    tmp54 = tmp61;
                  }
                }
              }
              const obj5 = { disabled: undefined !== tmp10 && tmp10, value: tmp13, onValueChange: tmp7 };
              const tmp49 = Form_FormSwitchDefault;
              const merged1 = Object.assign(tmp18);
              const tmp53 = metroImportAll(tmp49, obj5);
              cResult[32] = undefined !== tmp10 && tmp10;
              cResult[33] = tmp7;
              cResult[34] = tmp18;
              cResult[35] = tmp13;
              cResult[36] = tmp53;
              tmp46 = tmp53;
            }
            const obj6 = { disabled: undefined !== tmp10 && tmp10, checked: first };
            cResult[29] = first;
            cResult[30] = undefined !== tmp10 && tmp10;
            cResult[31] = obj6;
            tmp45 = obj6;
          }
        }
        const obj7 = { style: tmp19.trailing, children: items1 };
        items1 = [tmp35, null != tmp12 && tmp12];
        const tmp43 = React4(View, obj7);
        cResult[25] = tmp19.trailing;
        cResult[26] = tmp35;
        cResult[27] = null != tmp12 && tmp12;
        cResult[28] = tmp43;
        tmp40 = tmp43;
      }
      const obj8 = { numberOfLines: tmp6, text: tmp5 };
      const tmp38 = metroImportAll(FormLabelDefault, obj8);
      cResult[22] = tmp5;
      cResult[23] = tmp6;
      cResult[24] = tmp38;
      tmp35 = tmp38;
    }
    function onAccessibilityTap() {
      const tmp = closure_3(!first);
      const timerId = setTimeout(() => {
        if (closure_1_0 != null) {
          tmp(!first);
        }
      });
    }
    cResult[19] = first;
    cResult[20] = tmp7;
    cResult[21] = onAccessibilityTap;
    tmp29 = onAccessibilityTap;
  }
  function handleOnPress() {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      tmp(!closure_1);
    }
  }
  cResult[13] = tmp7;
  cResult[14] = tmp13;
  cResult[15] = handleOnPress;
}) : (function FormSwitchRow(onValueChange) {
  let accessibilityHint;
  let first;
  let handleOnPress;
  let items1;
  let label;
  let numberOfLines;
  let obj3;
  let obj4;
  let subLabel;
  let switchProps;
  let tmp13Result;
  let trailing;
  onValueChange = onValueChange.onValueChange;
  const value = onValueChange.value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  const merged = Object.assign(onValueChange, Object.assign({ onValueChange: 0, value: 0, disabled: 0, label: 0, subLabel: 0, accessibilityHint: 0, trailing: 0, numberOfLines: 0, switchProps: 0 }));
  first = undefined;
  closure_3 = undefined;
  let tmp2 = closure_10();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  [first, closure_3] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_3(value);
  }, items);
  let tmp8;
  if (typeof label === "string") {
    tmp8 = label;
  }
  let sum = tmp8;
  const tmp9 = null != tmp8 && typeof subLabel === "string";
  if (tmp9) {
    const _HermesInternal = HermesInternal;
    sum = tmp8 + " " + subLabel;
  }
  const obj2 = {
    label: React4(View, obj3),
    subLabel,
    disabled: flag,
    onPress: handleOnPress,
    accessible: true,
    onAccessibilityTap() {
      const tmp = closure_3(!first);
      const timerId = setTimeout(() => {
        if (onValueChange != null) {
          tmp(!first);
        }
      });
    },
    accessibilityRole: "switch",
    accessibilityLabel: sum,
    accessibilityState: { disabled: flag, checked: first },
    accessibilityHint,
    trailing: metroImportAll(tmp13Result, obj4)
  };
  const tmp14 = FormRowDefault;
  const merged1 = Object.assign(merged);
  obj3 = { style: tmp2.trailing, children: items1 };
  items1 = [metroImportAll(FormLabelDefault, { numberOfLines, text: label }), null != trailing && trailing];
  handleOnPress = undefined;
  if (isAndroidResult) {
    handleOnPress = function handleOnPress() {
      let tmp2 = null != onValueChange;
      const tmp = onValueChange;
      if (tmp2) {
        tmp2 = null != value;
      }
      if (tmp2) {
        tmp(!value);
      }
    };
  }
  obj4 = { disabled: flag, value, onValueChange };
  tmp13Result = Form_FormSwitchDefault;
  const merged2 = Object.assign(switchProps);
  return metroImportAll(tmp14, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormSwitchRowContainer(DEPRECATED_style) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    let tmp11;
    if (cResult[0] !== DEPRECATED_style) {
      const obj2 = { value: null, onValueChange: null };
      ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      const merged = Object.assign(DEPRECATED_style);
      const tmp16 = metroImportAll(TableSwitchRow, obj2);
      cResult[0] = DEPRECATED_style;
      cResult[1] = tmp16;
      tmp11 = tmp16;
    } else {
      tmp11 = cResult[1];
    }
    if (cResult[2] === DEPRECATED_style.DEPRECATED_style) {
      let tmp17;
      if (cResult[3] === tmp11) {
        tmp17 = cResult[4];
      }
      tmp4 = tmp17;
    }
    const obj4 = { style: DEPRECATED_style.DEPRECATED_style, children: tmp11 };
    const tmp20 = metroImportAll(View, obj4);
    cResult[2] = DEPRECATED_style.DEPRECATED_style;
    cResult[3] = tmp11;
    cResult[4] = tmp20;
    tmp17 = tmp20;
  } else if (cResult[5] !== DEPRECATED_style) {
    const obj7 = {};
    const merged1 = Object.assign(DEPRECATED_style);
    const tmp10 = metroImportAll(closure_11, obj7);
    cResult[5] = DEPRECATED_style;
    cResult[6] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[6];
  }
  return tmp4;
}) : (function FormSwitchRowContainer(DEPRECATED_style) {
  let TableSwitchRow;
  let obj5;
  let tmp3Result;
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: DEPRECATED_style.DEPRECATED_style, children: metroImportAll(TableSwitchRow, obj5) };
    obj5 = { value: null, onValueChange: null };
    ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
    TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    const merged = Object.assign(DEPRECATED_style);
    tmp3Result = tmp3(View, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmp3Result = tmp3(closure_11, obj);
  }
  return tmp3Result;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default tmp3;
