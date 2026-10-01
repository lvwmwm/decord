// Module ID: 6506
// Function ID: 6507
// Name: TextArea
// Dependencies: [109, 19, 21, 4549, 6025, 6507, 6026, 2]

// Module 6506 (TextArea)
import Fragment from "Fragment" /* 21 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4549 */;
import Input2 from "Input" /* 6025 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6026 */;
import TextAreaField2 from "TextAreaField" /* 6507 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let required;

let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((required, ref) => {
  required = required.required;
  const obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(required);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp2 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  const Input = Input2.Input;
  const merged = Object.assign(required);
  const TextAreaField = TextAreaField2.TextAreaField;
  const merged1 = Object.assign(required);
  const merged2 = Object.assign(tmp2);
  const obj4 = getRequiredFieldA11yName;
  let requiredFieldA11yName = obj4.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><TextAreaField ref={arg1} accessibilityLabel={requiredFieldA11yName} /></Input>;
});
const result = size.fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
