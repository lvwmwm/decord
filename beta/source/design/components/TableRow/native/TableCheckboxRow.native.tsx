// Module ID: 5916
// Function ID: 5917
// Name: TableCheckboxRow
// Dependencies: [19, 21, 4566, 4533, 4548, 5917, 5929, 2]
// Exports: TableCheckboxRow

// Module 5916 (TableCheckboxRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4533 */;
import react_native from "react-native" /* 4548 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import TableRow2 from "TableRow" /* 5917 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const FormCheckbox = tmp2(5929);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = function TableCheckboxRow(checked) {
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
  const obj = ReanimatedRexport;
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
};
