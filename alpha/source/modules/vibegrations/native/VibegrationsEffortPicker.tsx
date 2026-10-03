// Module ID: 16552
// Function ID: 16553
// Name: VibegrationsEffortPicker
// Dependencies: [32, 19, 17, 21, 558, 576, 1126, 3723, 16553, 6747, 6071, 6072, 6074, 5993, 16554, 6698, 5593, 587, 6644, 6701, 2]

// Module 16552 (VibegrationsEffortPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import TableRadioRow2 from "TableRadioRow" /* 6071 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import VibegrationsEffortTiers from "VibegrationsEffortTiers" /* 16553 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16554 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let settings;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((settings) => {
  let choices;
  let disabled;
  let onChange;
  let tiers;
  let tmp6;
  let tmp = settings;
  let tmp2 = onChange;
  let obj = settings(onChange[5]);
  const cResult = obj.c(37);
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  const tmp4 = _slicedToArray(A.useState(false), 2);
  [r10023, _slicedToArray] = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[6]).intl;
    const stringResult = intl.string(disabled(tmp2[7]).GDs9Vq);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[6]).intl;
    cResult[2] = intl2.string(disabled(tmp2[7])["9FRudW"]);
    const stringResult1 = intl2.string(disabled(tmp2[7])["9FRudW"]);
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    cResult[3] = intl3.string(disabled(tmp2[7])["4AsQHS"]);
    const stringResult2 = intl3.string(disabled(tmp2[7])["4AsQHS"]);
  }
  if (cResult[4] !== onChange) {
    class A {
      constructor(vibegrationsWithTierResult) {
        const obj = VibegrationsEffortTiers;
        onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
      }
    }
    cResult[4] = onChange;
    cResult[5] = A;
  } else {
    class A {
      constructor(vibegrationsWithTierResult) {
        const obj = VibegrationsEffortTiers;
        onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
      }
    }
  }
  A = tmp15;
  if (cResult[6] === settings) {
    class A {
      constructor(vibegrationsWithTierResult) {
        const obj = VibegrationsEffortTiers;
        onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
      }
    }
    if (cResult[9] === tmp15) {
      class A {
        constructor(vibegrationsWithTierResult) {
          const obj = VibegrationsEffortTiers;
          onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
        }
      }
      class B {
        constructor(tier2) {
          if (tier2 !== settings.tier) {
            const obj = VibegrationsEffortTiers;
            A(obj.vibegrationsWithTier(tmp, tier2));
          }
        }
      }
      if (cResult[12] !== disabled) {
        class A {
          constructor(vibegrationsWithTierResult) {
            const obj = VibegrationsEffortTiers;
            onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
          }
        }
        const mapped = arr.map((value) => {
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
              A(obj.vibegrationsWithTier(tmp, tier2));
            }
          }
        }
        cResult[12] = disabled;
        cResult[13] = mapped;
      } else {
        class A {
          constructor(vibegrationsWithTierResult) {
            const obj = VibegrationsEffortTiers;
            onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
          }
        }
      }
      if (cResult[14] === settings.tier) {
        class A {
          constructor(vibegrationsWithTierResult) {
            const obj = VibegrationsEffortTiers;
            onChange(obj.vibegrationsNormalizeFast(vibegrationsWithTierResult));
          }
        }
      }
      let obj2 = { hasIcons: false, value: tmp17, onChange: tmp18, title: undefined, accessibilityLabel: tmp6, children: tmp20 };
      cResult[14] = settings.tier;
      cResult[15] = undefined;
      cResult[16] = tmp20;
      cResult[17] = tmp18;
      cResult[18] = closure_6(tmp(tmp2[11]).TableRadioGroup, obj2);
      const tmp24 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj2);
    }
    class B {
      constructor(tier2) {
        if (tier2 !== settings.tier) {
          const obj = VibegrationsEffortTiers;
          A(obj.vibegrationsWithTier(tmp, tier2));
        }
      }
    }
    cResult[9] = tmp15;
    cResult[10] = settings;
    cResult[11] = B;
  }
  const tmpResult = tmp(tmp2[8]);
  const result = tmpResult.vibegrationsTierModel(settings, tiers, settings.tier);
  cResult[6] = settings;
  cResult[7] = tiers;
  cResult[8] = result;
}) : ((settings) => {
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
  let prop;
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
  const stringResult = intl.string(disabled(3723).GDs9Vq);
  const intl2 = settings(1126).intl;
  const stringResult1 = intl2.string(disabled(3723)["9FRudW"]);
  const intl3 = settings(1126).intl;
  const stringResult2 = intl3.string(disabled(3723)["4AsQHS"]);
  let obj = settings(16553);
  let result = obj.vibegrationsTierModel(settings, tiers, settings.tier);
  let obj2 = { direction: "vertical", spacing: disabled(587).space.PX_16, children: items };
  const Stack = settings(5593).Stack;
  let obj3 = {
    hasIcons: false,
    value: settings.tier,
    onChange(tier2) {
      if (tier2 !== settings.tier) {
        const obj = VibegrationsEffortTiers;
        const vibegrationsWithTierResult = obj.vibegrationsWithTier(tmp, tier2);
        const obj2 = VibegrationsEffortTiers;
        dependencyMap(obj2.vibegrationsNormalizeFast(vibegrationsWithTierResult));
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
  const TableRadioGroup = settings(6072).TableRadioGroup;
  if (!hideTitle) {
    tmp13 = stringResult;
  }
  prop = tmp4(6747).VIBEGRATIONS_MODEL_TIERS;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
  const TableRowGroup = tmp4(6074).TableRowGroup;
  obj5 = { label: intl4.string(disabled(3723).IaLFoX), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
  TableRow = tmp4(5993).TableRow;
  intl4 = tmp4(1126).intl;
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
              dependencyMap(obj2.vibegrationsNormalizeFast(result));
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
      const TableRadioGroup2 = tmp4(6072).TableRadioGroup;
      tmp12Result = tmp12(TableRadioGroup2, obj6);
    }
    const items1 = [tmp12Result, , ];
    let str = settings.thinking;
    const TableRadioGroup3 = tmp4(6072).TableRadioGroup;
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
          dependencyMap(obj2.vibegrationsNormalizeFast(obj));
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
    const tmp4Result = settings(16553);
    if (tmp4Result.vibegrationsCeilingSupportsFast(settings, tiers, choices.main)) {
      const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
      const TableRowGroup2 = tmp4(6074).TableRowGroup;
      obj9 = {
        label: intl5.string(disabled(3723).SYLSgx),
        subLabel: intl6.string(disabled(3723).HITWAI),
        value: true === settings.fast,
        disabled,
        onValueChange(fast) {
              const obj = { fast };
              const merged = Object.assign(settings);
              const obj2 = VibegrationsEffortTiers;
              dependencyMap(obj2.vibegrationsNormalizeFast(obj));
            }
      };
      TableSwitchRow = tmp4(6698).TableSwitchRow;
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
    const obj2 = { title: intl.string(_modDef3723.GDs9Vq) };
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
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
  const ActionSheet = tmp(6701).ActionSheet;
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
  obj2 = { title: intl.string(_modDef3723.GDs9Vq) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(closure_9, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default tmp3;
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = tmp4;
