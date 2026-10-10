// Module ID: 17043
// Function ID: 17044
// Name: ConjureEffortPicker
// Dependencies: [32, 19, 17, 21, 558, 576, 1126, 3849, 17044, 6946, 6261, 6262, 6264, 6179, 17045, 6895, 5377, 587, 6838, 6898, 2]

// Module 17043 (ConjureEffortPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import TableRadioRow2 from "TableRadioRow" /* 6261 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6838 */;
import ActionSheet2 from "ActionSheet" /* 6898 */;
import ConjureEffortTiers from "ConjureEffortTiers" /* 17044 */;
import ConjureModelLabels from "ConjureModelLabels" /* 17045 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureEffortPicker(settings) {
  let TableSwitchRow;
  let choices;
  let closure_4;
  let disabled;
  let first;
  let intl5;
  let intl6;
  let items;
  let main;
  let obj10;
  let obj7;
  let onChange;
  let thinking1;
  let tiers;
  let tmp11;
  let tmp14;
  let tmp17;
  let tmp6;
  let tmp8;
  let tmp = settings;
  let tmp2 = onChange;
  let obj = settings(onChange[5]);
  const cResult = obj.c(37);
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  const tmp4 = undefined !== hideTitle && hideTitle;
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[6]).intl;
    const stringResult = intl.string(disabled(tmp2[7]).aBPQxX);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult1 = intl2.string(disabled(tmp2[7])["59TDiR"]);
    cResult[2] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult2 = intl3.string(disabled(tmp2[7]).fpdVCO);
    cResult[3] = stringResult2;
    tmp14 = stringResult2;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== onChange) {
    function change(conjurePickTierModelResult) {
      const obj = ConjureEffortTiers;
      onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
    }
    cResult[4] = onChange;
    cResult[5] = change;
    tmp17 = change;
  } else {
    tmp17 = cResult[5];
  }
  react = tmp17;
  if (cResult[6] === settings) {
    let tmp18;
    if (cResult[7] === tiers) {
      tmp18 = cResult[8];
    }
    if (cResult[9] === tmp17) {
      let tmp21;
      let tmp23;
      if (cResult[10] === settings) {
        tmp21 = cResult[11];
      }
      let tmp22;
      if (!tmp4) {
        tmp22 = tmp8;
      }
      if (cResult[12] !== disabled) {
        const CONJURE_MODEL_TIERS = tmp(tmp2[9]).CONJURE_MODEL_TIERS;
        const mapped = CONJURE_MODEL_TIERS.map((value) => {
          let obj2;
          let obj3;
          const obj = { label: obj2.conjureTierLabel(value), subLabel: obj3.conjureTierDescription(value), value, disabled };
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          obj2 = ConjureEffortTiers;
          obj3 = ConjureEffortTiers;
          return metroRequire(TableRadioRow, obj, value);
        });
        cResult[12] = disabled;
        cResult[13] = mapped;
        tmp23 = mapped;
      } else {
        tmp23 = cResult[13];
      }
      if (cResult[14] === settings.tier) {
        if (cResult[15] === tmp22) {
          if (cResult[16] === tmp23) {
            let tmp25;
            let tmp28;
            let tmp32;
            if (cResult[17] === tmp21) {
              tmp25 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(tmp2[6]).intl;
              const stringResult3 = intl4.string(disabled(tmp2[7]).eGqPbV);
              cResult[19] = stringResult3;
              tmp28 = stringResult3;
            } else {
              tmp28 = cResult[19];
            }
            if (cResult[20] !== tmp6) {
              let obj2 = { expanded: tmp6 };
              cResult[20] = tmp6;
              cResult[21] = obj2;
              tmp32 = obj2;
            } else {
              tmp32 = cResult[21];
            }
            if (cResult[22] === !tmp6) {
              let tmp33;
              if (cResult[23] === tmp32) {
                tmp33 = cResult[24];
              }
              if (cResult[25] === tmp18) {
                if (cResult[26] === tmp17) {
                  if (cResult[27] === choices) {
                    if (cResult[28] === tmp6) {
                      if (cResult[29] === disabled) {
                        if (cResult[30] === settings) {
                          let tmp36;
                          if (cResult[31] === tiers) {
                            tmp36 = cResult[32];
                          }
                          if (cResult[33] === tmp25) {
                            if (cResult[34] === tmp33) {
                              let tmp48;
                              if (cResult[35] === tmp36) {
                                tmp48 = cResult[36];
                              }
                              return tmp48;
                            }
                          }
                          let obj3 = { direction: "vertical", spacing: disabled(tmp2[17]).space.PX_16, children: items };
                          const Stack = tmp(tmp2[16]).Stack;
                          items = [tmp25, tmp33, tmp36];
                          const tmp51 = closure_8(Stack, obj3);
                          cResult[33] = tmp25;
                          cResult[34] = tmp33;
                          cResult[35] = tmp36;
                          cResult[36] = tmp51;
                          tmp48 = tmp51;
                        }
                      }
                    }
                  }
                }
              }
              let tmp39Result = null;
              if (tmp6) {
                let tmp41 = null;
                const tmp39 = closure_8;
                const tmp40 = closure_7;
                if (null != tmp18) {
                  const obj4 = {
                    hasIcons: false,
                    value: tmp18,
                    onChange(arg0) {
                                      const obj = ConjureEffortTiers;
                                      return closure_4(obj.conjurePickTierModel(settings, settings.tier, arg0));
                                    },
                    title: tmp11,
                    accessibilityLabel: tmp11,
                    children: main.map((label) => {
                                      const obj = { label: label.label, subLabel: ConjureModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled };
                                      const TableRadioRow = TableRadioRow2.TableRadioRow;
                                      return metroRequire(TableRadioRow, obj, label.id);
                                    })
                  };
                  main = choices.main;
                  const TableRadioGroup = tmp(tmp2[11]).TableRadioGroup;
                  tmp41 = closure_6(TableRadioGroup, obj4);
                }
                const items1 = [tmp41, , ];
                let str = settings.thinking;
                const TableRadioGroup2 = tmp(tmp2[11]).TableRadioGroup;
                if (str == null) {
                  let thinking;
                  if (tiers != null) {
                    if (tiers[settings.tier] != null) {
                      thinking = tmp45.thinking;
                    }
                  }
                  str = thinking;
                }
                if (str == null) {
                  str = "";
                }
                const obj5 = {
                  hasIcons: false,
                  value: str,
                  onChange(thinking) {
                                  const obj = { thinking };
                                  const merged = Object.assign(settings);
                                  return closure_4(obj);
                                },
                  title: tmp14,
                  accessibilityLabel: tmp14,
                  children: thinking1.map((value) => {
                                  const TableRadioRow = TableRadioRow2.TableRadioRow;
                                  let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
                                  const tmp = metroRequire;
                                  if (tmp2 == null) {
                                    tmp2 = value;
                                  }
                                  const obj = { label: tmp2, value, disabled };
                                  return tmp(TableRadioRow, obj, value);
                                })
                };
                thinking1 = choices.thinking;
                items1[1] = closure_6(TableRadioGroup2, obj5);
                let tmp43Result = null;
                const tmpResult = tmp(tmp2[8]);
                if (tmpResult.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
                  const obj6 = { hasIcons: false, children: closure_6(TableSwitchRow, obj7) };
                  const TableRowGroup2 = tmp(tmp2[12]).TableRowGroup;
                  obj7 = {
                    label: intl5.string(disabled(tmp2[7])["5AblQX"]),
                    subLabel: intl6.string(disabled(tmp2[7]).QnUV8M),
                    value: true === settings.fast,
                    disabled,
                    onValueChange(fast) {
                                      const obj = { fast };
                                      const merged = Object.assign(settings);
                                      return closure_4(obj);
                                    }
                  };
                  TableSwitchRow = tmp(tmp2[15]).TableSwitchRow;
                  intl5 = tmp(tmp2[6]).intl;
                  intl6 = tmp(tmp2[6]).intl;
                  tmp43Result = tmp43(TableRowGroup2, obj6);
                }
                const obj8 = { children: items1 };
                items1[2] = tmp43Result;
                tmp39Result = tmp39(tmp40, obj8);
              }
              cResult[25] = tmp18;
              cResult[26] = tmp17;
              cResult[27] = choices;
              cResult[28] = tmp6;
              cResult[29] = disabled;
              cResult[30] = settings;
              cResult[31] = tiers;
              cResult[32] = tmp39Result;
              tmp36 = tmp39Result;
            }
            const obj9 = { hasIcons: false, children: closure_6(tmp(tmp2[13]).TableRow, obj10) };
            const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
            obj10 = { label: tmp28, arrow: !tmp6, accessibilityState: tmp32, onPress: first };
            const tmp35 = closure_6(TableRowGroup, obj9);
            cResult[22] = !tmp6;
            cResult[23] = tmp32;
            cResult[24] = tmp35;
            tmp33 = tmp35;
          }
        }
      }
      const obj11 = { hasIcons: false, value: tmp20, onChange: tmp21, title: tmp22, accessibilityLabel: tmp8, children: tmp23 };
      const tmp27 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj11);
      cResult[14] = settings.tier;
      cResult[15] = tmp22;
      cResult[16] = tmp23;
      cResult[17] = tmp21;
      cResult[18] = tmp27;
      tmp25 = tmp27;
    }
    const fn2 = function x(tier2) {
      if (tier2 !== settings.tier) {
        const obj = ConjureEffortTiers;
        closure_4(obj.conjureWithTier(tmp, tier2));
      }
    };
    cResult[9] = tmp17;
    cResult[10] = settings;
    cResult[11] = fn2;
    tmp21 = fn2;
  }
  const tmpResult2 = tmp(tmp2[8]);
  const conjureTierModelResult = tmpResult2.conjureTierModel(settings, tiers, settings.tier);
  cResult[6] = settings;
  cResult[7] = tiers;
  cResult[8] = conjureTierModelResult;
  tmp18 = conjureTierModelResult;
}) : (function ConjureEffortPicker(settings) {
  let CONJURE_MODEL_TIERS;
  let TableRow;
  let TableSwitchRow;
  let _undefined;
  let c3;
  let choices;
  let disabled;
  let hideTitle;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let main;
  let obj5;
  let obj9;
  let thinking1;
  let tiers;
  let tmp13;
  let tmp2;
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  ({ onChange: dependencyMap, hideTitle } = settings);
  if (hideTitle === undefined) {
    hideTitle = false;
  }
  _slicedToArray = undefined;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const intl = settings(1126).intl;
  const stringResult = intl.string(disabled(3849).aBPQxX);
  const intl2 = settings(1126).intl;
  const stringResult1 = intl2.string(disabled(3849)["59TDiR"]);
  const intl3 = settings(1126).intl;
  const stringResult2 = intl3.string(disabled(3849).fpdVCO);
  let obj = settings(17044);
  const conjureTierModelResult = obj.conjureTierModel(settings, tiers, settings.tier);
  let obj2 = { direction: "vertical", spacing: disabled(587).space.PX_16, children: items };
  const Stack = settings(5377).Stack;
  let obj3 = {
    hasIcons: false,
    value: settings.tier,
    onChange(tier2) {
      if (tier2 !== settings.tier) {
        const obj = ConjureEffortTiers;
        const conjureWithTierResult = obj.conjureWithTier(tmp, tier2);
        const obj2 = ConjureEffortTiers;
        dependencyMap(obj2.conjureNormalizeFast(conjureWithTierResult));
      }
    },
    title: tmp13,
    accessibilityLabel: stringResult,
    children: CONJURE_MODEL_TIERS.map((value) => {
      let obj2;
      let obj3;
      const obj = { label: obj2.conjureTierLabel(value), subLabel: obj3.conjureTierDescription(value), value, disabled };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      obj2 = ConjureEffortTiers;
      obj3 = ConjureEffortTiers;
      return metroRequire(TableRadioRow, obj, value);
    })
  };
  tmp13 = undefined;
  const TableRadioGroup = settings(6262).TableRadioGroup;
  if (!hideTitle) {
    tmp13 = stringResult;
  }
  CONJURE_MODEL_TIERS = tmp4(6946).CONJURE_MODEL_TIERS;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
  const TableRowGroup = tmp4(6264).TableRowGroup;
  obj5 = { label: intl4.string(disabled(3849).eGqPbV), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
  TableRow = tmp4(6179).TableRow;
  intl4 = tmp4(1126).intl;
  items[1] = closure_6(TableRowGroup, obj4);
  let tmp11Result = null;
  if (tmp2) {
    let tmp12Result = null;
    const tmp15 = closure_7;
    if (null != conjureTierModelResult) {
      const obj6 = {
        hasIcons: false,
        value: conjureTierModelResult,
        onChange(arg0) {
              const obj = ConjureEffortTiers;
              const conjurePickTierModelResult = obj.conjurePickTierModel(settings, settings.tier, arg0);
              const obj2 = ConjureEffortTiers;
              dependencyMap(obj2.conjureNormalizeFast(conjurePickTierModelResult));
            },
        title: stringResult1,
        accessibilityLabel: stringResult1,
        children: main.map((label) => {
              const obj = { label: label.label, subLabel: ConjureModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled };
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              return metroRequire(TableRadioRow, obj, label.id);
            })
      };
      main = choices.main;
      const TableRadioGroup2 = tmp4(6262).TableRadioGroup;
      tmp12Result = tmp12(TableRadioGroup2, obj6);
    }
    const items1 = [tmp12Result, , ];
    let str = settings.thinking;
    const TableRadioGroup3 = tmp4(6262).TableRadioGroup;
    if (str == null) {
      let thinking;
      if (tiers != null) {
        if (tiers[settings.tier] != null) {
          thinking = tmp18.thinking;
        }
      }
      str = thinking;
    }
    if (str == null) {
      str = "";
    }
    const obj7 = {
      hasIcons: false,
      value: str,
      onChange(thinking) {
          const obj = { thinking };
          const merged = Object.assign(settings);
          const obj2 = ConjureEffortTiers;
          dependencyMap(obj2.conjureNormalizeFast(obj));
        },
      title: stringResult2,
      accessibilityLabel: stringResult2,
      children: thinking1.map((value) => {
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
          const tmp = metroRequire;
          if (tmp2 == null) {
            tmp2 = value;
          }
          const obj = { label: tmp2, value, disabled };
          return tmp(TableRadioRow, obj, value);
        })
    };
    thinking1 = choices.thinking;
    items1[1] = closure_6(TableRadioGroup3, obj7);
    let tmp12Result2 = null;
    const tmp4Result = settings(17044);
    if (tmp4Result.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
      const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
      const TableRowGroup2 = tmp4(6264).TableRowGroup;
      obj9 = {
        label: intl5.string(disabled(3849)["5AblQX"]),
        subLabel: intl6.string(disabled(3849).QnUV8M),
        value: true === settings.fast,
        disabled,
        onValueChange(fast) {
              const obj = { fast };
              const merged = Object.assign(settings);
              const obj2 = ConjureEffortTiers;
              dependencyMap(obj2.conjureNormalizeFast(obj));
            }
      };
      TableSwitchRow = tmp4(6895).TableSwitchRow;
      intl5 = tmp4(1126).intl;
      intl6 = tmp4(1126).intl;
      tmp12Result2 = tmp12(TableRowGroup2, obj8);
    }
    const obj10 = { children: items1 };
    items1[2] = tmp12Result2;
    tmp11Result = tmp11(tmp15, obj10);
  }
  items[2] = tmp11Result;
  return closure_8(Stack, obj2);
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureEffortPickerSheet(initialSettings) {
  let choices;
  let closure_129_1;
  let intl;
  let obj4;
  let onChange;
  let tiers;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ tiers, choices, onChange } = initialSettings);
  [tmp5, closure_129_1] = react.useState(initialSettings.initialSettings);
  _slicedToArray(react.useState(initialSettings.initialSettings), 2);
  if (cResult[0] !== onChange) {
    const fn = function s(arg0) {
      closure_1_1(arg0);
      onChange(arg0);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef3849.aBPQxX) };
    const BottomSheetTitleHeader = tmp(6838).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    const tmp10 = metroRequire(BottomSheetTitleHeader, obj2);
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === choices) {
    if (cResult[4] === tmp6) {
      if (cResult[5] === tmp5) {
        let tmp11;
        if (cResult[6] === tiers) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
  }
  const obj3 = { header: tmp7, children: metroRequire(View, obj4) };
  obj4 = { children: metroRequire(closure_9, { settings: tmp5, tiers, choices, disabled: false, onChange: tmp6, hideTitle: true }) };
  const ActionSheet = tmp(6898).ActionSheet;
  const tmp12 = metroRequire(ActionSheet, obj3);
  cResult[3] = choices;
  cResult[4] = tmp6;
  cResult[5] = tmp5;
  cResult[6] = tiers;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : (function ConjureEffortPickerSheet(onChange) {
  let BottomSheetTitleHeader;
  let choices;
  let closure_1;
  let first;
  let intl;
  let obj2;
  let obj3;
  let tiers;
  onChange = onChange.onChange;
  closure_1 = undefined;
  ({ tiers, choices } = onChange);
  [first, closure_1] = react.useState(onChange.initialSettings);
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    closure_1(arg0);
    onChange(arg0);
  }, items);
  const obj = { header: metroRequire(BottomSheetTitleHeader, obj2), children: metroRequire(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3849.aBPQxX) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(closure_9, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default tmp3;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export const ConjureEffortPickerSheet = tmp4;
