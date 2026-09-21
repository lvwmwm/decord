// Module ID: 8886
// Function ID: 8887
// Name: FormRadioRow
// Dependencies: [19, 21, 5903, 4474, 5905, 7382, 7388, 2]
// Exports: default

// Module 8886 (FormRadioRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4474 */;
import RedesignCompat from "RedesignCompat" /* 5903 */;
import TableRadioRow from "TableRadioRow" /* 5905 */;
import FormRowDefault from "FormRow" /* 7382 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }));
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  if (context) {
    const obj2 = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp8Result = tmp8(TableRadioRow.TableRadioRow, obj2);
  } else {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.style = style;
    obj3.onPress = onPress;
    obj3.accessibilityRole = tmp6;
    obj3.accessibilityState = tmp7;
    let tmp8Result3 = null;
    if ("right" === align) {
      const obj4 = { selected };
      tmp8Result3 = tmp8(tmp9(7388), obj4);
    }
    obj3.trailing = tmp8Result3;
    let tmp8Result4 = leading;
    if ("left" === align) {
      const obj5 = { selected };
      tmp8Result4 = tmp8(tmp9(7388), obj5);
    }
    obj3.leading = tmp8Result4;
    tmp8Result = tmp8(FormRowDefault, obj3);
  }
  return tmp8Result;
};
