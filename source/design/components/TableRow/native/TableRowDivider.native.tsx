// Module ID: 5159
// Function ID: 44565
// Name: TableRowDivider
// Dependencies: [31, 27, 5160, 33, 4165, 689, 5008, 1324, 3869, 2]
// Exports: TableRowDivider

// Module 5159 (TableRowDivider)
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
  let prop;
  if (!arg1) {
    prop = importDefault(689).colors.TABLEROW_BACKGROUND_DEFAULT;
  }
  obj.backgroundColor = prop;
  obj.height = tmp;
  obj.paddingStart = num;
  obj.marginTop = -tmp;
  obj.container = obj;
  obj = { height: tmp };
  if (arg1) {
    let DIVIDER_BACKGROUND = importDefault(689).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = require(5008) /* result */.DIVIDER_BACKGROUND;
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
  let obj = require(3869) /* map */;
  const tmp2 = callback(flag, importDefault(1324)("TableRowDivider"), obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp2.container, children: <View {...obj} /> };
  obj = { style: tmp2.divider };
  return <View style={tmp2.divider} />;
};
