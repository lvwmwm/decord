// Module ID: 7515
// Function ID: 60205
// Name: FormTextColors
// Dependencies: [31, 33, 4130, 4973, 689, 1273, 2]

// Module 7515 (FormTextColors)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { color: require(4973) /* result */.DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
  obj.primary = obj;
  obj = {};
  let num = 16;
  if ("small" === arg0) {
    num = 12;
  }
  obj.fontSize = num;
  let num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  obj.lineHeight = num2;
  obj.text = obj;
  return obj;
});
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
obj.BRAND = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
obj.RED = _createForOfIteratorHelperLoose;
obj.GREEN = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
const obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
obj.YELLOW = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300 };
const obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300 };
obj.LINK = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
const obj4 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
obj.WHITE = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
const obj5 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
  let str = size.size;
  if (str === undefined) {
    str = "medium";
  }
  let primary = size.color;
  const tmp = callback(str);
  const obj = { ref };
  const items = [tmp.text, , ];
  if (null == primary) {
    primary = tmp.primary;
  }
  items[1] = primary;
  items[2] = size.style;
  obj.style = items;
  obj.children = size.children;
  return jsx(require(1273) /* Button */.LegacyText, { ref });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default forwardRefResult;
export const FormTextColors = obj;
