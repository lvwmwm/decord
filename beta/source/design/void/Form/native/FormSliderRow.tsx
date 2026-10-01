// Module ID: 8070
// Function ID: 8071
// Name: FormSliderRow
// Dependencies: [19, 17, 21, 4836, 5998, 5919, 4832, 7726, 6558, 2]
// Exports: default

// Module 8070 (FormSliderRow)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import FormRowDefault from "FormRow" /* 6558 */;
import _modDef7726 from "module_7726" /* 7726 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  let items;
  let items1;
  let items2;
  let label;
  let tmp6Result;
  let trailing;
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, trailing: 0 }));
  const context = react.useContext(RedesignCompat.RedesignCompatContext);
  const tmp5 = closure_8();
  if (context) {
    const obj2 = { children: items1 };
    const obj3 = { style: tmp5.labels, children: items };
    const Card = tmp2(5919).Card;
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
    items = [hasOwnProperty(Text_Text.Text, obj4), trailing];
    items1 = [metroRequire(View, obj3), ];
    const obj5 = { style: tmp5.slider };
    const tmp18 = _modDef7726;
    const merged1 = Object.assign(merged);
    items1[1] = hasOwnProperty(tmp18, obj5);
    tmp6Result = tmp6(Card, obj2);
  } else {
    const obj = { children: items2 };
    const obj6 = { label, trailing };
    items2 = [hasOwnProperty(FormRowDefault, obj6), ];
    const obj7 = {};
    const tmp10 = _modDef7726;
    const merged2 = Object.assign(merged);
    items2[1] = hasOwnProperty(tmp10, obj7);
    tmp6Result = tmp6(metroImportDefault, obj);
  }
  return tmp6Result;
};
