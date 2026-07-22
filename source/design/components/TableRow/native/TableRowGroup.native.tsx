// Module ID: 5500
// Function ID: 46896
// Name: TableRowGroupTitle
// Dependencies: []
// Exports: TableRowGroup

// Module 5500 (TableRowGroupTitle)
class TableRowGroupTitle {
  constructor(arg0) {
    ({ title, style, lineClamp } = global);
    tmp = importDefault(dependencyMap[5])("TableRowGroup");
    tmp2 = closure_8();
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
    return tmp3(arg1(dependencyMap[6]).Text, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { flexShrink: 0 } };
obj = { alignItems: "absolute", justifyContent: 5, position: "#000", height: 0.3, width: 0, borderRadius: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj.content = obj;
obj.title = { marginBottom: 8 };
obj.description = { marginBottom: 8 };
const tmp2 = arg1(dependencyMap[2]);
obj.hasTrailingText = { borderBottomLeftRadius: importDefault(dependencyMap[4]).radii.none, borderBottomRightRadius: importDefault(dependencyMap[4]).radii.none };
obj.helperText = { marginTop: 8 };
let closure_8 = obj.createStyles(obj);
const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[4]).radii.none, borderBottomRightRadius: importDefault(dependencyMap[4]).radii.none };
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

export { TableRowGroupTitle };
export const TableRowGroup = function TableRowGroup(accessibilityRole) {
  let description;
  let hasTrailingText;
  let helperText;
  let title;
  ({ title, description, helperText, hasIcons: closure_0, hasTrailingText } = accessibilityRole);
  if (hasTrailingText === undefined) {
    hasTrailingText = false;
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "none";
  }
  let importDefault;
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  importDefault = false;
  const Children = React.Children;
  const token = obj.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(accessibilityRole.children, (arg0) => {
    if (null == arg0) {
      return null;
    } else if (closure_1) {
      let obj = {};
      obj = { adjustSpacingForIcon: callback };
      const items = [callback2(callback(closure_2[8]).TableRowDivider, obj), arg0];
      obj.children = items;
      let tmp2 = callback3(closure_6, obj);
    } else {
      closure_1 = true;
      tmp2 = arg0;
    }
  });
  obj = { style: tmp.container };
  let tmp7 = null != title;
  if (tmp7) {
    const obj1 = { title };
    tmp7 = callback(TableRowGroupTitle, obj1);
  }
  const items = [tmp7, , , ];
  let tmp10 = null != description;
  if (tmp10) {
    const obj2 = { style: tmp.description, children: description };
    tmp10 = callback(arg1(dependencyMap[6]).Text, obj2);
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
    tmp17 = callback(arg1(dependencyMap[6]).Text, obj4);
  }
  items[3] = tmp17;
  obj.children = items;
  obj.children = closure_7(View, obj);
  return callback(arg1(dependencyMap[9]).TableRowGroupContext.Provider, obj);
};
