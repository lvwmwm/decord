// Module ID: 14500
// Function ID: 14501
// Name: CheckpointStatsIntroScreen
// Dependencies: [19, 17, 21, 5306, 575, 14485, 14270, 14271, 2]
// Exports: default

// Module 14500 (CheckpointStatsIntroScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 14485 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, wideContainer: { alignItems: "center", paddingBottom: 0 }, wideTitle: { justifyContent: "center" }, wideDescription: { maxWidth: 560, textAlign: "center" } };
obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx");

export default function CheckpointStatsIntroScreen(title) {
  let description;
  let icon;
  let items2;
  let items3;
  let obj2;
  title = title.title;
  ({ icon, description } = title);
  const tmp = closure_5();
  const tmp4 = useIsCheckpointWideDefault();
  const items = [tmp.container, ];
  let wideContainer = tmp4;
  const obj = { centered: tmp4, children: React3(View, obj2) };
  const tmp6 = CheckpointScreenDefault;
  if (tmp4) {
    wideContainer = tmp.wideContainer;
  }
  obj2 = { style: items, children: items3 };
  items[1] = wideContainer;
  const items1 = [tmp.title, ];
  const obj3 = { style: items1, children: items2 };
  const tmp9 = tmp4 && tmp.wideTitle;
  items1[1] = tmp9;
  items2 = [icon, ];
  const obj4 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: title.toLocaleUpperCase() };
  const tmp2Result = CheckpointTextDefault;
  items2[1] = _false(tmp2Result, obj4);
  items3 = [React3(View, obj3), ];
  let wideDescription;
  const tmp2Result2 = CheckpointTextDefault;
  if (tmp4) {
    wideDescription = tmp.wideDescription;
  }
  items3[1] = _false(tmp2Result2, { variant: "heading-lg/medium", style: wideDescription, children: description });
  return _false(tmp6, obj);
};
