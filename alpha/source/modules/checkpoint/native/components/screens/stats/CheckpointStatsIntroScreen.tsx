// Module ID: 13595
// Function ID: 13596
// Name: CheckpointStatsIntroScreen
// Dependencies: [19, 17, 21, 5009, 575, 13585, 13587, 2]
// Exports: default

// Module 13595 (CheckpointStatsIntroScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13585 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 } };
obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx");

export default function CheckpointStatsIntroScreen(title) {
  let description;
  let icon;
  let items;
  let items1;
  let obj2;
  title = title.title;
  ({ icon, description } = title);
  const tmp = closure_5();
  const obj = { children: React3(View, obj2) };
  const obj3 = { style: tmp.title, children: items };
  items = [icon, ];
  obj2 = { style: tmp.container, children: items1 };
  const obj4 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: title.toLocaleUpperCase() };
  const tmp2 = CheckpointScreenDefault;
  const tmp3 = CheckpointTextDefault;
  items[1] = _false(tmp3, obj4);
  items1 = [React3(View, obj3), _false(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  return _false(tmp2, obj);
};
