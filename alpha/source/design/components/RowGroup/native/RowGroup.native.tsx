// Module ID: 14345
// Function ID: 14346
// Name: RowGroup
// Dependencies: [19, 17, 21, 4829, 576, 5271, 5992, 2]
// Exports: RowGroup

// Module 14345 (RowGroup)
import nativeDefault from "native" /* 576 */;
import Stack_Stack from "Stack/Stack" /* 5271 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { overflow: "hidden" }, content: { backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  ({ title, trailing } = children);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  let tmp2Result = null != title || null != trailing;
  if (tmp2Result) {
    let tmp7 = null != title;
    if (tmp7) {
      const obj2 = { title };
      tmp7 = React3(tmp5(5992).TableRowGroupTitle, obj2);
    }
    const obj3 = { direction: "horizontal", spacing: 4, children: null };
    const items = [tmp7, trailing];
    obj3.children = items;
    tmp2Result = tmp2(Stack_Stack.Stack, obj3);
    tmp5 = require;
  }
  const items1 = [tmp2Result, React3(View, { style: tmp.content, children: children.children })];
  obj.children = items1;
  return React4(View, obj);
};
