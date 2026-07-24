// Module ID: 5185
// Function ID: 45025
// Name: FormIcon
// Dependencies: [31, 33, 4130, 1273, 2]
// Exports: default

// Module 5185 (FormIcon)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ icon: { opacity: 0.6 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  let style;
  let themedColor;
  ({ style, themedColor } = color);
  let obj = { style: 0, color: 0, themedColor: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  const tmp3 = callback();
  if (null != themedColor) {
    obj = {};
    const items = [tmp3.icon, style];
    obj.style = items;
    obj.themedColor = themedColor;
    const merged1 = Object.assign(merged);
    let tmp10 = jsx(require(1273) /* Button */.ThemedIcon, {});
  } else {
    obj = {};
    const items1 = [tmp3.icon, style];
    obj.style = items1;
    obj.color = color.color;
    const merged2 = Object.assign(merged);
    tmp10 = jsx(require(1273) /* Button */.Icon, {});
  }
  return tmp10;
};
