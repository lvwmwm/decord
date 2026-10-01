// Module ID: 8732
// Function ID: 8733
// Name: Checkbox
// Dependencies: [17, 21, 4836, 4548, 1115, 5279, 5929, 4832, 2]
// Exports: Checkbox

// Module 8732 (Checkbox)
import intl3 from "intl" /* 1115 */;
import react_native from "react-native" /* 4548 */;
import FormCheckbox from "FormCheckbox" /* 5929 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ Pressable: c2, View: c3 } = react_native2);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = size.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  let Stack;
  let Text;
  let accessibilityState;
  let checked;
  let description;
  let intl2;
  let items1;
  let items2;
  let label;
  let obj7;
  let required;
  let str;
  let sum;
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = closure_6();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  const obj2 = {
    accessibilityRole: checkboxA11yNative.accessibilityRole,
    accessibilityLabel: sum + str,
    accessibilityState,
    onPress() {
      return onToggle(!checked);
    },
    children: hasOwnProperty(Stack, obj7)
  };
  str = "";
  let str2 = "";
  accessibilityState = checkboxA11yNative.accessibilityState;
  const tmp6 = React2;
  if (required) {
    const intl = tmp2(1115).intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(tmp2(1115).t.EkokLy) + ")";
  }
  sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  Stack = tmp2(5279).Stack;
  const items = [React3(FormCheckbox.FormCheckbox, { checked }), ];
  const obj3 = { style: tmp.textContainer, children: items2 };
  const obj4 = { style: tmp.labelContainer, children: hasOwnProperty(Text, { variant: "text-md/medium", children: items1 }) };
  items1 = [label, ];
  Text = tmp2(4832).Text;
  if (required) {
    const obj5 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": intl2.string(intl3.t.EkokLy), children: [" ", "*"] };
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    required = tmp10(Text2, obj5);
  }
  items1[1] = required;
  items2 = [React3(_false, obj4), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp5Result = tmp5(tmp2(4832).Text, obj6);
  }
  obj7 = { direction: "horizontal", children: items };
  items2[1] = tmp5Result;
  items[1] = hasOwnProperty(_false, obj3);
  return React3(tmp6, obj2);
};
