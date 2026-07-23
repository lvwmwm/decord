// Module ID: 9094
// Function ID: 71241
// Name: TableCheckboxRow
// Dependencies: [31, 33, 3991, 3836, 3848, 5165, 7497, 2]
// Exports: TableCheckboxRow

// Module 9094 (TableCheckboxRow)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("module_3991").fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

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
  let obj = { checked: 0, label: 0, subLabel: 0, disabled: 0, onPress: 0, accessibilityHint: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(checked, obj);
  let sharedValue;
  sharedValue = checked(onPress[2]).useSharedValue(0);
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = sharedValue.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const obj2 = checked(onPress[2]);
  const nodeText = checked(onPress[3]).getNodeText(label);
  const obj3 = checked(onPress[3]);
  const nodeText1 = checked(onPress[3]).getNodeText(subLabel);
  const obj4 = checked(onPress[3]);
  obj = { checked, disabled };
  const checkboxA11yNative = checked(onPress[4]).useCheckboxA11yNative(obj);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["arrow"] = false;
  obj["label"] = label;
  obj["subLabel"] = subLabel;
  obj["disabled"] = disabled;
  obj["accessibilityState"] = accessibilityState;
  obj["accessible"] = true;
  obj["accessibilityRole"] = accessibilityRole;
  let str = "";
  if (null != nodeText1) {
    str = nodeText1;
  }
  obj["accessibilityLabel"] = "" + nodeText + ", " + str;
  obj["accessibilityHint"] = checked.accessibilityHint;
  obj["onPressIn"] = callback;
  obj["onPress"] = callback1;
  obj["trailing"] = jsx(checked(onPress[6]).FormCheckbox, { checked });
  return jsx(checked(onPress[5]).TableRow, {});
};
