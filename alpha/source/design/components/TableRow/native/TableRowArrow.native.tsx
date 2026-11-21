// Module ID: 7058
// Function ID: 7059
// Name: TableRowArrow
// Dependencies: [19, 21, 4913, 575, 5513, 7059, 2]
// Exports: TableRowArrow

// Module 7058 (TableRowArrow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Icon from "Icon" /* 5513 */;
import AssetRegistryDefault from "AssetRegistry" /* 7059 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const IconDefault = Icon;

let size;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { icon: size, iconColor: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
let closure_4 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export function TableRowArrow() {
  const tmp = closure_4();
  IconDefault;
  return <tmp2 style={tmp.icon} color={tmp.iconColor.color} source={AssetRegistryDefault} size={Icon.IconSizes.CUSTOM} />;
}
