// Module ID: 16370
// Function ID: 16371
// Name: SplitTextInput
// Dependencies: [109, 19, 21, 5316, 7554, 16371, 7555, 2]
// Exports: SplitTextInput

// Module 16370 (SplitTextInput)
import Fragment from "Fragment" /* 21 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 5316 */;
import Input2 from "Input" /* 7554 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 7555 */;
import SplitTextField2 from "SplitTextField" /* 16371 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export function SplitTextInput(ref) {
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
  const SplitTextField = SplitTextField2.SplitTextField;
  const merged2 = Object.assign(merged);
  const merged3 = Object.assign(tmp3);
  const obj4 = getRequiredFieldA11yName;
  let requiredFieldA11yName = obj4.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><SplitTextField ref={ref} accessibilityLabel={requiredFieldA11yName} /></Input>;
}
