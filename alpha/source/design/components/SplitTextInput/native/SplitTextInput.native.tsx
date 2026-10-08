// Module ID: 6639
// Function ID: 6640
// Name: SplitTextInput
// Dependencies: [109, 19, 21, 558, 576, 4793, 6284, 6640, 6285, 2]

// Module 6639 (SplitTextInput)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4793 */;
import Input2 from "Input" /* 6284 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6285 */;
import SplitTextField2 from "SplitTextField" /* 6640 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
let closure_3 = ["labelId", "accessibilityLabel"];
let closure_4 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SplitTextInput(ref) {
  let accessibilityLabel;
  let labelId;
  const obj = react2;
  const cResult = obj.c(11);
  const tmp2 = _objectWithoutProperties(ref, closure_2);
  const required = tmp2.required;
  const obj2 = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj2.useFieldLabelA11yNative(tmp2);
  ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
  const tmp4 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  const Input = Input2.Input;
  const SplitTextField = SplitTextField2.SplitTextField;
  const obj3 = getRequiredFieldA11yName;
  let requiredFieldA11yName = obj3.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  if (cResult[0] === SplitTextField) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp2) {
        if (cResult[3] === ref.ref) {
          let tmp6;
          if (cResult[4] === requiredFieldA11yName) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === Input) {
            if (cResult[7] === labelId) {
              if (cResult[8] === tmp2) {
                let tmp10;
                if (cResult[9] === tmp6) {
                  tmp10 = cResult[10];
                }
                return tmp10;
              }
            }
          }
          const merged = Object.assign(tmp2);
          const tmp15 = <Input labelId={labelId}>{tmp6}</Input>;
          cResult[6] = Input;
          cResult[7] = labelId;
          cResult[8] = tmp2;
          cResult[9] = tmp6;
          cResult[10] = tmp15;
          tmp10 = tmp15;
        }
      }
    }
  }
  const merged1 = Object.assign(tmp2);
  const merged2 = Object.assign(tmp4);
  const tmp9 = <SplitTextField ref={arg0.ref} accessibilityLabel={requiredFieldA11yName} />;
  cResult[0] = SplitTextField;
  cResult[1] = tmp4;
  cResult[2] = tmp2;
  cResult[3] = ref.ref;
  cResult[4] = requiredFieldA11yName;
  cResult[5] = tmp9;
  tmp6 = tmp9;
}) : (function SplitTextInput(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const required = merged.required;
  const obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(merged);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp3 = _objectWithoutProperties(fieldLabelA11yNative, closure_4);
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
});
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = tmp3;
