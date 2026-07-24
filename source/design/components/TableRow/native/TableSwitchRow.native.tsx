// Module ID: 5502
// Function ID: 46920
// Name: TableSwitchRow
// Dependencies: [57, 31, 27, 33, 4130, 477, 3836, 5165, 4126, 5503, 2]
// Exports: TableSwitchRow

// Module 5502 (TableSwitchRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles(() => ({ labelWithTrailing: { flexDirection: "row", alignItems: "center", gap: 8 } }));
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/TableRow/native/TableSwitchRow.native.tsx");

export const TableSwitchRow = function TableSwitchRow(value) {
  let dependencyMap;
  let disabled;
  let label;
  let subLabel;
  let trailing;
  value = value.value;
  const require = value;
  ({ onValueChange: dependencyMap, label, subLabel, trailing, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  const variant = value.variant;
  let obj = { value: 0, onValueChange: 0, label: 0, subLabel: 0, trailing: 0, disabled: 0, accessibilityHint: 0, variant: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(value, obj);
  let callback;
  function handleOnPress() {
    let tmp;
    if (null != callback) {
      tmp = callback(!closure_0);
    }
    return tmp;
  }
  let obj1 = require(477) /* set */;
  const tmp3 = callback3();
  let obj2 = require(3836) /* getNodeText */;
  const nodeText = obj2.getNodeText(label);
  let obj3 = require(3836) /* getNodeText */;
  const nodeText1 = obj3.getNodeText(subLabel);
  const tmp7 = callback(React.useState(value), 2);
  callback = tmp7[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback2(closure_0);
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["variant"] = variant;
  obj["arrow"] = false;
  let tmp17Result = label;
  if (null != trailing) {
    obj = { style: tmp3.labelWithTrailing };
    let tmp12Result = label;
    if (!React.isValidElement(label)) {
      obj1 = { variant: "text-md/semibold", color: null, includeFontPadding: true };
      let str = "mobile-text-heading-primary";
      if ("danger" === variant) {
        str = "text-feedback-critical";
      }
      obj1.color = str;
      obj1.children = label;
      tmp12Result = callback2(require(4126) /* Text */.Text, obj1);
      const tmp12 = callback2;
    }
    const items1 = [tmp12Result, trailing];
    obj.children = items1;
    tmp17Result = closure_6(View, obj);
    const tmp17 = closure_6;
    const tmp18 = View;
  }
  obj["label"] = tmp17Result;
  obj["subLabel"] = subLabel;
  obj["disabled"] = disabled;
  obj2 = { disabled, checked: tmp7[0] };
  obj["accessibilityState"] = obj2;
  obj["accessible"] = true;
  obj["accessibilityRole"] = "switch";
  let str3 = "";
  if (null != nodeText1) {
    str3 = nodeText1;
  }
  obj["accessibilityLabel"] = "" + nodeText + ", " + str3;
  obj["accessibilityHint"] = value.accessibilityHint;
  let tmp16;
  if (isAndroidResult) {
    tmp16 = handleOnPress;
  }
  obj["onPress"] = tmp16;
  obj["onAccessibilityTap"] = function onAccessibilityTap() {
    callback2(!closure_0);
    const timerId = setTimeout(() => {
      if (null != outer1_1) {
        outer1_1(!outer1_0);
      }
    });
  };
  obj3 = { "aria-hidden": true, value, onValueChange: handleOnPress, disabled };
  obj["trailing"] = callback2(require(5503) /* FormSwitch */.FormSwitch, obj3);
  return callback2(require(5165) /* TableRowInner */.TableRow, obj);
};
