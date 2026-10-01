// Module ID: 6753
// Function ID: 6754
// Name: Form/FormCheckbox
// Dependencies: [19, 21, 4845, 1177, 2]
// Exports: default

// Module 6753 (Form/FormCheckbox)
import native from "native" /* 1177 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = closure_3();
  return jsx(native.Checkbox, { style: closure_3().checkbox, selected: selected.selected });
};
