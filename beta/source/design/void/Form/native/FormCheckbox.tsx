// Module ID: 7512
// Function ID: 7513
// Name: FormCheckbox
// Dependencies: [19, 21, 4913, 1186, 2]
// Exports: default

// Module 7512 (FormCheckbox)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1186 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  selected = selected.selected;
  return jsx(native.Checkbox, { style: closure_3().checkbox, selected });
};
