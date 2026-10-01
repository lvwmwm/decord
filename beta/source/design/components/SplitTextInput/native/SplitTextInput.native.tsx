// Module ID: 6385
// Function ID: 6386
// Name: SplitTextInput
// Dependencies: [109, 19, 21, 4549, 6025, 6386, 6026, 2]

// Module 6385 (SplitTextInput)
import Fragment from "Fragment" /* 21 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4549 */;
import Input2 from "Input" /* 6025 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6026 */;
import SplitTextField2 from "SplitTextField" /* 6386 */;
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
  const SplitTextField = SplitTextField2.SplitTextField;
  const merged1 = Object.assign(required);
  const merged2 = Object.assign(tmp2);
  const obj4 = getRequiredFieldA11yName;
  let requiredFieldA11yName = obj4.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><SplitTextField ref={arg1} accessibilityLabel={requiredFieldA11yName} /></Input>;
});
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
