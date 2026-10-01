// Module ID: 5999
// Function ID: 6000
// Name: TableRowGroup
// Dependencies: [19, 17, 21, 4836, 576, 4832, 4531, 5914, 5918, 2]
// Exports: TableRowGroup

// Module 5999 (TableRowGroup)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRowDivider from "TableRowDivider" /* 5914 */;
import react2 from "react" /* 5918 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
class TableRowGroupTitle {
  constructor(arg0) {
    let items;
    let lineClamp;
    let style;
    let title;
    ({ title, style, lineClamp } = arg0);
    const obj = { accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: items, lineClamp, children: title };
    items = [closure_8().title, style];
    closure_8();
    return hasOwnProperty(Text_Text.Text, obj);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexShrink: 0 }, content: obj2, title: { marginBottom: 8 }, description: { marginBottom: 8 }, hasTrailingText: obj3, helperText: { marginTop: 8 } };
obj2 = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, overflow: "hidden", flexGrow: 1, flexShrink: 0, padding: 0 };
createStyles = createStyles.createStyles;
obj3 = { borderBottomLeftRadius: nativeDefault.radii.none, borderBottomRightRadius: nativeDefault.radii.none };
const metroImportAll = createStyles(obj);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

export { TableRowGroupTitle };
export const TableRowGroup = function TableRowGroup(children) {
  let adjustSpacingForIcon;
  let description;
  let hasTrailingText;
  let helperText;
  let items;
  let title;
  ({ title, description, helperText, hasIcons: require, hasTrailingText } = children);
  children = children.children;
  if (hasTrailingText === undefined) {
    hasTrailingText = false;
  }
  let str = children.accessibilityRole;
  if (str === undefined) {
    str = "none";
  }
  const accessibilityLabel = children.accessibilityLabel;
  let tmp = closure_8();
  let tmp2 = require;
  let tmp3 = dependencyMap;
  let obj = useToken;
  importDefault = false;
  const Children = react.Children;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(children, (arg0) => {
    let items;
    let tmp = null;
    if (null != arg0) {
      let tmp3;
      const tmp2 = c1;
      if (tmp2) {
        const obj = { children: items };
        const obj2 = { adjustSpacingForIcon: require };
        items = [hasOwnProperty(TableRowDivider.TableRowDivider, obj2), arg0];
        tmp3 = metroImportDefault(metroRequire, obj);
      } else {
        c1 = true;
        tmp3 = arg0;
      }
      tmp = tmp3;
    }
    return tmp;
  });
  let obj2 = { style: tmp.container, children: items };
  let tmp6Result = null != title;
  const Provider = react2.TableRowGroupContext.Provider;
  const tmp7 = closure_7;
  if (tmp6Result) {
    const obj3 = { title };
    tmp6Result = tmp6(TableRowGroupTitle, obj3);
  }
  items = [tmp6Result, , , ];
  let tmp6Result3 = null != description;
  if (tmp6Result3) {
    const obj4 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.description, children: description };
    tmp6Result3 = tmp6(Text_Text.Text, obj4);
  }
  items[1] = tmp6Result3;
  const items1 = [tmp.content, ];
  let hasTrailingText1 = null;
  if (hasTrailingText) {
    hasTrailingText1 = tmp.hasTrailingText;
  }
  items1[1] = hasTrailingText1;
  items[2] = closure_5(View, { style: items1, accessibilityRole: str, accessibilityLabel, children: mapped });
  let tmp6Result4 = null != helperText;
  if (tmp6Result4) {
    const obj5 = { variant: token, color: "text-muted", style: tmp.helperText, children: helperText };
    tmp6Result4 = tmp6(Text_Text.Text, obj5);
  }
  items[3] = tmp6Result4;
  const obj6 = { value: true, children: tmp7(View, obj2) };
  return closure_5(Provider, obj6);
};
