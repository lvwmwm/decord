// Module ID: 7208
// Function ID: 7209
// Name: TextInput/TextInput
// Dependencies: [109, 19, 21, 5210, 7209, 7215, 7210, 2]
// Exports: TextInput

// Module 7208 (TextInput/TextInput)
import Fragment from "Fragment" /* 21 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 5210 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 7210 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export function TextInput(ref) {
  let errorMessage;
  let required;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let status = merged.status;
  ({ errorMessage, required } = merged);
  const obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(merged);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp5 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  const Input = tmp2(7209).Input;
  const merged1 = Object.assign(merged);
  const TextField = tmp2(7215).TextField;
  const merged2 = Object.assign(merged);
  const merged3 = Object.assign(tmp5);
  const tmp2Result = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmp2Result.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><TextField ref={ref} status={status} accessibilityLabel={requiredFieldA11yName} /></Input>;
}
