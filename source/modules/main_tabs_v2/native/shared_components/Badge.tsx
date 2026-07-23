// Module ID: 9128
// Function ID: 71475
// Name: DEFAULT_BADGE_SIZE
// Dependencies: [31, 27, 33, 4130, 689, 2]

// Module 9128 (DEFAULT_BADGE_SIZE)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.badge = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.badgeClassic = _createForOfIteratorHelperLoose;
obj.mask = { alignItems: "center", justifyContent: "center" };
let closure_2 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function Badge(size) {
  let badgeStyle;
  let style;
  let num = size.size;
  if (num === undefined) {
    num = 12;
  }
  let num2 = size.maskSize;
  if (num2 === undefined) {
    num2 = 4;
  }
  let flag = size.classic;
  if (flag === undefined) {
    flag = false;
  }
  const maskColor = size.maskColor;
  ({ style, badgeStyle } = size);
  const tmp = callback();
  const sum = num + 2 * num2;
  let tmp3;
  if (null != maskColor) {
    let obj = { backgroundColor: maskColor, height: sum, width: sum, borderRadius: sum / 2 };
    tmp3 = obj;
  }
  obj = { style: items, children: tmp4(tmp5, { style: items1 }) };
  items = [tmp.mask, tmp3, style];
  items1 = [flag ? tmp.badgeClassic : tmp.badge, , ];
  obj = { height: num, width: num, borderRadius: num / 2 };
  items1[1] = obj;
  items1[2] = badgeStyle;
  return <View height={num} width={num} borderRadius={num / 2} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default memoResult;
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;
