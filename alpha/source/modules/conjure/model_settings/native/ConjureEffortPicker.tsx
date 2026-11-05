// Module ID: 12375
// Function ID: 12376
// Name: ConjureEffortPicker
// Dependencies: [32, 19, 17, 21, 1113, 3995, 12376, 6165, 575, 7202, 12378, 7205, 7204, 7119, 12377, 7507, 7504, 7460, 2]
// Exports: ConjureEffortPickerSheet

// Module 12375 (ConjureEffortPicker)
import react_native from "react-native" /* 17 */;
import intl7 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import TableRadioRow2 from "TableRadioRow" /* 7205 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7460 */;
import ActionSheet2 from "ActionSheet" /* 7504 */;
import ConjureEffortTiers from "ConjureEffortTiers" /* 12376 */;
import ConjureModelLabels from "ConjureModelLabels" /* 12377 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
class ConjureEffortPicker {
  constructor(settings) {
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
    let obj11;
    let obj6;
    let obj7;
    let thinking1;
    let tiers;
    let tmp14;
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
    let intl = settings(1113).intl;
    let tmp6 = disabled;
    const stringResult = intl.string(disabled(3995).aBPQxX);
    const intl2 = settings(1113).intl;
    const stringResult1 = intl2.string(disabled(3995)["59TDiR"]);
    const intl3 = settings(1113).intl;
    const stringResult2 = intl3.string(disabled(3995).fpdVCO);
    let obj = settings(12376);
    const conjureCanPickModelResult = obj.conjureCanPickModel(choices);
    let obj2 = settings(12376);
    const conjureTierModelResult = obj2.conjureTierModel(settings, tiers, settings.tier);
    let obj3 = { direction: "vertical", spacing: disabled(575).space.PX_16, children: items };
    const Stack = settings(6165).Stack;
    const obj4 = {
      hasIcons: false,
      value: settings.tier,
      onChange(value) {
        let conjureTierAvailableResult = value !== settings.tier;
        const tmp = settings;
        if (conjureTierAvailableResult) {
          const obj = ConjureEffortTiers;
          conjureTierAvailableResult = obj.conjureTierAvailable(value);
        }
        if (conjureTierAvailableResult) {
          const obj2 = ConjureEffortTiers;
          const conjureWithTierResult = obj2.conjureWithTier(tmp, value);
          const obj3 = ConjureEffortTiers;
          dependencyMap(obj3.conjureNormalizeFast(conjureWithTierResult));
        }
      },
      title: tmp14,
      accessibilityLabel: stringResult,
      children: CONJURE_MODEL_TIERS.map((value) => {
        let obj2;
        let result;
        let tmp6;
        const obj = { label: obj2.conjureTierLabel(value), subLabel: result, value, disabled: tmp6 };
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        obj2 = ConjureEffortTiers;
        const obj3 = ConjureEffortTiers;
        const tmp = metroRequire;
        if (obj3.conjureTierAvailable(value)) {
          const tmp2Result = ConjureEffortTiers;
          result = tmp2Result.conjureTierDescription(value);
        } else {
          const intl = tmp2(1113).intl;
          result = intl.string(_modDef3995["17yEQw"]);
        }
        tmp6 = disabled;
        if (!tmp6) {
          const tmp2Result2 = ConjureEffortTiers;
          tmp6 = !tmp2Result2.conjureTierAvailable(value);
        }
        return tmp(TableRadioRow, obj, value);
      })
    };
    tmp14 = undefined;
    const TableRadioGroup = settings(7202).TableRadioGroup;
    if (!hideTitle) {
      tmp14 = stringResult;
    }
    CONJURE_MODEL_TIERS = tmp4(12378).CONJURE_MODEL_TIERS;
    items = [closure_6(TableRadioGroup, obj4), , ];
    let tmp13Result = null;
    if (conjureCanPickModelResult) {
      const obj5 = { hasIcons: false, children: closure_6(TableRow, obj6) };
      const TableRowGroup = tmp4(7204).TableRowGroup;
      obj6 = { label: intl4.string(tmp6(3995).YLHRzA), arrow: !tmp2, accessibilityState: obj7, onPress: callback };
      TableRow = tmp4(7119).TableRow;
      intl4 = tmp4(1113).intl;
      obj7 = { expanded: tmp2 };
      tmp13Result = tmp13(TableRowGroup, obj5);
    }
    items[1] = tmp13Result;
    let tmp12Result = null;
    if (conjureCanPickModelResult) {
      tmp12Result = null;
      if (tmp2) {
        let tmp13Result3 = null;
        const tmp17 = closure_7;
        if (null != conjureTierModelResult) {
          const obj8 = {
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
          const TableRadioGroup2 = tmp4(7202).TableRadioGroup;
          tmp13Result3 = tmp13(TableRadioGroup2, obj8);
        }
        const items1 = [tmp13Result3, , ];
        let str = settings.thinking;
        const TableRadioGroup3 = tmp4(7202).TableRadioGroup;
        if (str == null) {
          let thinking;
          if (tiers != null) {
            if (tiers[settings.tier] != null) {
              thinking = tmp20.thinking;
            }
          }
          str = thinking;
        }
        if (str == null) {
          str = "";
        }
        const obj9 = {
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
        items1[1] = closure_6(TableRadioGroup3, obj9);
        let tmp13Result4 = null;
        const tmp4Result = settings(12376);
        if (tmp4Result.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
          const obj10 = { hasIcons: false, children: closure_6(TableSwitchRow, obj11) };
          const TableRowGroup2 = tmp4(7204).TableRowGroup;
          obj11 = {
            label: intl5.string(tmp6(3995)["5AblQX"]),
            subLabel: intl6.string(tmp6(3995).QnUV8M),
            value: true === settings.fast,
            disabled,
            onValueChange(fast) {
                    const obj = { fast };
                    const merged = Object.assign(settings);
                    const obj2 = ConjureEffortTiers;
                    dependencyMap(obj2.conjureNormalizeFast(obj));
                  }
          };
          TableSwitchRow = tmp4(7507).TableSwitchRow;
          intl5 = tmp4(1113).intl;
          intl6 = tmp4(1113).intl;
          tmp13Result4 = tmp13(TableRowGroup2, obj10);
        }
        const obj12 = { children: items1 };
        items1[2] = tmp13Result4;
        tmp12Result = tmp12(tmp17, obj12);
      }
    }
    items[2] = tmp12Result;
    return closure_8(Stack, obj3);
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default ConjureEffortPicker;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export function ConjureEffortPickerSheet(onChange) {
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
  obj2 = { title: intl.string(_modDef3995.aBPQxX) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(ConjureEffortPicker, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
}
