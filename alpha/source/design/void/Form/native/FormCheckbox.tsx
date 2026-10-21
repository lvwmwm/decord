// Module ID: 7213
// Function ID: 7214
// Name: Form/FormCheckbox
// Dependencies: [19, 21, 4966, 558, 576, 1202, 2]

// Module 7213 (Form/FormCheckbox)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const native = tmp(1202);
const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormCheckbox(selected) {
  const obj = react2;
  const cResult = obj.c(3);
  selected = selected.selected;
  const tmp4 = closure_3();
  if (cResult[0] === selected) {
    let tmp5;
    if (cResult[1] === tmp4.checkbox) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(native.Checkbox, { style: tmp4.checkbox, selected });
  cResult[0] = selected;
  cResult[1] = tmp4.checkbox;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FormCheckbox(selected) {
  selected = selected.selected;
  return jsx(native.Checkbox, { style: closure_3().checkbox, selected });
});
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default tmp3;
