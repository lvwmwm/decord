// Module ID: 8100
// Function ID: 8101
// Name: TableRadioRow
// Dependencies: [19, 21, 8101, 4099, 4105, 6291, 8102, 2]
// Exports: TableRadioRow

// Module 8100 (TableRadioRow)
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
  const context = onSelect.useContext(require(8101) /* context */.TableRadioGroupContext);
  onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  let tmp2Result = tmp2(4099);
  const nodeText = tmp2Result.getNodeText(label);
  tmp2Result = tmp2(4099);
  const nodeText1 = tmp2Result.getNodeText(subLabel);
  const radioA11yNative = require(4105) /* useCheckboxA11yNative */.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
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
  obj.trailing = jsx(require(8102) /* FormRadio */.FormRadio, { selected: legacyCompat_selected });
  return jsx(require(6291) /* TableRowInner */.TableRow, {});
};
