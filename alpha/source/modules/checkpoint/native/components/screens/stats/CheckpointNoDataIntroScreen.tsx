// Module ID: 12989
// Function ID: 12990
// Name: CheckpointNoDataIntroScreen
// Dependencies: [17, 21, 4972, 587, 558, 576, 12986, 6365, 12988, 2]

// Module 12989 (CheckpointNoDataIntroScreen)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTextDefault from "CheckpointText" /* 12986 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12988 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp;
const CheckpointNavigation = tmp(6365);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
let closure_6 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNoDataIntroScreen() {
  let items;
  let obj4;
  let tmp12;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(4);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = React3(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
    const obj2 = { variant: "display-md", children: CheckpointNavigation.CheckpointStatsScreen.NO_DATA_INTRO };
    const tmp10 = CheckpointTextDefault;
    const tmp11 = React3(tmp10, obj2);
    cResult[0] = tmp9;
    cResult[1] = tmp11;
    tmp5 = tmp9;
    tmp6 = tmp11;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.container) {
    const obj3 = { children: hasOwnProperty(View, obj4) };
    obj4 = { style: tmp4.container, children: items };
    items = [tmp5, tmp6];
    const tmp15 = CheckpointScreenDefault;
    const tmp18 = React3(tmp15, obj3);
    cResult[2] = tmp4.container;
    cResult[3] = tmp18;
    tmp12 = tmp18;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (function CheckpointNoDataIntroScreen() {
  let items;
  let obj2;
  const obj = { children: hasOwnProperty(View, obj2) };
  obj2 = { style: closure_6().container, children: items };
  items = [, ];
  const tmp2 = CheckpointScreenDefault;
  items[0] = React3(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
  const obj3 = { variant: "display-md", children: CheckpointNavigation.CheckpointStatsScreen.NO_DATA_INTRO };
  const tmp3 = CheckpointTextDefault;
  items[1] = React3(tmp3, obj3);
  return React3(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointNoDataIntroScreen.tsx");

export default tmp3;
