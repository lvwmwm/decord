// Module ID: 7923
// Function ID: 7924
// Name: FormRadioRow
// Dependencies: [19, 21, 5372, 4019, 7924, 5366, 5389, 2]
// Exports: default

// Module 7923 (FormRadioRow)
import noop from "noop";
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
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const context = React.useContext(require(5372) /* context */.RedesignCompatContext);
  let obj = require(4019) /* useCheckboxA11yNative */;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  if (context) {
    obj = { icon: null, value: null, legacyCompat_selected: null, legacyCompat_onPress: null };
    obj[0] = leading;
    obj[1] = value;
    obj[2] = selected;
    obj[3] = onPress;
    const merged1 = Object.assign(merged);
    let tmp8Result = tmp8(require(7924) /* TableRadioRow */.TableRadioRow, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj.style = style;
    obj.onPress = onPress;
    obj.accessibilityRole = tmp6;
    obj.accessibilityState = tmp7;
    tmp8Result = null;
    if ("right" === align) {
      const obj1 = { selected: null };
      obj1[0] = selected;
      tmp8Result = tmp8(tmp9(5389), obj1);
    }
    obj.trailing = tmp8Result;
    let tmp8Result1 = leading;
    if ("left" === align) {
      const obj2 = { selected: null };
      obj2[0] = selected;
      tmp8Result1 = tmp8(tmp9(5389), obj2);
    }
    obj.leading = tmp8Result1;
    tmp8Result = tmp8(importDefault(5366), obj);
    const tmp10 = importDefault(5366);
  }
  return tmp8Result;
};
