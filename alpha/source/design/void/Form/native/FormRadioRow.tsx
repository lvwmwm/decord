// Module ID: 8281
// Function ID: 8282
// Name: FormRadioRow
// Dependencies: [19, 21, 7150, 5230, 7152, 7393, 7399, 2]
// Exports: default

// Module 8281 (FormRadioRow)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 5230 */;
import RedesignCompat from "RedesignCompat" /* 7150 */;
import FormRowDefault from "FormRow" /* 7393 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const TableRadioRow2 = tmp2(7152);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  let align;
  let leading;
  let onPress;
  let selected;
  let style;
  let tmp8Result;
  let tmp8Result3;
  let tmp8Result4;
  let value;
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }));
  const context = react.useContext(RedesignCompat.RedesignCompatContext);
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  if (context) {
    const obj2 = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const TableRadioRow = TableRadioRow2.TableRadioRow;
    const merged1 = Object.assign(merged);
    tmp8Result = tmp8(TableRadioRow, obj2);
  } else {
    const obj3 = { style, onPress, accessibilityRole: tmp6, accessibilityState: tmp7, trailing: tmp8Result3, leading: tmp8Result4 };
    const tmp10 = FormRowDefault;
    const merged2 = Object.assign(merged);
    tmp8Result3 = null;
    if ("right" === align) {
      const obj4 = { selected };
      tmp8Result3 = tmp8(tmp9(7399), obj4);
    }
    tmp8Result4 = leading;
    if ("left" === align) {
      const obj5 = { selected };
      tmp8Result4 = tmp8(tmp9(7399), obj5);
    }
    tmp8Result = tmp8(tmp10, obj3);
  }
  return tmp8Result;
};
