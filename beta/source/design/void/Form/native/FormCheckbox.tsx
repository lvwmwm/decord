// Module ID: 7384
// Function ID: 7385
// Name: Form/FormCheckbox
// Dependencies: [19, 21, 4758, 558, 568, 1181, 2]

// Module 7384 (Form/FormCheckbox)
import c from "c" /* 568 */;
import native from "native" /* 1181 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  const cResult = c.c(3);
  selected = selected.selected;
  const tmp4 = closure_3();
  if (cResult[0] === selected) {
    if (cResult[1] === tmp4.checkbox) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(native.Checkbox, { style: tmp4.checkbox, selected });
  cResult[0] = selected;
  cResult[1] = tmp4.checkbox;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((selected) => {
  const tmp = closure_3();
  return jsx(native.Checkbox, { style: closure_3().checkbox, selected: selected.selected });
});
