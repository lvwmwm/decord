// Module ID: 7447
// Function ID: 7448
// Name: FormCheckboxRow
// Dependencies: [19, 21, 5143, 5210, 7448, 7457, 2]
// Exports: default

// Module 7447 (FormCheckboxRow)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 5210 */;
import FormRowDefault from "FormRow" /* 7448 */;
import FormCheckboxDefault from "FormCheckbox" /* 7457 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  selected = selected.selected;
  const merged = Object.assign(selected, Object.assign({ selected: 0 }));
  const tmp2 = closure_4();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  FormRowDefault;
  const merged1 = Object.assign(merged);
  return <tmp4 accessibilityRole={accessibilityRole} accessibilityState={accessibilityState} trailing={jsx(FormCheckboxDefault, { selected })} trailingWrapperStyle={tmp2.checkboxWrapperStyle} />;
};
