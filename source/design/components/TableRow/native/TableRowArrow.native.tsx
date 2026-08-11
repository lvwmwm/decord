// Module ID: 5381
// Function ID: 5382
// Name: TableRowArrow
// Dependencies: [19, 21, 4303, 712, 1367, 4716, 5382, 5383, 2]
// Exports: TableRowArrow

// Module 5381 (TableRowArrow)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { icon: null, iconColor: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: require("Themes").modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: require("Themes").modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("createCacheKey").fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp4 = createCacheKey();
  const obj = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  const tmp = importDefault;
  const tmp3 = importDefault(1367)("TableRowArrow");
  const tmp5 = jsx;
  obj[2] = tmp(tmp3 ? 5382 : 5383);
  obj[3] = require(4716) /* IconSizes */.IconSizes.CUSTOM;
  return tmp5(importDefault(4716), obj);
};
