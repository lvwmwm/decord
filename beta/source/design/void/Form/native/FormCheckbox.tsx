// Module ID: 6567
// Function ID: 6568
// Name: FormCheckbox
// Dependencies: [19, 21, 4836, 1177, 2]
// Exports: default

// Module 6567 (FormCheckbox)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  selected = selected.selected;
  return jsx(native.Checkbox, { style: closure_3().checkbox, selected });
};
