// Module ID: 6000
// Function ID: 6001
// Name: TableRadioRow
// Dependencies: [19, 21, 5997, 4533, 4548, 5917, 6001, 2]
// Exports: TableRadioRow

// Module 6000 (TableRadioRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4533 */;
import react_native from "react-native" /* 4548 */;
import TableRadioGroup from "TableRadioGroup" /* 5997 */;
import FormRadio from "FormRadio" /* 6001 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = function TableRadioRow(value) {
  let accessibilityRole;
  let accessibilityState;
  let closure_129_1;
  let disabled;
  let label;
  let legacyCompat_selected;
  let subLabel;
  value = value.value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: closure_129_1 } = value);
  const accessibilityHint = value.accessibilityHint;
  const merged = Object.assign(value, Object.assign({ value: 0, label: 0, subLabel: 0, disabled: 0, accessibilityHint: 0, legacyCompat_selected: 0, legacyCompat_onPress: 0 }));
  const context = react.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  const tmp2Result = native;
  const nodeText = tmp2Result.getNodeText(label);
  const tmp2Result3 = native;
  const nodeText1 = tmp2Result3.getNodeText(subLabel);
  const tmp2Result4 = react_native;
  const radioA11yNative = tmp2Result4.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const TableRow = tmp2(5917).TableRow;
  const merged1 = Object.assign(merged);
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  return <TableRow arrow={false} label={label} subLabel={subLabel} disabled={disabled} accessibilityState={accessibilityState} accessible accessibilityRole={accessibilityRole} accessibilityLabel={"" + nodeText + ", " + str} accessibilityHint={accessibilityHint} onPress={function onPress(arg0) {
    if (closure_1_1 != null) {
      tmp(arg0);
    }
    onSelect(value);
  }} trailing={jsx(FormRadio.FormRadio, { selected: legacyCompat_selected })} />;
};
