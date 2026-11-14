// Module ID: 19843
// Function ID: 19844
// Name: UnionOrbsIcon
// Dependencies: [19, 17, 21, 5306, 575, 6337, 6020, 18520, 2]
// Exports: UnionOrbsIcon

// Module 19843 (UnionOrbsIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 6020 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import _modDef18520 from "module_18520" /* 18520 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "auto" }, dot: size, orb: size1 };
size = { width: 5, height: 5, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_SUBTLE };
createStyles = createStyles.createStyles;
size1 = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_account_linking/native/UnionOrbsIcon.tsx");

export function UnionOrbsIcon() {
  let items;
  let obj4;
  const tmp = closure_6();
  const obj = { direction: "horizontal", align: "center", spacing: 4, style: tmp.container, children: items };
  const obj2 = { style: tmp.dot };
  const Stack = Stack_Stack.Stack;
  items = [React3(View, obj2), , ];
  const obj3 = { source: obj4, style: tmp.orb };
  obj4 = { uri: _modDef18520 };
  const tmp2 = FastImageDefault;
  items[1] = React3(tmp2, obj3);
  const obj5 = { style: tmp.dot };
  items[2] = React3(View, obj5);
  return hasOwnProperty(Stack, obj);
}
