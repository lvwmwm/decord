// Module ID: 6024
// Function ID: 6025
// Name: TextInput/TextInput
// Dependencies: [109, 19, 21, 4549, 6025, 6031, 6026, 2]

// Module 6024 (TextInput/TextInput)
import Fragment from "Fragment" /* 21 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4549 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6026 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let status;

let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((status, ref) => {
  let errorMessage;
  let required;
  status = status.status;
  ({ errorMessage, required } = status);
  const obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(status);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp4 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  const Input = tmp(6025).Input;
  const merged = Object.assign(status);
  const TextField = tmp(6031).TextField;
  const merged1 = Object.assign(status);
  const merged2 = Object.assign(tmp4);
  const tmpResult = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmpResult.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><TextField ref={arg1} status={status} accessibilityLabel={requiredFieldA11yName} /></Input>;
});
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = forwardRefResult;
