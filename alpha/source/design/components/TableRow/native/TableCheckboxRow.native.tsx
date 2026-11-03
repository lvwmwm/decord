// Module ID: 7100
// Function ID: 7101
// Name: TableCheckboxRow
// Dependencies: [19, 21, 1652, 5310, 5209, 7101, 7115, 2]
// Exports: TableCheckboxRow

// Module 7100 (TableCheckboxRow)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import react_native from "react-native" /* 5209 */;
import native from "native" /* 5310 */;
import TableRow2 from "TableRow" /* 7101 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const FormCheckbox = tmp2(7115);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export function TableCheckboxRow(checked) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let label;
  let subLabel;
  checked = checked.checked;
  ({ label, subLabel, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const accessibilityHint = checked.accessibilityHint;
  const merged = Object.assign(checked, Object.assign({ checked: 0, label: 0, subLabel: 0, disabled: 0, onPress: 0, accessibilityHint: 0 }));
  const obj = _mod1652;
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
  const obj2 = native;
  const nodeText = obj2.getNodeText(label);
  const obj3 = native;
  const nodeText1 = obj3.getNodeText(subLabel);
  const obj4 = react_native;
  const checkboxA11yNative = obj4.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const TableRow = TableRow2.TableRow;
  const merged1 = Object.assign(merged);
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  return <TableRow arrow={false} label={label} subLabel={subLabel} disabled={disabled} accessibilityState={accessibilityState} accessible accessibilityRole={accessibilityRole} accessibilityLabel={"" + nodeText + ", " + str} accessibilityHint={accessibilityHint} onPressIn={callback} onPress={callback1} trailing={jsx(FormCheckbox.FormCheckbox, { checked })} />;
}
