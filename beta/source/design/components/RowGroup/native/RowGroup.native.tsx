// Module ID: 13523
// Function ID: 13524
// Name: RowGroup
// Dependencies: [19, 17, 21, 4836, 576, 5279, 5999, 2]
// Exports: RowGroup

// Module 13523 (RowGroup)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: { overflow: "hidden" }, content: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  let items;
  let items1;
  let title;
  let trailing;
  ({ title, trailing } = children);
  children = children.children;
  const tmp = closure_5();
  let tmp2Result = null != title || null != trailing;
  const obj = { style: tmp.container, children: items1 };
  if (tmp2Result) {
    let tmp7 = null != title;
    const Stack = Stack_Stack.Stack;
    const tmp5 = require;
    if (tmp7) {
      const obj2 = { title };
      tmp7 = _false(tmp5(5999).TableRowGroupTitle, obj2);
    }
    const obj3 = { direction: "horizontal", spacing: 4, children: items };
    items = [tmp7, trailing];
    tmp2Result = tmp2(Stack, obj3);
  }
  items1 = [tmp2Result, ];
  const obj4 = { style: tmp.content, children };
  items1[1] = _false(View, obj4);
  return React3(View, obj);
};
