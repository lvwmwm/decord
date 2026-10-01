// Module ID: 5914
// Function ID: 5915
// Name: TableRowDivider
// Dependencies: [19, 17, 5915, 21, 4836, 576, 4531, 2]
// Exports: TableRowDivider

// Module 5914 (TableRowDivider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import TableRowConstants from "TableRowConstants" /* 5915 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const TABLE_DIVIDER_WIDTH = TableRowConstants.TABLE_DIVIDER_WIDTH;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let num;
  const obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: num, marginTop: -TABLE_DIVIDER_WIDTH };
  num = 12;
  const tmp2 = arg0;
  if (tmp2) {
    num = arg1;
  }
  const obj2 = { container: obj, divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  ({ height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj2;
});
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  const obj = useToken;
  const tmp = closure_6(flag, obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  return <View style={tmp.container}>{null}</View>;
};
