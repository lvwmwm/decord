// Module ID: 5434
// Function ID: 46533
// Name: TableRowArrow
// Dependencies: []
// Exports: TableRowArrow

// Module 5434 (TableRowArrow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { width: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
obj.icon = obj;
obj.iconColor = { color: importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp3 = callback();
  const obj = { style: tmp3.icon, color: tmp3.iconColor.color };
  const tmp = importDefault;
  const tmp2 = importDefault(dependencyMap[4])("TableRowArrow");
  const tmp4 = jsx;
  if (tmp2) {
    let tmp7 = tmp6[6];
  } else {
    tmp7 = tmp6[7];
  }
  obj.source = tmp(tmp7);
  obj.size = arg1(dependencyMap[5]).IconSizes.CUSTOM;
  return tmp4(importDefault(dependencyMap[5]), obj);
};
