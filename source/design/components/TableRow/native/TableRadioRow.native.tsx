// Module ID: 8050
// Function ID: 8051
// Name: TableRadioRow
// Dependencies: [19, 21, 8051, 4067, 4073, 5435, 8052, 2]
// Exports: TableRadioRow

// Module 8050 (TableRadioRow)
import noop from "noop";
import { jsx } from "jsxProd";

let require = arg1;
const result = require("context").fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = function TableRadioRow(value) {
  let accessibilityRole;
  let accessibilityState;
  let dependencyMap;
  let disabled;
  let label;
  let legacyCompat_selected;
  let subLabel;
  value = value.value;
  const require = value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: dependencyMap } = value);
  const merged = Object.assign(value, Object.create(null));
  let onSelect;
  const context = onSelect.useContext(require(8051) /* context */.TableRadioGroupContext);
  onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  let tmp2Result = tmp2(4067);
  const nodeText = tmp2Result.getNodeText(label);
  tmp2Result = tmp2(4067);
  const nodeText1 = tmp2Result.getNodeText(subLabel);
  const radioA11yNative = require(4073) /* useCheckboxA11yNative */.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.arrow = false;
  obj.label = label;
  obj.subLabel = subLabel;
  obj.disabled = disabled;
  obj.accessibilityState = accessibilityState;
  obj.accessible = true;
  obj.accessibilityRole = accessibilityRole;
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  obj.accessibilityLabel = "" + nodeText + ", " + str;
  obj.accessibilityHint = value.accessibilityHint;
  obj.onPress = function onPress(arg0) {
    if (closure_1 != null) {
      tmp(arg0);
    }
    onSelect(closure_0);
  };
  obj.trailing = jsx(require(8052) /* FormRadio */.FormRadio, { selected: legacyCompat_selected });
  return jsx(require(5435) /* TableRowInner */.TableRow, {});
};
