// Module ID: 18549
// Function ID: 18550
// Name: ConjureNativeFieldHeading
// Dependencies: [19, 17, 21, 5043, 575, 1112, 4245, 5634, 18533, 2]
// Exports: conjureFieldAccessibilityLabel, default

// Module 18549 (ConjureNativeFieldHeading)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import ConjureNativeLinkedTextDefault from "ConjureNativeLinkedText" /* 18533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { heading: obj2, labelRow: obj3, label: { flexShrink: 1 }, status: { marginStart: "auto" } };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeFieldHeading.tsx");

export default function ConjureNativeFieldHeading(label) {
  let help;
  let intl;
  let items;
  let items1;
  let optional;
  ({ help, optional } = label);
  label = label.label;
  if (optional === undefined) {
    optional = false;
  }
  const status = label.status;
  const tmp = closure_6();
  const obj2 = { style: tmp.labelRow, children: items };
  items = [, , ];
  const obj = { style: tmp.heading, children: items1 };
  const obj3 = { variant: "body-sm/semibold", color: "text-strong", style: tmp.label, children: label };
  items[0] = React3(Text_Text.Text, obj3);
  let tmp4Result = null;
  if (optional) {
    const obj4 = { variant: "body-xs/normal", color: "text-muted", children: intl.string(_modDef4245["3q5CYS"]) };
    const Text = tmp5(5634).Text;
    intl = tmp5(1112).intl;
    tmp4Result = tmp4(Text, obj4);
  }
  items[1] = tmp4Result;
  let tmp4Result3 = null;
  if (null != status) {
    const obj5 = { style: tmp.status, children: status };
    tmp4Result3 = tmp4(tmp3, obj5);
  }
  items[2] = tmp4Result3;
  items1 = [hasOwnProperty(View, obj2), ];
  let tmp4Result4 = null;
  if (null != help) {
    tmp4Result4 = null;
    if ("" !== help) {
      const obj6 = { text: help, variant: "body-sm/normal", color: "text-subtle", shortLinks: true };
      tmp4Result4 = tmp4(ConjureNativeLinkedTextDefault, obj6);
    }
  }
  items1[1] = tmp4Result4;
  return hasOwnProperty(View, obj);
};
export function conjureFieldAccessibilityLabel(label, arg1) {
  let combined = label;
  if (arg1) {
    const intl = intl2.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + label + ", " + intl.string(_modDef4245["3q5CYS"]);
  }
  return combined;
}
