// Module ID: 7516
// Function ID: 60208
// Name: FormSwitchRow
// Dependencies: [57, 31, 27, 33, 4130, 477, 5158, 5177, 7514, 5164, 5504, 2]
// Exports: default

// Module 7516 (FormSwitchRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function FormSwitchRow(onValueChange) {
  let accessibilityHint;
  let label;
  let numberOfLines;
  let subLabel;
  let switchProps;
  let trailing;
  onValueChange = onValueChange.onValueChange;
  const value = onValueChange.value;
  const importDefault = value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  let obj = { onValueChange: 0, value: 0, disabled: 0, label: 0, subLabel: 0, accessibilityHint: 0, trailing: 0, numberOfLines: 0, switchProps: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onValueChange, obj);
  let first;
  let callback;
  let obj1 = onValueChange(first[5]);
  const tmp3 = callback3();
  const tmp5 = callback(React.useState(value), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(closure_1);
  }, items);
  let tmp8;
  if ("string" === typeof label) {
    tmp8 = label;
  }
  let sum = tmp8;
  if (tmp9) {
    const _HermesInternal = HermesInternal;
    sum = tmp8 + " " + subLabel;
  }
  obj = {};
  const isAndroidResult = obj1.isAndroid();
  const tmp12 = callback2;
  tmp9 = null != tmp8 && "string" === typeof subLabel;
  const merged1 = Object.assign(merged);
  obj = { style: tmp3.trailing };
  const items1 = [callback2(importDefault(first[7]), { numberOfLines, text: label }), null != trailing && trailing];
  obj.children = items1;
  obj["label"] = closure_7(View, obj);
  obj["subLabel"] = subLabel;
  obj["disabled"] = flag;
  let fn;
  if (isAndroidResult) {
    fn = () => {
      let tmp = null != onValueChange;
      if (tmp) {
        tmp = null != closure_1;
      }
      if (tmp) {
        onValueChange(!closure_1);
      }
    };
  }
  obj["onPress"] = fn;
  obj["accessible"] = true;
  obj["onAccessibilityTap"] = function onAccessibilityTap() {
    callback(!first);
    const timerId = setTimeout(() => {
      if (null != outer1_0) {
        outer1_0(!outer1_2);
      }
    });
  };
  obj["accessibilityRole"] = "switch";
  obj["accessibilityLabel"] = sum;
  obj1 = { disabled: flag, checked: first };
  obj["accessibilityState"] = obj1;
  obj["accessibilityHint"] = accessibilityHint;
  const obj2 = { disabled: flag, value, onValueChange };
  const tmp13 = importDefault(first[6]);
  const tmp15 = closure_7;
  const tmp16 = View;
  const merged2 = Object.assign(switchProps);
  obj["trailing"] = callback2(importDefault(first[8]), obj2);
  return tmp12(tmp13, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default function FormSwitchRowContainer(DEPRECATED_style) {
  if (React.useContext(require(5164) /* context */.RedesignCompatContext)) {
    let obj = { style: DEPRECATED_style.DEPRECATED_style };
    obj = {};
    ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
    const merged = Object.assign(DEPRECATED_style);
    obj.children = callback2(require(5504) /* TableSwitchRow */.TableSwitchRow, obj);
    let tmpResult = tmp(View, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmpResult = tmp(FormSwitchRow, obj);
  }
  return tmpResult;
};
