// Module ID: 9060
// Function ID: 71189
// Name: Checkbox
// Dependencies: [27, 33, 4130, 3848, 1212, 4541, 7638, 4126, 2]
// Exports: Checkbox

// Module 9060 (Checkbox)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
({ Pressable: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  let checked;
  let description;
  let label;
  let required;
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = callback3();
  let obj = checked(onToggle[3]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = { accessibilityRole: checkboxA11yNative.accessibilityRole };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = checked(onToggle[4]).intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(checked(onToggle[4]).t.EkokLy) + ")";
  }
  const sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  obj.accessibilityLabel = sum + str;
  obj.accessibilityState = checkboxA11yNative.accessibilityState;
  obj.onPress = function onPress() {
    return onToggle(!checked);
  };
  obj = { direction: "horizontal" };
  const items = [callback(checked(onToggle[6]).FormCheckbox, { checked }), ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { style: tmp.labelContainer };
  const obj3 = { variant: "text-md/medium" };
  const items1 = [label, ];
  if (required) {
    const obj4 = { variant: "text-md/bold", color: "text-feedback-critical" };
    const intl2 = checked(onToggle[4]).intl;
    obj4["aria-label"] = intl2.string(checked(onToggle[4]).t.EkokLy);
    obj4.children = [" ", "*"];
    required = callback2(checked(onToggle[7]).Text, obj4);
  }
  items1[1] = required;
  obj3.children = items1;
  obj2.children = callback2(checked(onToggle[7]).Text, obj3);
  const items2 = [callback(closure_3, obj2), ];
  let tmp16 = null != description;
  if (tmp16) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp16 = callback(checked(onToggle[7]).Text, obj5);
  }
  items2[1] = tmp16;
  obj1.children = items2;
  items[1] = callback2(closure_3, obj1);
  obj.children = items;
  obj.children = callback2(checked(onToggle[5]).Stack, obj);
  return callback(closure_2, obj);
};
