// Module ID: 7517
// Function ID: 60215
// Name: FormRadioRow
// Dependencies: [31, 33, 5164, 3848, 7518, 5158, 5180, 2]
// Exports: default

// Module 7517 (FormRadioRow)
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
  const context = React.useContext(require(5164) /* context */.RedesignCompatContext);
  let obj1 = require(3848) /* useCheckboxA11yNative */;
  const radioA11yNative = obj1.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp7Result = tmp7(require(7518) /* TableRadioRow */.TableRadioRow, obj);
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
      tmp14 = jsx(importDefault(5180), { selected });
    }
    obj["trailing"] = tmp14;
    let tmp18 = leading;
    if ("left" === align) {
      const obj2 = { selected };
      tmp18 = jsx(importDefault(5180), { selected });
    }
    obj["leading"] = tmp18;
    tmp7Result = tmp7(importDefault(5158), obj);
    const tmp10 = importDefault(5158);
  }
  return tmp7Result;
};
