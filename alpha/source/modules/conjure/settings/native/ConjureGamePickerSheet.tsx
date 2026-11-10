// Module ID: 12333
// Function ID: 12334
// Name: ConjureGamePickerSheet
// Dependencies: [32, 19, 21, 6208, 12329, 12334, 12330, 5376, 2]
// Exports: default

// Module 12333 (ConjureGamePickerSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6208 */;
import conjureGamePickerOptions from "conjureGamePickerOptions" /* 12329 */;
import useConjureSettingPickerOptions from "useConjureSettingPickerOptions" /* 12330 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

function toOption(value) {
  const obj = { type: InteractionComponentTypes.SelectOptionType.STRING, value: value.value, label: value.label, description: value.description };
  return obj;
}
let jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureGamePickerSheet.tsx");

export default function ConjureGamePickerSheet(onSubmit) {
  let closure_5;
  let selected;
  let title;
  onSubmit = onSubmit.onSubmit;
  let runningIds;
  let first;
  let first1;
  ({ title, selected } = onSubmit);
  let obj = onSubmit(runningIds[4]);
  const conjureGameOptions = obj.useConjureGameOptions();
  const allOptions = conjureGameOptions.allOptions;
  runningIds = conjureGameOptions.runningIds;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  const tmp4 = tmp2[1];
  const tmp5 = first(first1.useState(selected), 2);
  first1 = tmp5[0];
  jsx = tmp5[1];
  let items = [allOptions, first1, first, runningIds];
  const items1 = [allOptions, first1];
  const memo = first1.useMemo(() => {
    const obj = conjureGamePickerOptions;
    const result = obj.conjureGamePickerOptions(allOptions, first, runningIds, first1);
    return result.map(toOption);
  }, items);
  const items2 = [first1];
  const memo1 = first1.useMemo(() => first1.map((id) => {
    let closure_0 = id;
    let iter = allOptions.find((value) => value.value === closure_0);
    if (iter == null) {
      iter = { id, value: id, label: id };
      const obj = { id, value: id, label: id };
    }
    const obj2 = { type: onSubmit(runningIds[3]).SelectOptionType.STRING, value: iter.value, label: iter.label, description: iter.description };
    return obj2;
  }), items1);
  set = first1.useMemo(() => {
    set = new Set(first1);
    return set;
  }, items2);
  const obj3 = { placeholder: title, minValues: 0, maxValues: onSubmit(runningIds[6]).MAX_CONJURE_SETTING_PICKS };
  allOptions(runningIds[5]);
  return <tmp8 selectionActionComponent={obj3} allowEmpty options={memo} selectedOptions={memo1} selectedCount={first1.length} isSelected={function isSelected(value) {
    return set.has(value.value);
  }} onPressOptionItem={function press(arg0, value) {
    let closure_0 = value;
    if (set.has(value.value)) {
      closure_5(first1.filter((item) => item !== value.value));
    } else if (first1.length < useConjureSettingPickerOptions.MAX_CONJURE_SETTING_PICKS) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, first1, 0)] = value.value;
      closure_5(items);
    }
  }} submitSelection={function submitSelection() {
    const items = [...first1];
    onSubmit(items);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }} onQueryChange={tmp4} renderIcon={function renderIcon() {
    return null;
  }} skipIcon renderDescription={function renderDescription(description) {
    return description.description;
  }} itemAccessibilityLabel={function itemAccessibilityLabel(label) {
    return label.label;
  }} />;
};
