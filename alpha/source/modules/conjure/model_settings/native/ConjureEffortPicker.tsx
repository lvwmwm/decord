// Module ID: 12507
// Function ID: 12508
// Name: ConjureEffortPicker
// Dependencies: [32, 19, 17, 21, 1113, 3868, 12508, 6027, 575, 7058, 12510, 7061, 7060, 6975, 12509, 7369, 7366, 7321, 2]
// Exports: ConjureEffortPickerSheet

// Module 12507 (ConjureEffortPicker)
import react_native from "react-native" /* 17 */;
import intl7 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import TableRadioRow2 from "TableRadioRow" /* 7061 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import ConjureEffortTiers from "ConjureEffortTiers" /* 12508 */;
import ConjureModelLabels from "ConjureModelLabels" /* 12509 */;
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
    const intl = settings(1113).intl;
    const stringResult = intl.string(disabled(3868).aBPQxX);
    const intl2 = settings(1113).intl;
    const stringResult1 = intl2.string(disabled(3868)["59TDiR"]);
    const intl3 = settings(1113).intl;
    const stringResult2 = intl3.string(disabled(3868).fpdVCO);
    let obj = settings(12508);
    const conjureTierModelResult = obj.conjureTierModel(settings, tiers, settings.tier);
    let obj2 = { direction: "vertical", spacing: disabled(575).space.PX_16, children: items };
    const Stack = settings(6027).Stack;
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
    const TableRadioGroup = settings(7058).TableRadioGroup;
    if (!hideTitle) {
      tmp13 = stringResult;
    }
    CONJURE_MODEL_TIERS = tmp4(12510).CONJURE_MODEL_TIERS;
    items = [closure_6(TableRadioGroup, obj3), , ];
    const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
    const TableRowGroup = tmp4(7060).TableRowGroup;
    obj5 = { label: string(tmp4Result.conjureCustomizeMessage(choices)), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
    TableRow = tmp4(6975).TableRow;
    const intl4 = tmp4(1113).intl;
    string = intl4.string;
    tmp4Result = settings(12508);
    items[1] = closure_6(TableRowGroup, obj4);
    let tmp11Result = null;
    if (tmp2) {
      let tmp12Result = null;
      const tmp15 = closure_7;
      const tmp4Result3 = settings(12508);
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
          const TableRadioGroup2 = tmp4(7058).TableRadioGroup;
          tmp12Result = tmp12(TableRadioGroup2, obj6);
        }
      }
      const items1 = [tmp12Result, , ];
      let str = settings.thinking;
      const TableRadioGroup3 = tmp4(7058).TableRadioGroup;
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
      const tmp4Result4 = settings(12508);
      if (tmp4Result4.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
        const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
        const TableRowGroup2 = tmp4(7060).TableRowGroup;
        obj9 = {
          label: intl5.string(disabled(3868)["5AblQX"]),
          subLabel: intl6.string(disabled(3868).QnUV8M),
          value: true === settings.fast,
          disabled,
          onValueChange(fast) {
                const obj = { fast };
                const merged = Object.assign(settings);
                const obj2 = ConjureEffortTiers;
                dependencyMap(obj2.conjureNormalizeFast(obj));
              }
        };
        TableSwitchRow = tmp4(7369).TableSwitchRow;
        intl5 = tmp4(1113).intl;
        intl6 = tmp4(1113).intl;
        tmp12Result2 = tmp12(TableRowGroup2, obj8);
      }
      const obj10 = { children: items1 };
      items1[2] = tmp12Result2;
      tmp11Result = tmp11(tmp15, obj10);
    }
    items[2] = tmp11Result;
    return closure_8(Stack, obj2);
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

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
  obj2 = { title: intl.string(_modDef3868.aBPQxX) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(ConjureEffortPicker, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
}
