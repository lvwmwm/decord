// Module ID: 7630
// Function ID: 60864
// Name: FormRadioRow
// Dependencies: [31, 33, 5197, 3883, 7631, 5191, 5214, 2]
// Exports: default

// Module 7630 (FormRadioRow)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("context").fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  let align;
  let leading;
  let onPress;
  let selected;
  let style;
  let value;
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  let obj = { selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 };
  ({ value, style } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const context = React.useContext(require(5197) /* context */.RedesignCompatContext);
  let obj1 = require(3883) /* useCheckboxA11yNative */;
  const radioA11yNative = obj1.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp7Result = tmp7(require(7631) /* TableRadioRow */.TableRadioRow, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj["style"] = style;
    obj["onPress"] = onPress;
    obj["accessibilityRole"] = tmp5;
    obj["accessibilityState"] = tmp6;
    let tmp14 = null;
    if ("right" === align) {
      obj1 = { selected };
      tmp14 = jsx(importDefault(5214), { selected });
    }
    obj["trailing"] = tmp14;
    let tmp18 = leading;
    if ("left" === align) {
      const obj2 = { selected };
      tmp18 = jsx(importDefault(5214), { selected });
    }
    obj["leading"] = tmp18;
    tmp7Result = tmp7(importDefault(5191), obj);
    const tmp10 = importDefault(5191);
  }
  return tmp7Result;
};
