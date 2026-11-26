// Module ID: 7181
// Function ID: 7182
// Name: TableCheckboxRow
// Dependencies: [19, 21, 1654, 5105, 6144, 6161, 7182, 2]
// Exports: TableCheckboxRow

// Module 7181 (TableCheckboxRow)
import Fragment from "Fragment" /* 21 */;
import _mod1654 from "module_1654" /* 1654 */;
import react_native from "react-native" /* 5105 */;
import TableRow2 from "TableRow" /* 6144 */;
import TableRowBadge from "TableRowBadge" /* 6161 */;
import FormCheckbox from "FormCheckbox" /* 7182 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export function TableCheckboxRow(checked) {
  let accessibilityRole;
  let accessibilityState;
  let badge;
  let disabled;
  let label;
  let subLabel;
  checked = checked.checked;
  ({ label, subLabel, badge, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  let accessibilityLabel = checked.accessibilityLabel;
  const accessibilityHint = checked.accessibilityHint;
  const merged = Object.assign(checked, Object.assign({ checked: 0, label: 0, subLabel: 0, badge: 0, disabled: 0, onPress: 0, accessibilityLabel: 0, accessibilityHint: 0 }));
  const obj = _mod1654;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const obj2 = react_native;
  const checkboxA11yNative = obj2.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const TableRow = TableRow2.TableRow;
  const merged1 = Object.assign(merged);
  if (accessibilityLabel == null) {
    const tmp2Result = TableRowBadge;
    accessibilityLabel = tmp2Result.getTableRowAccessibilityLabel(label, subLabel, badge);
  }
  return <TableRow arrow={false} label={label} subLabel={subLabel} badge={badge} disabled={disabled} accessibilityState={accessibilityState} accessible accessibilityRole={accessibilityRole} accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} onPressIn={callback} onPress={callback1} trailing={jsx(FormCheckbox.FormCheckbox, { checked })} />;
}
