// Module ID: 7382
// Function ID: 7383
// Name: FormCheckboxRow
// Dependencies: [19, 21, 4794, 4856, 7383, 7392, 2]
// Exports: default

// Module 7382 (FormCheckboxRow)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 4856 */;
import FormRowDefault from "FormRow" /* 7383 */;
import FormCheckboxDefault from "FormCheckbox" /* 7392 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
