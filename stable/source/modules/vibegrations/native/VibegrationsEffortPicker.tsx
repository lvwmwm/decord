// Module ID: 16246
// Function ID: 16247
// Name: VibegrationsEffortPicker
// Dependencies: [32, 19, 17, 21, 558, 576, 1127, 3718, 16247, 5372, 5994, 5995, 5997, 5916, 16248, 6621, 5280, 588, 6571, 6624, 2]

// Module 16246 (VibegrationsEffortPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import TableRadioRow2 from "TableRadioRow" /* 5994 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6571 */;
import ActionSheet2 from "ActionSheet" /* 6624 */;
import VibegrationsEffortTiers from "VibegrationsEffortTiers" /* 16247 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16248 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let settings;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((settings) => {
  let TableSwitchRow;
  let choices;
  let first;
  let items;
  let main;
  let obj9;
  let thinking;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp7;
  let tmp = settings;
  let tmp2 = choices;
  let obj = settings(choices[5]);
  const cResult = obj.c(40);
  settings = settings.settings;
  const tiers = settings.tiers;
  choices = settings.choices;
  const disabled = settings.disabled;
  const onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  [tmp5, View] = disabled(onChange.useState(false), 2);
  const tmp4 = disabled(onChange.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return View((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[6]).intl;
    const stringResult = intl.string(tiers(tmp2[7]).GDs9Vq);
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult1 = intl2.string(tiers(tmp2[7])["9FRudW"]);
    cResult[2] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult2 = intl3.string(tiers(tmp2[7])["4AsQHS"]);
    cResult[3] = stringResult2;
    tmp13 = stringResult2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === choices.main) {
    if (cResult[5] === onChange) {
      let tmp16;
      if (cResult[6] === tiers) {
        tmp16 = cResult[7];
      }
      let closure_6 = tmp16;
      if (cResult[8] === settings) {
        let tmp17;
        if (cResult[9] === tiers) {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp16) {
          let tmp20;
          let tmp22;
          if (cResult[12] === settings) {
            tmp20 = cResult[13];
          }
          class B {
            constructor(tier2) {
              if (tier2 !== settings.tier) {
                const obj = VibegrationsEffortTiers;
                closure_6(obj.vibegrationsWithTier(tmp, tier2));
              }
            }
          }
          if (cResult[14] !== disabled) {
            const prop = tmp(tmp2[9]).VIBEGRATIONS_MODEL_TIERS;
            const mapped = prop.map((value) => {
              let obj2;
              let obj3;
              const obj = { label: obj2.vibegrationsTierLabel(value), subLabel: obj3.vibegrationsTierDescription(value), value, disabled };
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              obj2 = VibegrationsEffortTiers;
              obj3 = VibegrationsEffortTiers;
              return metroRequire(TableRadioRow, obj, value);
            });
            class B {
              constructor(tier2) {
                if (tier2 !== settings.tier) {
                  const obj = VibegrationsEffortTiers;
                  closure_6(obj.vibegrationsWithTier(tmp, tier2));
                }
              }
            }
            cResult[14] = disabled;
            cResult[15] = mapped;
            tmp22 = mapped;
          } else {
            tmp22 = cResult[15];
          }
          if (cResult[16] === settings.tier) {
            if (cResult[17] === undefined) {
              if (cResult[18] === tmp22) {
                let tmp24;
                let tmp28;
                let tmp33;
                if (cResult[19] === tmp20) {
                  tmp24 = cResult[20];
                }
                const _Symbol = Symbol;
                class B {
                  constructor(tier2) {
                    if (tier2 !== settings.tier) {
                      const obj = VibegrationsEffortTiers;
                      closure_6(obj.vibegrationsWithTier(tmp, tier2));
                    }
                  }
                }
                if (tmp27 === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = tmp(tmp2[6]).intl;
                  class B {
                    constructor(tier2) {
                      if (tier2 !== settings.tier) {
                        const obj = VibegrationsEffortTiers;
                        closure_6(obj.vibegrationsWithTier(tmp, tier2));
                      }
                    }
                  }
                  const tmp29Result = tmp29(tiers(tmp2[7]).IaLFoX);
                  cResult[21] = tmp29Result;
                  tmp28 = tmp29Result;
                } else {
                  tmp28 = cResult[21];
                }
                if (cResult[22] !== tmp5) {
                  let obj2 = { expanded: tmp5 };
                  class B {
                    constructor(tier2) {
                      if (tier2 !== settings.tier) {
                        const obj = VibegrationsEffortTiers;
                        closure_6(obj.vibegrationsWithTier(tmp, tier2));
                      }
                    }
                  }
                  cResult[22] = tmp5;
                  cResult[23] = obj2;
                  tmp33 = obj2;
                } else {
                  tmp33 = cResult[23];
                }
                if (cResult[24] === !tmp5) {
                  let tmp34;
                  if (cResult[25] === tmp33) {
                    tmp34 = cResult[26];
                  }
                  if (cResult[27] === tmp17) {
                    if (cResult[28] === tmp16) {
                      if (cResult[29] === choices.main) {
                        if (cResult[30] === choices.thinking) {
                          if (cResult[31] === tmp5) {
                            if (cResult[32] === disabled) {
                              if (cResult[33] === settings) {
                                let tmp37;
                                if (cResult[34] === tiers) {
                                  tmp37 = cResult[35];
                                }
                                if (cResult[36] === tmp24) {
                                  if (cResult[37] === tmp34) {
                                    let tmp48;
                                    if (cResult[38] === tmp37) {
                                      tmp48 = cResult[39];
                                    }
                                    return tmp48;
                                  }
                                }
                                class B {
                                  constructor(tier2) {
                                    if (tier2 !== settings.tier) {
                                      const obj = VibegrationsEffortTiers;
                                      closure_6(obj.vibegrationsWithTier(tmp, tier2));
                                    }
                                  }
                                }
                                let obj3 = { direction: "vertical", spacing: tiers(tmp2[17]).space.PX_16, children: items };
                                const Stack = tmp(tmp2[16]).Stack;
                                items = [tmp24, tmp34, tmp37];
                                const tmp50 = closure_8(Stack, obj3);
                                cResult[36] = tmp24;
                                cResult[37] = tmp34;
                                cResult[38] = tmp37;
                                cResult[39] = tmp50;
                                tmp48 = tmp50;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class B {
                    constructor(tier2) {
                      if (tier2 !== settings.tier) {
                        const obj = VibegrationsEffortTiers;
                        closure_6(obj.vibegrationsWithTier(tmp, tier2));
                      }
                    }
                  }
                  let tmp39Result = null;
                  if (tmp5) {
                    let tmp41 = null;
                    const tmp39 = closure_8;
                    class B {
                      constructor(tier2) {
                        if (tier2 !== settings.tier) {
                          const obj = VibegrationsEffortTiers;
                          closure_6(obj.vibegrationsWithTier(tmp, tier2));
                        }
                      }
                    }
                    if (null != tmp17) {
                      const obj4 = {
                        hasIcons: false,
                        value: null,
                        onChange(arg0) {
                                              const obj = VibegrationsEffortTiers;
                                              return closure_6(obj.vibegrationsPickTierModel(settings, settings.tier, arg0));
                                            },
                        title: tmp10,
                        accessibilityLabel: tmp10,
                        children: main.map((label) => {
                                              const obj = { label: label.label, subLabel: VibegrationsModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled };
                                              const TableRadioRow = TableRadioRow2.TableRadioRow;
                                              return metroRequire(TableRadioRow, obj, label.id);
                                            })
                      };
                      class B {
                        constructor(tier2) {
                          if (tier2 !== settings.tier) {
                            const obj = VibegrationsEffortTiers;
                            closure_6(obj.vibegrationsWithTier(tmp, tier2));
                          }
                        }
                      }
                      main = choices.main;
                      const TableRadioGroup = tmp(tmp2[11]).TableRadioGroup;
                      tmp41 = closure_6(TableRadioGroup, obj4);
                    }
                    const items1 = [tmp41, , ];
                    let str = settings.thinking;
                    const TableRadioGroup2 = tmp(tmp2[11]).TableRadioGroup;
                    if (str == null) {
                      if (tiers != null) {
                        class B {
                          constructor(tier2) {
                            if (tier2 !== settings.tier) {
                              const obj = VibegrationsEffortTiers;
                              closure_6(obj.vibegrationsWithTier(tmp, tier2));
                            }
                          }
                        }
                      }
                      class B {
                        constructor(tier2) {
                          if (tier2 !== settings.tier) {
                            const obj = VibegrationsEffortTiers;
                            closure_6(obj.vibegrationsWithTier(tmp, tier2));
                          }
                        }
                      }
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
                                          return closure_6(obj);
                                        },
                      title: tmp13,
                      accessibilityLabel: tmp13,
                      children: thinking.map((value) => {
                                          const TableRadioRow = TableRadioRow2.TableRadioRow;
                                          let tmp2 = VibegrationsModelLabels.THINKING_LABELS[value];
                                          const tmp = metroRequire;
                                          if (tmp2 == null) {
                                            tmp2 = value;
                                          }
                                          const obj = { label: tmp2, value, disabled };
                                          return tmp(TableRadioRow, obj, value);
                                        })
                    };
                    thinking = choices.thinking;
                    items1[1] = closure_6(TableRadioGroup2, obj5);
                    let tmp43Result = null;
                    const tmpResult = tmp(tmp2[8]);
                    if (tmpResult.vibegrationsCeilingSupportsFast(settings, tiers, choices.main)) {
                      const obj6 = { hasIcons: false, children: closure_6(TableSwitchRow, tmp46) };
                      const TableRowGroup2 = tmp(tmp2[12]).TableRowGroup;
                      class B {
                        constructor(tier2) {
                          if (tier2 !== settings.tier) {
                            const obj = VibegrationsEffortTiers;
                            closure_6(obj.vibegrationsWithTier(tmp, tier2));
                          }
                        }
                      }
                      TableSwitchRow = tmp(tmp2[15]).TableSwitchRow;
                      const intl5 = tmp(tmp2[6]).intl;
                      tmp46[0] = intl5.string(tiers(tmp2[7]).SYLSgx);
                      const intl6 = tmp(tmp2[6]).intl;
                      tmp46[1] = intl6.string(tiers(tmp2[7]).HITWAI);
                      tmp46[2] = true === settings.fast;
                      tmp46[3] = disabled;
                      tmp46[4] = function onValueChange(fast) {
                        const obj = { fast };
                        const merged = Object.assign(settings);
                        return closure_6(obj);
                      };
                      tmp43Result = tmp43(TableRowGroup2, obj6);
                    }
                    const obj7 = { children: items1 };
                    items1[2] = tmp43Result;
                    tmp39Result = tmp39(tmp40, obj7);
                  }
                  cResult[27] = tmp17;
                  cResult[28] = tmp16;
                  cResult[29] = choices.main;
                  cResult[30] = choices.thinking;
                  cResult[31] = tmp5;
                  cResult[32] = disabled;
                  cResult[33] = settings;
                  cResult[34] = tiers;
                  cResult[35] = tmp39Result;
                  tmp37 = tmp39Result;
                }
                const obj8 = { hasIcons: false, children: closure_6(tmp(tmp2[13]).TableRow, obj9) };
                const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
                obj9 = { label: tmp28, arrow: !tmp5, accessibilityState: tmp33, onPress: first };
                const tmp36 = closure_6(TableRowGroup, obj8);
                cResult[24] = !tmp5;
                cResult[25] = tmp33;
                cResult[26] = tmp36;
                tmp34 = tmp36;
              }
            }
          }
          const obj10 = { hasIcons: false, value: tmp19, onChange: tmp20, title: undefined, accessibilityLabel: tmp7, children: tmp22 };
          const tmp26 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj10);
          cResult[16] = settings.tier;
          cResult[17] = undefined;
          cResult[18] = tmp22;
          cResult[19] = tmp20;
          cResult[20] = tmp26;
          tmp24 = tmp26;
        }
        class B {
          constructor(tier2) {
            if (tier2 !== settings.tier) {
              const obj = VibegrationsEffortTiers;
              closure_6(obj.vibegrationsWithTier(tmp, tier2));
            }
          }
        }
        cResult[11] = tmp16;
        cResult[12] = settings;
        cResult[13] = B;
        tmp20 = B;
      }
      const tmpResult2 = tmp(tmp2[8]);
      const result = tmpResult2.vibegrationsTierModel(settings, tiers, settings.tier);
      cResult[8] = settings;
      cResult[9] = tiers;
      cResult[10] = result;
      tmp17 = result;
    }
  }
  class A {
    constructor(vibegrationsWithTierResult) {
      const obj = VibegrationsEffortTiers;
      onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult, tiers, choices.main));
    }
  }
  cResult[4] = choices.main;
  cResult[5] = onChange;
  cResult[6] = tiers;
  cResult[7] = A;
  tmp16 = A;
}) : ((settings) => {
  let TableRow;
  let TableSwitchRow;
  let _undefined;
  let c5;
  let hideTitle;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let main;
  let obj5;
  let obj9;
  let prop;
  let thinking1;
  let tmp13;
  let tmp2;
  settings = settings.settings;
  const tiers = settings.tiers;
  const choices = settings.choices;
  const disabled = settings.disabled;
  ({ onChange: react, hideTitle } = settings);
  if (hideTitle === undefined) {
    hideTitle = false;
  }
  c5 = undefined;
  let tmp = disabled(react.useState(false), 2);
  [tmp2, c5] = tmp;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const intl = settings(choices[6]).intl;
  const stringResult = intl.string(tiers(choices[7]).GDs9Vq);
  const intl2 = settings(choices[6]).intl;
  const stringResult1 = intl2.string(tiers(choices[7])["9FRudW"]);
  const intl3 = settings(choices[6]).intl;
  const stringResult2 = intl3.string(tiers(choices[7])["4AsQHS"]);
  let obj = settings(choices[8]);
  let result = obj.vibegrationsTierModel(settings, tiers, settings.tier);
  let obj2 = { direction: "vertical", spacing: tiers(choices[17]).space.PX_16, children: items };
  const Stack = settings(choices[16]).Stack;
  let obj3 = {
    hasIcons: false,
    value: settings.tier,
    onChange(tier2) {
      if (tier2 !== settings.tier) {
        const obj = VibegrationsEffortTiers;
        const vibegrationsWithTierResult = obj.vibegrationsWithTier(tmp, tier2);
        const obj2 = VibegrationsEffortTiers;
        react(obj2.vibegrationsNormalizeFast(vibegrationsWithTierResult, tiers, choices.main));
      }
    },
    title: tmp13,
    accessibilityLabel: stringResult,
    children: prop.map((value) => {
      let obj2;
      let obj3;
      const obj = { label: obj2.vibegrationsTierLabel(value), subLabel: obj3.vibegrationsTierDescription(value), value, disabled };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      obj2 = VibegrationsEffortTiers;
      obj3 = VibegrationsEffortTiers;
      return metroRequire(TableRadioRow, obj, value);
    })
  };
  tmp13 = undefined;
  const TableRadioGroup = settings(choices[11]).TableRadioGroup;
  if (!hideTitle) {
    tmp13 = stringResult;
  }
  prop = tmp4(tmp5[9]).VIBEGRATIONS_MODEL_TIERS;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
  const TableRowGroup = tmp4(tmp5[12]).TableRowGroup;
  obj5 = { label: intl4.string(tiers(choices[7]).IaLFoX), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
  TableRow = tmp4(tmp5[13]).TableRow;
  intl4 = tmp4(tmp5[6]).intl;
  items[1] = closure_6(TableRowGroup, obj4);
  let tmp11Result = null;
  if (tmp2) {
    let tmp12Result = null;
    const tmp15 = closure_7;
    if (null != result) {
      const obj6 = {
        hasIcons: false,
        value: result,
        onChange(arg0) {
              const obj = VibegrationsEffortTiers;
              const result = obj.vibegrationsPickTierModel(settings, settings.tier, arg0);
              const obj2 = VibegrationsEffortTiers;
              react(obj2.vibegrationsNormalizeFast(result, tiers, choices.main));
            },
        title: stringResult1,
        accessibilityLabel: stringResult1,
        children: main.map((label) => {
              const obj = { label: label.label, subLabel: VibegrationsModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled };
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              return metroRequire(TableRadioRow, obj, label.id);
            })
      };
      main = choices.main;
      const TableRadioGroup2 = tmp4(tmp5[11]).TableRadioGroup;
      tmp12Result = tmp12(TableRadioGroup2, obj6);
    }
    const items1 = [tmp12Result, , ];
    let str = settings.thinking;
    const TableRadioGroup3 = tmp4(tmp5[11]).TableRadioGroup;
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
          const obj2 = VibegrationsEffortTiers;
          react(obj2.vibegrationsNormalizeFast(obj, tiers, choices.main));
        },
      title: stringResult2,
      accessibilityLabel: stringResult2,
      children: thinking1.map((value) => {
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          let tmp2 = VibegrationsModelLabels.THINKING_LABELS[value];
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
    const tmp4Result = settings(choices[8]);
    if (tmp4Result.vibegrationsCeilingSupportsFast(settings, tiers, choices.main)) {
      const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
      const TableRowGroup2 = tmp4(tmp5[12]).TableRowGroup;
      obj9 = {
        label: intl5.string(tiers(choices[7]).SYLSgx),
        subLabel: intl6.string(tiers(choices[7]).HITWAI),
        value: true === settings.fast,
        disabled,
        onValueChange(fast) {
              const obj = { fast };
              const merged = Object.assign(settings);
              const obj2 = VibegrationsEffortTiers;
              react(obj2.vibegrationsNormalizeFast(obj, tiers, choices.main));
            }
      };
      TableSwitchRow = tmp4(tmp5[15]).TableSwitchRow;
      intl5 = tmp4(tmp5[6]).intl;
      intl6 = tmp4(tmp5[6]).intl;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialSettings) => {
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
    const obj2 = { title: intl.string(_modDef3718.GDs9Vq) };
    const BottomSheetTitleHeader = tmp(6571).BottomSheetTitleHeader;
    intl = tmp(1127).intl;
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
  const ActionSheet = tmp(6624).ActionSheet;
  const tmp12 = metroRequire(ActionSheet, obj3);
  cResult[3] = choices;
  cResult[4] = tmp6;
  cResult[5] = tmp5;
  cResult[6] = tiers;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : ((onChange) => {
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
  obj2 = { title: intl.string(_modDef3718.GDs9Vq) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(closure_9, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default tmp3;
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = tmp4;
