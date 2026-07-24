// Module ID: 5171
// Function ID: 45002
// Name: TableRowArrow
// Dependencies: [31, 33, 4130, 689, 1324, 4545, 5172, 5173, 2]
// Exports: TableRowArrow

// Module 5171 (TableRowArrow)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconColor = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp3 = _createForOfIteratorHelperLoose();
  const obj = { style: tmp3.icon, color: tmp3.iconColor.color };
  const tmp = importDefault;
  const tmp2 = importDefault(1324)("TableRowArrow");
  const tmp4 = jsx;
  if (tmp2) {
    let tmp7 = 5172;
  } else {
    tmp7 = 5173;
  }
  obj.source = tmp(tmp7);
  obj.size = require(4545) /* getIconSize */.IconSizes.CUSTOM;
  return tmp4(importDefault(4545), obj);
};
