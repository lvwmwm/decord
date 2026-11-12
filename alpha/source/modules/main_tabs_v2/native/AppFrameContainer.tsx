// Module ID: 19430
// Function ID: 19431
// Name: AppFrameContainer
// Dependencies: [19, 17, 21, 5243, 575, 18584, 2]
// Exports: default

// Module 19430 (AppFrameContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useAppFrameDefault from "useAppFrame" /* 18584 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let num2;
  const container = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingLeft: num, paddingRight: num2 };
  num = 0;
  if (!arg2) {
    num = arg0;
  }
  num2 = 0;
  if (!arg2) {
    num2 = arg1;
  }
  return { container, content: { flex: 1 } };
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppFrameContainer.tsx");

export default function AppFrameContainer(ignoreHorizontalSafeArea) {
  let hasFrame;
  let insets;
  let items;
  let items1;
  let items2;
  let items3;
  let obj3;
  let styles;
  let tmp5;
  let flag = ignoreHorizontalSafeArea.ignoreHorizontalSafeArea;
  if (flag === undefined) {
    flag = false;
  }
  const children = ignoreHorizontalSafeArea.children;
  const obj = { enabled: !flag };
  ({ insets, hasFrame, styles } = useAppFrameDefault(obj));
  useAppFrameDefault(obj);
  const tmp2 = closure_5(insets.left, insets.right, flag);
  const obj2 = { style: items, children: tmp5(View, obj3) };
  items = [tmp2.container, styles.container];
  obj3 = { style: items1, children: items3 };
  items1 = [tmp2.content, styles.content];
  const obj4 = { style: items2, collapsable: !hasFrame, children };
  items2 = [tmp2.content, styles.body];
  items3 = [_false(View, obj4), ];
  let tmp3Result = null;
  tmp5 = React3;
  if (hasFrame) {
    const obj5 = { style: styles.border, pointerEvents: "none" };
    tmp3Result = tmp3(tmp4, obj5);
  }
  items3[1] = tmp3Result;
  return _false(View, obj2);
};
