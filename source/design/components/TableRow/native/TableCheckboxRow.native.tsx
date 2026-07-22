// Module ID: 9087
// Function ID: 71200
// Name: TableCheckboxRow
// Dependencies: []
// Exports: TableCheckboxRow

// Module 9087 (TableCheckboxRow)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = function TableCheckboxRow(checked) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let label;
  let subLabel;
  checked = checked.checked;
  const arg1 = checked;
  ({ label, subLabel, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const dependencyMap = onPress;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(checked, obj);
  let React;
  const sharedValue = arg1(dependencyMap[2]).useSharedValue(0);
  React = sharedValue;
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = React.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const obj2 = arg1(dependencyMap[2]);
  const nodeText = arg1(dependencyMap[3]).getNodeText(label);
  const obj3 = arg1(dependencyMap[3]);
  const nodeText1 = arg1(dependencyMap[3]).getNodeText(subLabel);
  const obj4 = arg1(dependencyMap[3]);
  obj = { checked, disabled };
  const checkboxA11yNative = arg1(dependencyMap[4]).useCheckboxA11yNative(obj);
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
  obj["trailing"] = jsx(arg1(dependencyMap[6]).FormCheckbox, { checked });
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
};
