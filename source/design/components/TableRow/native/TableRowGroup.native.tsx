// Module ID: 5501
// Function ID: 46916
// Name: TableRowGroupTitle
// Dependencies: [31, 27, 33, 4130, 689, 1324, 4126, 3834, 5125, 5166, 2]
// Exports: TableRowGroup

// Module 5501 (TableRowGroupTitle)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class TableRowGroupTitle {
  constructor(arg0) {
    ({ title, style, lineClamp } = global);
    tmp = require("useIsMobileVisualRefreshExperimentEnabled")("TableRowGroup");
    tmp2 = c8();
    tmp3 = jsx;
    obj = { accessibilityRole: "header" };
    str = "text-sm/semibold";
    if (tmp) {
      str = "text-md/medium";
    }
    obj.variant = str;
    str2 = "text-default";
    if (tmp) {
      str2 = "text-subtle";
    }
    obj.color = str2;
    items = [, ];
    items[0] = tmp2.title;
    items[1] = style;
    obj.style = items;
    obj.lineClamp = lineClamp;
    obj.children = title;
    return tmp3(require("Text").Text, obj);
  }
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexShrink: 0 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, overflow: "hidden", flexGrow: 1, flexShrink: 0, padding: 0 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { marginBottom: 8 };
_createForOfIteratorHelperLoose.hasTrailingText = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.none };
_createForOfIteratorHelperLoose.helperText = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.none };
const result = require("jsxProd").fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

export { TableRowGroupTitle };
export const TableRowGroup = function TableRowGroup(accessibilityRole) {
  let description;
  let hasTrailingText;
  let helperText;
  let require;
  let title;
  ({ title, description, helperText, hasIcons: require, hasTrailingText } = accessibilityRole);
  if (hasTrailingText === undefined) {
    hasTrailingText = false;
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "none";
  }
  let importDefault;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3834) /* map */;
  importDefault = false;
  const Children = React.Children;
  const token = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(accessibilityRole.children, (arg0) => {
    if (null == arg0) {
      return null;
    } else if (c1) {
      let obj = {};
      obj = { adjustSpacingForIcon: closure_0 };
      const items = [outer1_5(outer1_0(outer1_2[8]).TableRowDivider, obj), arg0];
      obj.children = items;
      let tmp2 = outer1_7(outer1_6, obj);
    } else {
      c1 = true;
      tmp2 = arg0;
    }
  });
  obj = { style: tmp.container };
  let tmp7 = null != title;
  if (tmp7) {
    const obj1 = { title };
    tmp7 = callback(TableRowGroupTitle, obj1);
  }
  let items = [tmp7, , , ];
  let tmp10 = null != description;
  if (tmp10) {
    const obj2 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.description, children: description };
    tmp10 = callback(require(4126) /* Text */.Text, obj2);
  }
  items[1] = tmp10;
  const obj3 = {};
  const items1 = [tmp.content, ];
  hasTrailingText = null;
  if (hasTrailingText) {
    hasTrailingText = tmp.hasTrailingText;
  }
  items1[1] = hasTrailingText;
  obj3.style = items1;
  obj3.accessibilityRole = str;
  obj3.accessibilityLabel = accessibilityRole.accessibilityLabel;
  obj3.children = mapped;
  items[2] = callback(View, obj3);
  let tmp17 = null != helperText;
  if (tmp17) {
    const obj4 = { variant: token, color: "text-muted", style: tmp.helperText, children: helperText };
    tmp17 = callback(require(4126) /* Text */.Text, obj4);
  }
  items[3] = tmp17;
  obj.children = items;
  obj.children = closure_7(View, obj);
  return callback(require(5166) /* context */.TableRowGroupContext.Provider, obj);
};
