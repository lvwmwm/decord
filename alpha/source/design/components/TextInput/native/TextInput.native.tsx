// Module ID: 6285
// Function ID: 6286
// Name: TextInput/TextInput
// Dependencies: [109, 19, 21, 558, 576, 4833, 6286, 6292, 6287, 2]

// Module 6285 (TextInput/TextInput)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4833 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6287 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
let closure_3 = ["labelId", "accessibilityLabel"];
let closure_4 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextInput(ref) {
  let accessibilityLabel;
  let errorMessage;
  let labelId;
  let required;
  let status;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = _objectWithoutProperties(ref, closure_2);
  ({ status, errorMessage, required } = tmp4);
  const obj2 = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj2.useFieldLabelA11yNative(tmp4);
  ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
  const tmp6 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  const Input = tmp(6286).Input;
  const TextField = tmp(6292).TextField;
  const tmpResult = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmpResult.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  if (cResult[0] === TextField) {
    if (cResult[1] === status) {
      if (cResult[2] === tmp6) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === ref.ref) {
            let tmp8;
            if (cResult[5] === requiredFieldA11yName) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === Input) {
              if (cResult[8] === labelId) {
                if (cResult[9] === tmp4) {
                  let tmp12;
                  if (cResult[10] === tmp8) {
                    tmp12 = cResult[11];
                  }
                  return tmp12;
                }
              }
            }
            const merged = Object.assign(tmp4);
            const tmp17 = <Input labelId={labelId}>{tmp8}</Input>;
            cResult[7] = Input;
            cResult[8] = labelId;
            cResult[9] = tmp4;
            cResult[10] = tmp8;
            cResult[11] = tmp17;
            tmp12 = tmp17;
          }
        }
      }
    }
  }
  const merged1 = Object.assign(tmp4);
  const merged2 = Object.assign(tmp6);
  const tmp11 = <TextField ref={arg0.ref} status={status} accessibilityLabel={requiredFieldA11yName} />;
  cResult[0] = TextField;
  cResult[1] = status;
  cResult[2] = tmp6;
  cResult[3] = tmp4;
  cResult[4] = ref.ref;
  cResult[5] = requiredFieldA11yName;
  cResult[6] = tmp11;
  tmp8 = tmp11;
}) : (function TextInput(ref) {
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
  const tmp5 = _objectWithoutProperties(fieldLabelA11yNative, closure_4);
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  const Input = tmp2(6286).Input;
  const merged1 = Object.assign(merged);
  const TextField = tmp2(6292).TextField;
  const merged2 = Object.assign(merged);
  const merged3 = Object.assign(tmp5);
  const tmp2Result = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmp2Result.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><TextField ref={ref} status={status} accessibilityLabel={requiredFieldA11yName} /></Input>;
});
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = tmp3;
