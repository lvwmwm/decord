// Module ID: 7513
// Function ID: 60172
// Name: TableRadioRow
// Dependencies: []
// Exports: TableRadioRow

// Module 7513 (TableRadioRow)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = function TableRadioRow(value) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let label;
  let legacyCompat_selected;
  let subLabel;
  value = value.value;
  const arg1 = value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: closure_1 } = value);
  let obj = { name: true, padding: "/assets/design/components/Icon/native/redesign/generated/images", string: 24, track: 24, body: null, start: "99274532ad7fe616c031212e677b32e8", nm: "ThreadLockIcon" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(value, obj);
  let React;
  const context = React.useContext(arg1(dependencyMap[2]).TableRadioGroupContext);
  React = context.onSelect;
  if (null == legacyCompat_selected) {
    legacyCompat_selected = context.selectedValue === value;
  }
  let obj1 = arg1(dependencyMap[3]);
  const nodeText = obj1.getNodeText(label);
  const nodeText1 = arg1(dependencyMap[3]).getNodeText(subLabel);
  const obj3 = arg1(dependencyMap[3]);
  obj = { selected: legacyCompat_selected, disabled };
  const radioA11yNative = arg1(dependencyMap[4]).useRadioA11yNative(obj);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
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
  obj["accessibilityHint"] = value.accessibilityHint;
  obj["onPress"] = function onPress(arg0) {
    if (null != callback) {
      callback(arg0);
    }
    onSelect(value);
  };
  obj1 = { selected: legacyCompat_selected };
  obj["trailing"] = jsx(arg1(dependencyMap[6]).FormRadio, obj1);
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
};
