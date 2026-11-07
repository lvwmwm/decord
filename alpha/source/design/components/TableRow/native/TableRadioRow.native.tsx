// Module ID: 7127
// Function ID: 7128
// Name: TableRadioRow
// Dependencies: [19, 21, 7124, 5200, 7038, 7052, 7128, 2]
// Exports: TableRadioRow

// Module 7127 (TableRadioRow)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 5200 */;
import TableRowBadge from "TableRowBadge" /* 7052 */;
import TableRadioGroup from "TableRadioGroup" /* 7124 */;
import FormRadio from "FormRadio" /* 7128 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export function TableRadioRow(value) {
  let accessibilityRole;
  let accessibilityState;
  let badge;
  let closure_129_1;
  let disabled;
  let label;
  let legacyCompat_selected;
  let subLabel;
  value = value.value;
  ({ label, subLabel, badge, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: closure_129_1 } = value);
  const accessibilityHint = value.accessibilityHint;
  const merged = Object.assign(value, Object.assign({ value: 0, label: 0, subLabel: 0, badge: 0, disabled: 0, accessibilityHint: 0, legacyCompat_selected: 0, legacyCompat_onPress: 0 }));
  const context = react.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  const tmp2Result = react_native;
  const radioA11yNative = tmp2Result.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const TableRow = tmp2(7038).TableRow;
  const merged1 = Object.assign(merged);
  const tmp2Result2 = TableRowBadge;
  return <TableRow arrow={false} label={label} subLabel={subLabel} badge={badge} disabled={disabled} accessibilityState={accessibilityState} accessible accessibilityRole={accessibilityRole} accessibilityLabel={tmp2Result2.getTableRowAccessibilityLabel(label, subLabel, badge)} accessibilityHint={accessibilityHint} onPress={function handleOnPress(arg0) {
    if (closure_1_1 != null) {
      tmp(arg0);
    }
    onSelect(value);
  }} trailing={jsx(FormRadio.FormRadio, { selected: legacyCompat_selected })} />;
}
