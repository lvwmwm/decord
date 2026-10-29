// Module ID: 13445
// Function ID: 13446
// Name: CheckpointStatsIntroScreen
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 13436, 13438, 2]

// Module 13445 (CheckpointStatsIntroScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTextDefault from "CheckpointText" /* 13436 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13438 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 } };
obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStatsIntroScreen(arg0) {
  let container;
  let description;
  let icon;
  let items;
  let items1;
  let obj4;
  let title;
  let title2;
  let titleText;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(15);
  ({ icon, title, description } = arg0);
  const tmp3 = closure_6();
  ({ container, title: title2, titleText } = tmp3);
  if (cResult[0] !== title) {
    const toLocaleUpperCaseResult = title.toLocaleUpperCase();
    cResult[0] = title;
    cResult[1] = toLocaleUpperCaseResult;
    tmp4 = toLocaleUpperCaseResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.titleText) {
    let tmp6;
    if (cResult[3] === tmp4) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === icon) {
      if (cResult[6] === tmp3.title) {
        let tmp8;
        let tmp12;
        if (cResult[7] === tmp6) {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== description) {
          const obj2 = { variant: "heading-lg/medium", children: description };
          const tmp15 = React3(CheckpointTextDefault, obj2);
          cResult[9] = description;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp3.container) {
          if (cResult[12] === tmp8) {
            let tmp16;
            if (cResult[13] === tmp12) {
              tmp16 = cResult[14];
            }
            return tmp16;
          }
        }
        const obj3 = { children: hasOwnProperty(View, obj4) };
        obj4 = { style: container, children: items };
        items = [tmp8, tmp12];
        const tmp19 = CheckpointScreenDefault;
        const tmp22 = React3(tmp19, obj3);
        cResult[11] = tmp3.container;
        cResult[12] = tmp8;
        cResult[13] = tmp12;
        cResult[14] = tmp22;
        tmp16 = tmp22;
      }
    }
    const obj5 = { style: title2, children: items1 };
    items1 = [icon, tmp6];
    const tmp11 = hasOwnProperty(View, obj5);
    cResult[5] = icon;
    cResult[6] = tmp3.title;
    cResult[7] = tmp6;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = React3(CheckpointTextDefault, { isStepHeading: true, variant: "heading-md/extrabold", style: titleText, children: tmp4 });
  cResult[2] = tmp3.titleText;
  cResult[3] = tmp4;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function CheckpointStatsIntroScreen(title) {
  let description;
  let icon;
  let items;
  let items1;
  let obj2;
  title = title.title;
  ({ icon, description } = title);
  const tmp = closure_6();
  const obj = { children: hasOwnProperty(View, obj2) };
  const obj3 = { style: tmp.title, children: items };
  items = [icon, ];
  obj2 = { style: tmp.container, children: items1 };
  const obj4 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: title.toLocaleUpperCase() };
  const tmp2 = CheckpointScreenDefault;
  const tmp3 = CheckpointTextDefault;
  items[1] = React3(tmp3, obj4);
  items1 = [hasOwnProperty(View, obj3), React3(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  return React3(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx");

export default tmp5;
