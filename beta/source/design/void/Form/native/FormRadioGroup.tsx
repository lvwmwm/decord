// Module ID: 8069
// Function ID: 8070
// Name: FormRadioGroup
// Dependencies: [19, 17, 21, 5998, 5997, 8062, 2]
// Exports: default

// Module 8069 (FormRadioGroup)
import react_native from "react-native" /* 17 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import FormSectionDefault from "FormSection" /* 8062 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp2;
const TableRadioGroup = tmp2(5997);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default function FormRadioGroup(arg0) {
  let accessibilityLabel;
  let children;
  let hasIcons;
  let hint;
  let icon;
  let items;
  let obj4;
  let title;
  let tmp11Result;
  let value;
  ({ title, children, hint } = arg0);
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, hasIcons: 0, accessibilityLabel: 0, children: 0, value: 0, hint: 0, icon: 0 }));
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: { marginBottom: 24, marginHorizontal: 12 }, children: items };
    const obj3 = { children: hasOwnProperty(TableRadioGroup.TableRadioGroup, obj4) };
    obj4 = { defaultValue: value, hasIcons, title, accessibilityLabel, children };
    items = [hasOwnProperty(View, obj3), ];
    let tmp13Result = null;
    const tmp11 = metroRequire;
    const tmp13 = hasOwnProperty;
    if (null != hint) {
      const obj5 = { style: { marginTop: 8 }, children: hint };
      tmp13Result = tmp13(tmp12, obj5);
    }
    items[1] = tmp13Result;
    tmp11Result = tmp11(tmp12, obj2);
  } else {
    const obj = { title, accessibilityRole: "radiogroup", accessibilityLabel: title, hint, icon, children };
    const tmp6 = FormSectionDefault;
    const merged1 = Object.assign(merged);
    tmp11Result = hasOwnProperty(tmp6, obj);
  }
  return tmp11Result;
};
