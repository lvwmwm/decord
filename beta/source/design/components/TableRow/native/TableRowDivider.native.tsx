// Module ID: 7055
// Function ID: 7056
// Name: TableRowDivider
// Dependencies: [19, 17, 7056, 21, 4913, 5517, 575, 5477, 2]
// Exports: TableRowDivider

// Module 7055 (TableRowDivider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5477 */;
import ButtonConstants from "ButtonConstants" /* 5517 */;
import TableRowConstants from "TableRowConstants" /* 7056 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const TABLE_DIVIDER_WIDTH = TableRowConstants.TABLE_DIVIDER_WIDTH;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let num2;
  const obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: num + num2, marginTop: -TABLE_DIVIDER_WIDTH };
  num = 12;
  const tmp2 = arg0;
  if (tmp2) {
    num = arg2;
  }
  num2 = 0;
  if (arg1) {
    num2 = ButtonConstants.MEDIUM_BUTTON_HEIGHT - 8;
  }
  const obj2 = { container: obj, divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  ({ height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj2;
});
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = adjustSpacingForIcon.adjustSpacingForDragHandle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const obj = useToken;
  const tmp = closure_6(flag, flag2, obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  return <View style={tmp.container}>{null}</View>;
}
