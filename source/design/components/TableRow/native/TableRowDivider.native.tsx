// Module ID: 5392
// Function ID: 45996
// Name: TableRowDivider
// Dependencies: []
// Exports: TableRowDivider

// Module 5392 (TableRowDivider)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const getTableDividerWidth = arg1(dependencyMap[2]).getTableDividerWidth;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles((arg0, arg1, arg2) => {
  const tmp = getTableDividerWidth(arg1);
  let num = 12;
  if (arg0) {
    num = arg2;
  }
  let obj = {};
  obj = {};
  let CARD_PRIMARY_BG;
  if (!arg1) {
    CARD_PRIMARY_BG = arg1(dependencyMap[5]).CARD_PRIMARY_BG;
  }
  obj.backgroundColor = CARD_PRIMARY_BG;
  obj.height = tmp;
  obj.paddingStart = num;
  obj.marginTop = -tmp;
  obj.container = obj;
  obj = { height: tmp };
  if (arg1) {
    let DIVIDER_BACKGROUND = importDefault(dependencyMap[6]).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = arg1(dependencyMap[7]).DIVIDER_BACKGROUND;
  }
  obj.backgroundColor = DIVIDER_BACKGROUND;
  obj.divider = obj;
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[9]);
  const tmp2 = callback(flag, importDefault(dependencyMap[8])("TableRowDivider"), obj.useToken(importDefault(dependencyMap[6]).modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp2.container, children: <View {...obj} /> };
  obj = { style: tmp2.divider };
  return <View {...obj} />;
};
