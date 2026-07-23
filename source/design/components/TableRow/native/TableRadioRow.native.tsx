// Module ID: 7518
// Function ID: 60217
// Name: TableRadioRow
// Dependencies: [31, 33, 7519, 3836, 3848, 5165, 7520, 2]
// Exports: TableRadioRow

// Module 7518 (TableRadioRow)
import result from "result";
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
  let obj = { value: 0, label: 0, subLabel: 0, disabled: 0, accessibilityHint: 0, legacyCompat_selected: 0, legacyCompat_onPress: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(value, obj);
  let onSelect;
  const context = onSelect.useContext(require(7519) /* context */.TableRadioGroupContext);
  onSelect = context.onSelect;
  if (null == legacyCompat_selected) {
    legacyCompat_selected = context.selectedValue === value;
  }
  let obj1 = require(3836) /* getNodeText */;
  const nodeText = obj1.getNodeText(label);
  const nodeText1 = require(3836) /* getNodeText */.getNodeText(subLabel);
  const obj3 = require(3836) /* getNodeText */;
  obj = { selected: legacyCompat_selected, disabled };
  const radioA11yNative = require(3848) /* useCheckboxA11yNative */.useRadioA11yNative(obj);
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
    onSelect(closure_0);
  };
  obj1 = { selected: legacyCompat_selected };
  obj["trailing"] = jsx(require(7520) /* FormRadio */.FormRadio, { selected: legacyCompat_selected });
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
