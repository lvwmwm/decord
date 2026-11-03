// Module ID: 7373
// Function ID: 7374
// Name: TextArea
// Dependencies: [109, 19, 21, 5210, 7209, 7374, 7210, 2]
// Exports: TextArea

// Module 7373 (TextArea)
import Fragment from "Fragment" /* 21 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 5210 */;
import Input2 from "Input" /* 7209 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 7210 */;
import TextAreaField2 from "TextAreaField" /* 7374 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export function TextArea(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const required = merged.required;
  const obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(merged);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp3 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  const Input = Input2.Input;
  const merged1 = Object.assign(merged);
  const TextAreaField = TextAreaField2.TextAreaField;
  const merged2 = Object.assign(merged);
  const merged3 = Object.assign(tmp3);
  const obj4 = getRequiredFieldA11yName;
  let requiredFieldA11yName = obj4.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><TextAreaField ref={ref} accessibilityLabel={requiredFieldA11yName} /></Input>;
}
