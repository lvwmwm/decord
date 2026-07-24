// Module ID: 5125
// Function ID: 44441
// Name: TableRowDivider
// Dependencies: [31, 27, 5126, 33, 4130, 5127, 689, 4973, 1324, 3834, 2]
// Exports: TableRowDivider

// Module 5125 (TableRowDivider)
import "result";
import { View } from "get ActivityIndicator";
import { getTableDividerWidth } from "TABLE_ROW_HEIGHT";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2) => {
  const tmp = getTableDividerWidth(arg1);
  let num = 12;
  if (arg0) {
    num = arg2;
  }
  let obj = {};
  obj = {};
  let CARD_PRIMARY_BG;
  if (!arg1) {
    CARD_PRIMARY_BG = require(5127) /* createCardBackgroundToken */.CARD_PRIMARY_BG;
  }
  obj.backgroundColor = CARD_PRIMARY_BG;
  obj.height = tmp;
  obj.paddingStart = num;
  obj.marginTop = -tmp;
  obj.container = obj;
  obj = { height: tmp };
  if (arg1) {
    let DIVIDER_BACKGROUND = importDefault(689).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = require(4973) /* result */.DIVIDER_BACKGROUND;
  }
  obj.backgroundColor = DIVIDER_BACKGROUND;
  obj.divider = obj;
  return obj;
});
const result = require("TABLE_ROW_HEIGHT").fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(3834) /* map */;
  const tmp2 = callback(flag, importDefault(1324)("TableRowDivider"), obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp2.container, children: <View {...obj} /> };
  obj = { style: tmp2.divider };
  return <View style={tmp2.divider} />;
};
