// Module ID: 6978
// Function ID: 6979
// Name: TableRowArrow
// Dependencies: [19, 21, 5009, 575, 5631, 6979, 2]
// Exports: TableRowArrow

// Module 6978 (TableRowArrow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Icon from "Icon" /* 5631 */;
import AssetRegistryDefault from "AssetRegistry" /* 6979 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
