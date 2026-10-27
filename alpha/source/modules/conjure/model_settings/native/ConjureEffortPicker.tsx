// Module ID: 12200
// Function ID: 12201
// Name: ConjureEffortPicker
// Dependencies: [32, 19, 17, 21, 558, 576, 1128, 3830, 12201, 12203, 6984, 6985, 6987, 6903, 12202, 7295, 5977, 587, 7248, 7298, 2]

// Module 12200 (ConjureEffortPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import TableRadioRow2 from "TableRadioRow" /* 6984 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheet2 from "ActionSheet" /* 7298 */;
import ConjureEffortTiers from "ConjureEffortTiers" /* 12201 */;
import ConjureModelLabels from "ConjureModelLabels" /* 12202 */;
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
  let items;
  let main;
  let obj11;
  let onChange;
  let thinking;
  let tiers;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp5;
  let tmp7;
  let tmp = settings;
  let tmp2 = onChange;
  let obj = settings(onChange[5]);
  const cResult = obj.c(39);
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, _slicedToArray] = tmp4;
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
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult1 = intl2.string(disabled(tmp2[7])["59TDiR"]);
    cResult[2] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult2 = intl3.string(disabled(tmp2[7]).fpdVCO);
    cResult[3] = stringResult2;
    tmp13 = stringResult2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== onChange) {
    function change(conjurePickTierModelResult) {
      const obj = ConjureEffortTiers;
      onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
    }
    cResult[4] = onChange;
    cResult[5] = change;
    tmp16 = change;
  } else {
    tmp16 = cResult[5];
  }
  react = tmp16;
  if (cResult[6] === settings) {
    let tmp17;
    if (cResult[7] === tiers) {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp16) {
      let tmp20;
      let tmp22;
      if (cResult[10] === settings) {
        tmp20 = cResult[11];
      }
      class O {
        constructor(tier2) {
          if (tier2 !== settings.tier) {
            const obj = ConjureEffortTiers;
            closure_4(obj.conjureWithTier(tmp, tier2));
          }
        }
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
        class O {
          constructor(tier2) {
            if (tier2 !== settings.tier) {
              const obj = ConjureEffortTiers;
              closure_4(obj.conjureWithTier(tmp, tier2));
            }
          }
        }
        cResult[12] = disabled;
        cResult[13] = mapped;
        tmp22 = mapped;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === settings.tier) {
        if (cResult[15] === undefined) {
          if (cResult[16] === tmp22) {
            let tmp24;
            let tmp27;
            let tmp30;
            if (cResult[17] === tmp20) {
              tmp24 = cResult[18];
            }
            if (cResult[19] !== choices) {
              const intl4 = tmp(tmp2[6]).intl;
              const string = intl4.string;
              class O {
                constructor(tier2) {
                  if (tier2 !== settings.tier) {
                    const obj = ConjureEffortTiers;
                    closure_4(obj.conjureWithTier(tmp, tier2));
                  }
                }
              }
              const stringResult3 = string(obj4.conjureCustomizeMessage(choices));
              cResult[19] = choices;
              cResult[20] = stringResult3;
              tmp27 = stringResult3;
            } else {
              tmp27 = cResult[20];
            }
            class O {
              constructor(tier2) {
                if (tier2 !== settings.tier) {
                  const obj = ConjureEffortTiers;
                  closure_4(obj.conjureWithTier(tmp, tier2));
                }
              }
            }
            if (cResult[21] !== tmp5) {
              let obj2 = { expanded: tmp5 };
              class O {
                constructor(tier2) {
                  if (tier2 !== settings.tier) {
                    const obj = ConjureEffortTiers;
                    closure_4(obj.conjureWithTier(tmp, tier2));
                  }
                }
              }
              cResult[21] = tmp5;
              cResult[22] = obj2;
              tmp30 = obj2;
            } else {
              tmp30 = cResult[22];
            }
            if (cResult[23] === tmp27) {
              if (cResult[24] === tmp29) {
                let tmp31;
                if (cResult[25] === tmp30) {
                  tmp31 = cResult[26];
                }
                if (cResult[27] === tmp17) {
                  if (cResult[28] === tmp16) {
                    if (cResult[29] === choices) {
                      if (cResult[30] === tmp5) {
                        if (cResult[31] === disabled) {
                          if (cResult[32] === settings) {
                            let tmp34;
                            if (cResult[33] === tiers) {
                              tmp34 = cResult[34];
                            }
                            if (cResult[35] === tmp24) {
                              if (cResult[36] === tmp31) {
                                let tmp45;
                                if (cResult[37] === tmp34) {
                                  tmp45 = cResult[38];
                                }
                                return tmp45;
                              }
                            }
                            class O {
                              constructor(tier2) {
                                if (tier2 !== settings.tier) {
                                  const obj = ConjureEffortTiers;
                                  closure_4(obj.conjureWithTier(tmp, tier2));
                                }
                              }
                            }
                            let obj3 = { direction: "vertical", spacing: disabled(tmp2[17]).space.PX_16, children: items };
                            const Stack = tmp(tmp2[16]).Stack;
                            items = [tmp24, tmp31, tmp34];
                            const tmp47 = closure_8(Stack, obj3);
                            cResult[35] = tmp24;
                            cResult[36] = tmp31;
                            cResult[37] = tmp34;
                            cResult[38] = tmp47;
                            tmp45 = tmp47;
                          }
                        }
                      }
                    }
                  }
                }
                class O {
                  constructor(tier2) {
                    if (tier2 !== settings.tier) {
                      const obj = ConjureEffortTiers;
                      closure_4(obj.conjureWithTier(tmp, tier2));
                    }
                  }
                }
                let tmp36Result = null;
                if (tmp5) {
                  const tmp36 = closure_8;
                  const tmp37 = closure_7;
                  class O {
                    constructor(tier2) {
                      if (tier2 !== settings.tier) {
                        const obj = ConjureEffortTiers;
                        closure_4(obj.conjureWithTier(tmp, tier2));
                      }
                    }
                  }
                  let tmp38 = null;
                  if (obj8.conjureCanPickModel(choices)) {
                    tmp38 = null;
                    if (null != tmp17) {
                      const obj5 = {
                        hasIcons: false,
                        value: null,
                        onChange(arg0) {
                                              const obj = ConjureEffortTiers;
                                              return closure_4(obj.conjurePickTierModel(settings, settings.tier, arg0));
                                            },
                        title: tmp10,
                        accessibilityLabel: tmp10,
                        children: main.map((label) => {
                                              const obj = { label: label.label, subLabel: label.provider_label, value: label.id, disabled };
                                              return metroRequire(TableRadioRow2.TableRadioRow, obj, label.id);
                                            })
                      };
                      class O {
                        constructor(tier2) {
                          if (tier2 !== settings.tier) {
                            const obj = ConjureEffortTiers;
                            closure_4(obj.conjureWithTier(tmp, tier2));
                          }
                        }
                      }
                      main = choices.main;
                      const TableRadioGroup = tmp(tmp2[11]).TableRadioGroup;
                      tmp38 = closure_6(TableRadioGroup, obj5);
                    }
                  }
                  const items1 = [tmp38, , ];
                  let str = settings.thinking;
                  const TableRadioGroup2 = tmp(tmp2[11]).TableRadioGroup;
                  if (str == null) {
                    if (tiers != null) {
                      class O {
                        constructor(tier2) {
                          if (tier2 !== settings.tier) {
                            const obj = ConjureEffortTiers;
                            closure_4(obj.conjureWithTier(tmp, tier2));
                          }
                        }
                      }
                    }
                    class O {
                      constructor(tier2) {
                        if (tier2 !== settings.tier) {
                          const obj = ConjureEffortTiers;
                          closure_4(obj.conjureWithTier(tmp, tier2));
                        }
                      }
                    }
                  }
                  if (str == null) {
                    str = "";
                  }
                  const obj6 = {
                    hasIcons: false,
                    value: str,
                    onChange(thinking) {
                                      const obj = { thinking };
                                      const merged = Object.assign(settings);
                                      return closure_4(obj);
                                    },
                    title: tmp13,
                    accessibilityLabel: tmp13,
                    children: thinking.map((value) => {
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
                  thinking = choices.thinking;
                  items1[1] = closure_6(TableRadioGroup2, obj6);
                  let tmp40Result = null;
                  const tmpResult = tmp(tmp2[8]);
                  if (tmpResult.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
                    const obj7 = { hasIcons: false, children: closure_6(TableSwitchRow, tmp43) };
                    const TableRowGroup2 = tmp(tmp2[12]).TableRowGroup;
                    class O {
                      constructor(tier2) {
                        if (tier2 !== settings.tier) {
                          const obj = ConjureEffortTiers;
                          closure_4(obj.conjureWithTier(tmp, tier2));
                        }
                      }
                    }
                    TableSwitchRow = tmp(tmp2[15]).TableSwitchRow;
                    const intl5 = tmp(tmp2[6]).intl;
                    tmp43[0] = intl5.string(disabled(tmp2[7])["5AblQX"]);
                    const intl6 = tmp(tmp2[6]).intl;
                    tmp43[1] = intl6.string(disabled(tmp2[7]).QnUV8M);
                    tmp43[2] = true === settings.fast;
                    tmp43[3] = disabled;
                    tmp43[4] = function onValueChange(fast) {
                      const obj = { fast };
                      const merged = Object.assign(settings);
                      return closure_4(obj);
                    };
                    tmp40Result = tmp40(TableRowGroup2, obj7);
                  }
                  const obj9 = { children: items1 };
                  items1[2] = tmp40Result;
                  tmp36Result = tmp36(tmp37, obj9);
                }
                cResult[27] = tmp17;
                cResult[28] = tmp16;
                cResult[29] = choices;
                cResult[30] = tmp5;
                cResult[31] = disabled;
                cResult[32] = settings;
                cResult[33] = tiers;
                cResult[34] = tmp36Result;
                tmp34 = tmp36Result;
              }
            }
            const obj10 = { hasIcons: false, children: closure_6(tmp(tmp2[13]).TableRow, obj11) };
            const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
            obj11 = { label: tmp27, arrow: tmp29, accessibilityState: tmp30, onPress: first };
            const tmp33 = closure_6(TableRowGroup, obj10);
            cResult[23] = tmp27;
            cResult[24] = tmp29;
            cResult[25] = tmp30;
            cResult[26] = tmp33;
            tmp31 = tmp33;
          }
        }
      }
      const obj12 = { hasIcons: false, value: tmp19, onChange: tmp20, title: undefined, accessibilityLabel: tmp7, children: tmp22 };
      const tmp26 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj12);
      cResult[14] = settings.tier;
      cResult[15] = undefined;
      cResult[16] = tmp22;
      cResult[17] = tmp20;
      cResult[18] = tmp26;
      tmp24 = tmp26;
    }
    class O {
      constructor(tier2) {
        if (tier2 !== settings.tier) {
          const obj = ConjureEffortTiers;
          closure_4(obj.conjureWithTier(tmp, tier2));
        }
      }
    }
    cResult[9] = tmp16;
    cResult[10] = settings;
    cResult[11] = O;
    tmp20 = O;
  }
  const tmpResult2 = tmp(tmp2[8]);
  const conjureTierModelResult = tmpResult2.conjureTierModel(settings, tiers, settings.tier);
  cResult[6] = settings;
  cResult[7] = tiers;
  cResult[8] = conjureTierModelResult;
  tmp17 = conjureTierModelResult;
}) : (function ConjureEffortPicker(settings) {
  let CONJURE_MODEL_TIERS;
  let TableRow;
  let TableSwitchRow;
  let _undefined;
  let c3;
  let choices;
  let disabled;
  let hideTitle;
  let intl5;
  let intl6;
  let items;
  let main;
  let obj5;
  let obj9;
  let string;
  let thinking1;
  let tiers;
  let tmp13;
  let tmp2;
  let tmp4Result;
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
  const intl = settings(1128).intl;
  const stringResult = intl.string(disabled(3830).aBPQxX);
  const intl2 = settings(1128).intl;
  const stringResult1 = intl2.string(disabled(3830)["59TDiR"]);
  const intl3 = settings(1128).intl;
  const stringResult2 = intl3.string(disabled(3830).fpdVCO);
  let obj = settings(12201);
  const conjureTierModelResult = obj.conjureTierModel(settings, tiers, settings.tier);
  let obj2 = { direction: "vertical", spacing: disabled(587).space.PX_16, children: items };
  const Stack = settings(5977).Stack;
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
  const TableRadioGroup = settings(6985).TableRadioGroup;
  if (!hideTitle) {
    tmp13 = stringResult;
  }
  CONJURE_MODEL_TIERS = tmp4(12203).CONJURE_MODEL_TIERS;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
  const TableRowGroup = tmp4(6987).TableRowGroup;
  obj5 = { label: string(tmp4Result.conjureCustomizeMessage(choices)), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
  TableRow = tmp4(6903).TableRow;
  const intl4 = tmp4(1128).intl;
  string = intl4.string;
  tmp4Result = settings(12201);
  items[1] = closure_6(TableRowGroup, obj4);
  let tmp11Result = null;
  if (tmp2) {
    let tmp12Result = null;
    const tmp15 = closure_7;
    const tmp4Result3 = settings(12201);
    if (tmp4Result3.conjureCanPickModel(choices)) {
      tmp12Result = null;
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
                  const obj = { label: label.label, subLabel: label.provider_label, value: label.id, disabled };
                  return metroRequire(TableRadioRow2.TableRadioRow, obj, label.id);
                })
        };
        main = choices.main;
        const TableRadioGroup2 = tmp4(6985).TableRadioGroup;
        tmp12Result = tmp12(TableRadioGroup2, obj6);
      }
    }
    const items1 = [tmp12Result, , ];
    let str = settings.thinking;
    const TableRadioGroup3 = tmp4(6985).TableRadioGroup;
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
    const tmp4Result4 = settings(12201);
    if (tmp4Result4.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
      const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
      const TableRowGroup2 = tmp4(6987).TableRowGroup;
      obj9 = {
        label: intl5.string(disabled(3830)["5AblQX"]),
        subLabel: intl6.string(disabled(3830).QnUV8M),
        value: true === settings.fast,
        disabled,
        onValueChange(fast) {
              const obj = { fast };
              const merged = Object.assign(settings);
              const obj2 = ConjureEffortTiers;
              dependencyMap(obj2.conjureNormalizeFast(obj));
            }
      };
      TableSwitchRow = tmp4(7295).TableSwitchRow;
      intl5 = tmp4(1128).intl;
      intl6 = tmp4(1128).intl;
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
    const fn = function c(arg0) {
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
    const obj2 = { title: intl.string(_modDef3830.aBPQxX) };
    const BottomSheetTitleHeader = tmp(7248).BottomSheetTitleHeader;
    intl = tmp(1128).intl;
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
  const ActionSheet = tmp(7298).ActionSheet;
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
  obj2 = { title: intl.string(_modDef3830.aBPQxX) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(closure_9, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default tmp3;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export const ConjureEffortPickerSheet = tmp4;
