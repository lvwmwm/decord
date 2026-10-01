// Module ID: 16244
// Function ID: 16245
// Name: VibegrationsEffortPicker
// Dependencies: [32, 19, 17, 21, 1115, 3715, 16245, 5279, 576, 5997, 5371, 6000, 5999, 5917, 16246, 6621, 6618, 6570, 2]
// Exports: VibegrationsEffortPickerSheet

// Module 16244 (VibegrationsEffortPicker)
import react_native from "react-native" /* 17 */;
import intl7 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import VibegrationsEffortTiers from "VibegrationsEffortTiers" /* 16245 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16246 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
class VibegrationsEffortPicker {
  constructor(settings) {
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
    const intl = settings(choices[4]).intl;
    const stringResult = intl.string(tiers(choices[5]).GDs9Vq);
    const intl2 = settings(choices[4]).intl;
    const stringResult1 = intl2.string(tiers(choices[5])["9FRudW"]);
    const intl3 = settings(choices[4]).intl;
    const stringResult2 = intl3.string(tiers(choices[5])["4AsQHS"]);
    let obj = settings(choices[6]);
    let result = obj.vibegrationsTierModel(settings, tiers, settings.tier);
    let obj2 = { direction: "vertical", spacing: tiers(choices[8]).space.PX_16, children: items };
    const Stack = settings(choices[7]).Stack;
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
    const TableRadioGroup = settings(choices[9]).TableRadioGroup;
    if (!hideTitle) {
      tmp13 = stringResult;
    }
    prop = tmp4(tmp5[10]).VIBEGRATIONS_MODEL_TIERS;
    items = [closure_6(TableRadioGroup, obj3), , ];
    const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
    const TableRowGroup = tmp4(tmp5[12]).TableRowGroup;
    obj5 = { label: intl4.string(tiers(choices[5]).IaLFoX), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
    TableRow = tmp4(tmp5[13]).TableRow;
    intl4 = tmp4(tmp5[4]).intl;
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
        const TableRadioGroup2 = tmp4(tmp5[9]).TableRadioGroup;
        tmp12Result = tmp12(TableRadioGroup2, obj6);
      }
      const items1 = [tmp12Result, , ];
      let str = settings.thinking;
      const TableRadioGroup3 = tmp4(tmp5[9]).TableRadioGroup;
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
      const tmp4Result = settings(choices[6]);
      if (tmp4Result.vibegrationsCeilingSupportsFast(settings, tiers, choices.main)) {
        const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
        const TableRowGroup2 = tmp4(tmp5[12]).TableRowGroup;
        obj9 = {
          label: intl5.string(tiers(choices[5]).SYLSgx),
          subLabel: intl6.string(tiers(choices[5]).HITWAI),
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
        intl5 = tmp4(tmp5[4]).intl;
        intl6 = tmp4(tmp5[4]).intl;
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
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default VibegrationsEffortPicker;
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = function VibegrationsEffortPickerSheet(onChange) {
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
  obj2 = { title: intl.string(_modDef3715.GDs9Vq) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(VibegrationsEffortPicker, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
};
