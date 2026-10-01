// Module ID: 6025
// Function ID: 6026
// Name: Input
// Dependencies: [19, 17, 21, 4836, 576, 6026, 4533, 4832, 6027, 2]
// Exports: Input

// Module 6025 (Input)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4533 */;
import Text_Text from "Text/Text" /* 4832 */;
import getRequiredFieldA11yName2 from "getRequiredFieldA11yName" /* 6026 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { inputRow: obj2, labelWrapper: obj3, label: obj4, description: obj5, error: obj6 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj4 = { marginBottom: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_4 };
obj6 = { marginTop: nativeDefault.space.PX_4, width: "auto" };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  let children;
  let containerStyle;
  let description;
  let errorMessage;
  let items;
  let items1;
  let items2;
  let label;
  let labelId;
  let labelTrailing;
  let required;
  const tmp = closure_5();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  const getRequiredFieldA11yName = getRequiredFieldA11yName2.getRequiredFieldA11yName;
  getRequiredFieldA11yName2;
  const obj = native;
  const requiredFieldA11yName = getRequiredFieldA11yName(obj.getNodeText(label), required);
  let tmp8 = null;
  const obj2 = { style: containerStyle, children: items2 };
  if (null != label) {
    let tmp6Result;
    if (null != labelTrailing) {
      const obj3 = { style: tmp.labelWrapper, children: items };
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: labelId, accessibilityLabel: requiredFieldA11yName, children: label };
      items = [_false(Text_Text.Text, obj4), labelTrailing];
      tmp6Result = tmp6(tmp7, obj3);
    } else {
      const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, nativeID: labelId, accessibilityLabel: requiredFieldA11yName, children: items1 };
      items1 = [label, ];
      let tmp6Result2 = null;
      const Text = tmp2(4832).Text;
      if (required) {
        const obj6 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: [" ", "*"] };
        tmp6Result2 = tmp6(tmp2(4832).Text, obj6);
      }
      items1[1] = tmp6Result2;
      tmp6Result = tmp6(Text, obj5);
    }
    tmp8 = tmp6Result;
  }
  items2 = [tmp8, , , ];
  const obj7 = { style: tmp.inputRow, children };
  items2[1] = _false(View, obj7);
  let tmp12Result = null;
  if (null != description) {
    const obj8 = { variant: "text-xs/medium", color: "text-muted", style: tmp.description, children: description };
    tmp12Result = tmp12(tmp2(4832).Text, obj8);
  }
  items2[2] = tmp12Result;
  let tmp12Result2 = null;
  if (null != errorMessage) {
    const obj9 = { style: tmp.error, children: errorMessage };
    tmp12Result2 = tmp12(tmp2(6027).ErrorText, obj9);
  }
  items2[3] = tmp12Result2;
  return React3(View, obj2);
};
